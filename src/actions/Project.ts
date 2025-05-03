import { useMutation, useQuery } from "@tanstack/react-query"
import { generatesideasandprojects, Get } from "@/api/Project"

export const useGenerateProjects = () => {
    return useMutation({
        mutationFn: ({ api, token }: { api: string; token: string }) =>
            generatesideasandprojects(api, token),
    });
};


export const useGetProjects = (token: string) => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: () => Get(token),
        enabled: !!token,
    });
};