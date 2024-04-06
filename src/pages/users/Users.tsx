import { useState } from "react";
import { useGetUsers } from "../../api";
import { Button, Layout } from "../../common/components";
import { User } from "./user";

export const Users = () => {
    const [page, setPage] = useState(1);
    const { usersQueryData, isLoading } = useGetUsers(page);

    const displayUsers = usersQueryData?.info?.results ? usersQueryData.results : [];
    const totalPages = displayUsers.length;

    const lastPage = () => setPage(totalPages);
    const firstPage = () => setPage(1);

    const pagesArray = Array(totalPages)
        .fill(null)
        .map((_, index) => index + 1);

    return (
        <Layout>
            <div className="flex h-full flex-col items-center justify-center gap-4 overflow-auto">
                {isLoading ? (
                    <div className="">Loading...</div>
                ) : (
                    <div className="flex w-full flex-none flex-col divide-y rounded-xl border border-gray-300 bg-white shadow-md md:w-1/2 lg:w-1/3">
                        {totalPages > 0 ? (
                            <>
                                {displayUsers.map((user) => (
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

                                <div className="flex flex-grow p-4">
                                    <Button text="First" onClick={firstPage} disabled={page === 1} />
                                    {pagesArray.map((pg) => (
                                        <Button
                                            key={pg}
                                            text={`${pg}`}
                                            size="sm"
                                            onClick={() => setPage(pg)}
                                            disabled={pg === page}
                                        />
                                    ))}
                                    <Button text="Last" onClick={lastPage} disabled={page === totalPages} />
                                </div>
                            </>
                        ) : (
                            <div className="py-14 text-center">No data available</div>
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
};
