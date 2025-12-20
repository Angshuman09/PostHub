import { create } from 'zustand'

type Workspace = {
    id: string;
    name: string;
}

interface WorkspaceStore {
    selectedWorkspace: Workspace | null;
    setSelectedWorkspace: (workspace: Workspace) => void;
}

export const useWorkspace = create<WorkspaceStore>((set) => ({
    selectedWorkspace: null,
    setSelectedWorkspace: (workspace) => {
        set(() => ({ selectedWorkspace: workspace }))
    }
}))