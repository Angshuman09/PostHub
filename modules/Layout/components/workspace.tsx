"use client"
import { useWorkspaces } from "@/modules/workspace/hooks/workspace"
// import { ChevronDown } from "lucide-react"
import { Loader } from "lucide-react"
import { useWorkspace } from "../store"
import { useEffect } from "react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Hint } from "@/components/ui/hint"
import CreateWorkspace from "./create-workspace"

const workspace = () => {
    const { data: workspaces, isLoading } = useWorkspaces();
    const { selectedWorkspace, setSelectedWorkspace } = useWorkspace();
    const [isModalOpen, setIsModalOpen] = useState(false)
    // console.log(workspaces)
    useEffect(() => {
        if (workspaces && workspaces.length > 0 && !selectedWorkspace) {
            setSelectedWorkspace(workspaces[0])
        }

    }, [workspaces, selectedWorkspace, setSelectedWorkspace])
    if (isLoading) {
        return (
            <div className="hidden md:flex items-center">
                <Loader className="w-4 h-4 text-white" />
            </div>
        )
    }

    if (!workspaces || workspaces.length === 0) {
        return (
            <div className="hidden md:flex items-center">
                No workspace found
            </div>
        )
    }

    return (
        <>
            <Hint label="Change Workspace">
                <Select
                    value={selectedWorkspace?.id ?? ""}
                    onValueChange={(id) => {
                        const ws = workspaces.find((w) => w.id === id);
                        if (ws) setSelectedWorkspace(ws);
                    }}
                >
                    <SelectTrigger className="border-0 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white transition-all duration-200 rounded-lg select-none">
                        <div className="flex items-center space-x-2.5">
                            <span className="text-sm font-semibold">
                                <SelectValue placeholder="Select workspace" />
                            </span>
                        </div>
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 rounded-lg shadow-xl">
                        {workspaces.map((ws) => (
                            <SelectItem
                                key={ws.id}
                                value={ws.id}
                                className="text-zinc-300 hover:text-white hover:bg-zinc-800/70 cursor-pointer rounded-md focus:bg-zinc-800 focus:text-white ring-0 focus:ring-0 focus:ring-offset-0"
                            >
                                {ws.name}
                            </SelectItem>
                        ))}
                        <Separator className="my-1 bg-zinc-800" />
                        <div className="p-2 flex flex-row justify-between items-center bg-zinc-900/50">
                            <span className="text-sm font-semibold text-zinc-400">My Workspaces</span>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 rounded-md bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <Plus size={16} className="text-white" strokeWidth={2.5} />
                            </Button>
                        </div>
                    </SelectContent>
                </Select>
            </Hint>
            <CreateWorkspace isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}

export default workspace