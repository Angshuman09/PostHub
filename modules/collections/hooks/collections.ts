import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCollection, deleteCollection, getCollection, updateCollection } from "../actions";

export const useCollections = (workspaceId: string) => {
    return useQuery({
        queryKey: ["collections", workspaceId],
        queryFn: async () => getCollection(workspaceId)
    })
}

export const useCreateCollection = (workspaceId: string, name: string) => {
    const query = useQueryClient();

    return useMutation({
        mutationFn: async () => createCollection(workspaceId, name),
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ["collections", workspaceId]
            })
        }
    })
}

export const useDeleteCollection = (collectionId: string) => {
    const query = useQueryClient();
    return useMutation({
        mutationFn: async () => deleteCollection(collectionId),
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ["collections"]
            })
        }
    })
}

export const useUpdateCollection = (collectionId: string, name: string) => {
    const query = useQueryClient();
    return useMutation({
        mutationFn: async () => updateCollection(collectionId, name),
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ["collections"]
            })
        }
    })
}