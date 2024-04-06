import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Users } from "./apiModels";

const fetchUsers = async (page: number, gender: string) => {
    let url = `https://randomuser.me/api/?results=20`;

    if (gender && gender.trim() !== "") url += `&gender=${gender}`;
    else if (page > 0) url += `&seed=somerandomstring&page=${page}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return error;
    }
};

export const useGetUsers = (page: number, gender: string = "") => {
    const { data, isLoading, isFetching } = useQuery<Users>({
        queryKey: ["users", { page, gender }],
        queryFn: () => fetchUsers(page, gender),
        staleTime: Number.POSITIVE_INFINITY,
        placeholderData: keepPreviousData,
    });

    return {
        usersQueryData: data,
        isLoading,
        isFetching,
    };
};
