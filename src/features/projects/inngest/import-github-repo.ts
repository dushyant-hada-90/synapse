import { inngest } from "@/inngest/client";
import { Id } from "../../../../convex/_generated/dataModel";
import { convex } from "@/lib/convex-client";
import { api } from "../../../../convex/_generated/api";
import { NonRetriableError } from "inngest";
import { Octokit } from "octokit";
import ky from "ky";
import { isBinaryFile } from "isbinaryfile";
interface ImportGithubRepoEvent {
    owner: string;
    repo: string;
    projectId: Id<"projects">;
    githubToken: string;
}

export const importGithubRepo = inngest.createFunction(
    {
        id: "import-github-repo",
        onFailure: async ({ event, step }) => {
            const internalKey = process.env.POLARIS_CONVEX_INTERNAL_KEY;
            if (!internalKey) return;
            const { projectId } = event.data.event.data as ImportGithubRepoEvent

            await step.run("set-failed-status", async () => {
                await convex.mutation(api.system.updateImportStatus, {
                    internalKey,
                    projectId,
                    status: "failed",
                })
            })
        }
    },
    { event: "github/import.repo" },
    async ({ event, step }) => {
        const { owner, repo, projectId, githubToken } =
            event.data as ImportGithubRepoEvent;

        type Entry = {
            filename: string;
            filePath: string;
            type: "file" | "folder";
            content: string;
            storageId: Id<"_storage"> | "";
        };

        const internalKey = process.env.POLARIS_CONVEX_INTERNAL_KEY;
        if (!internalKey) {
            throw new NonRetriableError("POLARIS_CONVEX_INTERNAL_KEY is not configured");
        }

        const octokit = new Octokit({ auth: githubToken })

        // Cleanup any existing files in the project
        await step.run("cleanup-project", async () => {
            await convex.mutation(api.system.cleanup, {
                internalKey,
                projectId

            });
        })

        const tree = await step.run("fetch-repo-tree", async () => {
            try {
                const { data } = await octokit.rest.git.getTree({
                    owner,
                    repo,
                    tree_sha: "main",
                    recursive: "1",
                });

                return data;
            } catch {
                const { data } = await octokit.rest.git.getTree({
                    owner,
                    repo,
                    tree_sha: "master",
                    recursive: "1",
                });

                return data;
            }
        });

        await step.run("import-repo-entries", async () => {
            const entries: Entry[] = [];

            for (const item of tree.tree) {
                if (!item.path) continue;

                const parts = item.path.split("/");
                const filename = parts.pop();

                if (!filename) continue; // skip invalid paths

                const filePath = parts.join("/");

                if (item.type === "tree") {
                    entries.push({
                        filename,
                        filePath,
                        type: "folder",
                        content: "",
                        storageId: "",
                    });
                    continue;
                }

                if (item.type === "blob" && item.sha) {
                    try {
                        const blob = await octokit.rest.git.getBlob({
                            owner,
                            repo,
                            file_sha: item.sha,
                        });

                        const buffer = Buffer.from(blob.data.content, "base64");
                        const binary = await isBinaryFile(buffer);

                        if (binary) {
                            const uploadUrl = await convex.mutation(api.system.generateUploadUrl, {
                                internalKey,
                            });

                            const { storageId } = await ky
                                .post(uploadUrl, {
                                    headers: { "Content-Type": "application/octet-stream" },
                                    body: buffer,
                                })
                                .json<{ storageId: Id<"_storage"> }>();

                            entries.push({
                                filename,
                                filePath,
                                type: "file",
                                content: "",
                                storageId,
                            });
                        } else {
                            const content = buffer.toString("utf8");

                            entries.push({
                                filename,
                                filePath,
                                type: "file",
                                content,
                                storageId: "",
                            });
                        }
                    } catch (err) {
                        // skip problematic files but continue import
                        console.warn(`Failed to fetch blob for ${item.path}`);
                    }
                }
            }

            await convex.mutation(api.system.createBulkEntries, {
                entries,
                internalKey,
                projectId,
            });
        })

        await step.run("set-completed-status", async () => {
            await convex.mutation(api.system.updateImportStatus, {
                internalKey,
                projectId,
                status: "completed",
            })
        })
    }
)