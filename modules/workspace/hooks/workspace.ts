import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { createWorkspace, getWorkspaceById, getWorkspaces } from "../actions"

export const useWorkspaces = () => {
    return useQuery({
        queryKey: ["workspaces"],
        queryFn: async () => getWorkspaces(),
    })
}

export const useCreateWorkspace = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (name: string) => createWorkspace(name),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["workspaces"],
            })
        }
    })
}

export const useGetWorkspace = (id: string) => {
    return useQuery({
        queryKey: ["workspace", id],
        queryFn: async () => getWorkspaceById(id),
    })
}