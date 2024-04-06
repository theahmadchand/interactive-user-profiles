import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Gender } from "../common/providers";
import { Users } from "./apiModels";

const fetchUsers = async (page: number, gender: Gender | null) => {
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

export const useGetUsers = (pageNumber: number, selectedGender: Gender | null) => {
    const query = useQuery<Users>({
        queryKey: ["users", { pageNumber, selectedGender }],
        queryFn: () => fetchUsers(pageNumber, selectedGender),
        staleTime: Number.POSITIVE_INFINITY,
        placeholderData: keepPreviousData,
    });

    return {
        ...query,
        usersQueryData: query.data,
    };
};
