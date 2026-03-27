import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { processMessage } from "@/features/conversations/inngest/process-messages";
import { importGithubRepo } from "@/features/projects/inngest/import-github-repo";
import { exportToGithub } from "@/features/projects/inngest/export-to-github";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        // functions
        processMessage,
        importGithubRepo,
        exportToGithub,
    ],
})