import { ChangeEvent, useState } from "react";
import { Result } from "../../../api";

export const useSearchUsers = (users: Result[]) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const clearSearchInput = () => setSearchQuery("");
    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const searchResults = users.filter((user: Result) => {
        const query = searchQuery.toLowerCase();
        return (
            user.name.first.toLowerCase().includes(query) ||
            user.name.last.toLowerCase().includes(query) ||
            user.login.username.toLowerCase().includes(query)
        );
    });

    return {
        searchQuery,
        clearSearchInput,
        handleSearchInputChange,
        searchResults,
    };
};
