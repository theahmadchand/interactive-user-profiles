import { User } from "./user";
import { Search } from "./search";
import { useGetUsers } from "../../api";
import { usePagination } from "./usePagination";
import { useSearchUsers } from "./useSearchUsers";
import { Button, Layout } from "../../common/components";

export const Users = () => {
    const { page, previousPage, nextPage } = usePagination();

    const { usersQueryData, isLoading, isFetching } = useGetUsers(page);
    const displayUsers = usersQueryData?.info?.results ? usersQueryData.results : [];
    const totalUser = displayUsers.length;

    const { searchQuery, clearSearchInput, handleSearchInputChange, searchResults } = useSearchUsers(displayUsers);

    return (
        <Layout>
            <div className="flex h-full flex-col items-center gap-4 p-4">
                <div className="flex w-full flex-col md:w-3/4 lg:w-2/3 xl:w-1/3">
                    <Search value={searchQuery} onChange={handleSearchInputChange} onClear={clearSearchInput} />
                    <div className="flex w-full flex-none flex-col divide-y rounded-xl border border-gray-300 bg-white shadow-md">
                        {isLoading || isFetching ? (
                            <div className="h-[calc(100vh-13rem)] p-10">Loading...</div>
                        ) : (
                            <>
                                {totalUser > 0 ? (
                                    <>
                                        <div className="scrollbar h-[calc(100vh-13rem)] overflow-y-auto">
                                            {searchResults.map((user) => (
                                                <div key={user.login.uuid} className="flex flex-col space-y-2 divide-y">
                                                    <User
                                                        userId={user.login.uuid}
                                                        first={user.name.first}
                                                        last={user.name.last}
                                                        username={user.login.username}
                                                        image={user.picture.thumbnail}
                                                        page={page}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-grow p-4">
                                            <Button text="Previous page" onClick={previousPage} disabled={page === 1} />
                                            <Button text="Next page" onClick={nextPage} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="py-14 text-center">No data available</div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
