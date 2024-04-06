import { User } from "./user";
import { useGetUsers } from "../../api";
import { Search, useSearchUsers } from "./search";
import { Gender, useSelectGender } from "./gender";
import { Layout } from "../../common/components";
import { UserSkeleton } from "./UserSkeleton";
import { PaginationButtons } from "./pagination";
import { useFilterContext } from "../../common/providers";

export const Users = () => {
    const { pageNumber } = useFilterContext();
    const { selectedGender, handleGenderChange } = useSelectGender();

    const { usersQueryData, isFetching } = useGetUsers(pageNumber, selectedGender);
    const displayUsers = usersQueryData?.info?.results ? usersQueryData.results : [];

    const { searchQuery, clearSearchInput, handleSearchInputChange, searchResults } = useSearchUsers(displayUsers);

    return (
        <Layout>
            <div className="flex h-full flex-col items-center gap-4 p-4">
                <div className="flex w-full flex-col md:w-3/4 lg:w-2/3 xl:w-1/3">
                    <div className="flex flex-col items-center pb-2 md:flex-row md:gap-2 md:p-0">
                        <Search value={searchQuery} onChange={handleSearchInputChange} onClear={clearSearchInput} />
                        <Gender selectedGender={selectedGender} handleGenderChange={handleGenderChange} />
                    </div>
                    <div className="flex w-full flex-none flex-col divide-y rounded-xl border border-gray-300 bg-white shadow-md">
                        <div className="scrollbar h-[calc(100dvh-15rem)] overflow-y-auto md:h-[calc(100dvh-12rem)]">
                            {isFetching && <UserSkeleton />}
                            {searchResults.map((user) => (
                                <div key={user.login.uuid} className="flex flex-col space-y-2 divide-y">
                                    <User
                                        userId={user.login.uuid}
                                        first={user.name.first}
                                        last={user.name.last}
                                        username={user.login.username}
                                        image={user.picture.thumbnail}
                                    />
                                </div>
                            ))}
                        </div>
                        <PaginationButtons isFetching={isFetching} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
