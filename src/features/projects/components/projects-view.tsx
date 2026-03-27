"use client"
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import { SparkleIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import { FaGithub } from "react-icons/fa"
import { ProjectsList } from "./projects-list";
import { useCreateProject, useProjects } from "../hooks/use-projects";
import { adjectives, animals, colors, uniqueNamesGenerator } from "unique-names-generator"
import { useEffect, useState } from "react";
import { ProjectsCommandDialog } from "./projects-command-dialog";
import { ImportGithubDialog } from "./import-github-dialog";
const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export const ProjectsView = () => {
    const createProject = useCreateProject()
    const [commandDialogOpen, setCommandDialogOpen] = useState(false)
    const [importDialogOpen, setImportDialogOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.metaKey || e.ctrlKey) {
                if (e.key == "k") {
                    e.preventDefault()
                    setCommandDialogOpen(true)
                }
                if (e.key == "i") {
                    e.preventDefault()
                    setImportDialogOpen(true)
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])


    return (
        <>
            <ProjectsCommandDialog
                open={commandDialogOpen}
                onOpenChange={setCommandDialogOpen}
            />
            <ImportGithubDialog
                open={importDialogOpen}
                onOpenChange={setImportDialogOpen}
            />
            <div className="synapse-shell min-h-screen flex flex-col items-center justify-center p-6 md:p-16">
                <div className="w-full max-w-xl mx-auto flex flex-col gap-6 items-center">
                    <div className="w-full rounded-xl border border-[rgba(74,222,128,0.25)] bg-[rgba(5,7,5,0.75)] backdrop-blur-md p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.4)]">
                        <div className="flex justify-between gap-4 w-full items-center">
                            <div className="flex items-center gap-3 w-full group/logo">
                                <img src="/logo.png" alt="Synapse" className="size-9 md:size-11" />
                                <div className="flex flex-col">
                                    <h1 className={cn(
                                        "text-4xl md:text-5xl font-semibold synapse-brand-text leading-none",
                                        font.className,
                                    )}>
                                        Synapse
                                    </h1>
                                    <p className="text-[11px] md:text-xs tracking-[0.22em] uppercase text-(--syn-on-surface-variant)">
                                        Kinetic workspace launcher
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-4 w-full">
                            <div className="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                onClick={() => {
                                    const projectName = uniqueNamesGenerator({
                                        dictionaries: [adjectives, animals, colors],
                                        separator: "-",
                                        length: 3
                                    })
                                    createProject({
                                        name: projectName
                                    })
                                }}
                                className="h-full items-start justify-start p-4 bg-[rgba(2,3,2,0.85)] border-[rgba(74,222,128,0.2)] flex flex-col gap-6 rounded-lg hover:border-[rgba(74,222,128,0.45)] hover:bg-[rgba(13,17,14,0.95)] transition-colors">

                                <div className="flex items-center justify-between w-full">
                                    <SparkleIcon className="size-4"
                                    />
                                    <Kbd className="bg-accent border">
                                        ctrl + J
                                    </Kbd>
                                </div>
                                <div>
                                    <span className="text-sm">
                                        New
                                    </span>
                                </div>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setImportDialogOpen(true)}
                                className="h-full items-start justify-start p-4 bg-[rgba(2,3,2,0.85)] border-[rgba(74,222,128,0.2)] flex flex-col gap-6 rounded-lg hover:border-[rgba(74,222,128,0.45)] hover:bg-[rgba(13,17,14,0.95)] transition-colors"
                            >

                                <div className="flex items-center justify-between w-full">
                                    <FaGithub
                                        className="size-4"
                                    />
                                    <Kbd className="bg-accent border">
                                        ctrl + I
                                    </Kbd>
                                </div>
                                <div>
                                    <span className="text-sm">
                                        Import
                                    </span>
                                </div>
                            </Button>
                        </div>

                            <ProjectsList onViewAll={() => setCommandDialogOpen(true)} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}