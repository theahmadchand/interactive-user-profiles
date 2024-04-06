import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Users } from "./apiModels";

const fetchUsers = async (seed: string, page: number) => {
    try {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=5&seed=${seed}`);
        return await response.json();
    } catch (error) {
        return error;
    }
};

export const useGetUsers = (page: number) => {
    const seed = "randomuser";

    const query = useQuery<Users>({
        queryKey: ["users", page],
        queryFn: () => fetchUsers(seed, page),
        staleTime: Number.POSITIVE_INFINITY,
        placeholderData: keepPreviousData,
    });

    return {
        usersQueryData: query.data,
        isLoading: query.isLoading,
        refetch: query.refetch,
    };
};
