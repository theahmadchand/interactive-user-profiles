const Skeleton = () => {
    return (
        <div className="flex animate-pulse items-center justify-between space-x-6 p-2 shadow">
            <div className="flex items-center space-x-4">
                <div className="mb-2 h-14 w-14 rounded-md bg-gray-300" />
                <div className="flex flex-col space-y-2">
                    <div className="h-4 w-28 rounded bg-gray-300" />
                    <div className="h-4 w-48 rounded bg-gray-300" />
                </div>
            </div>
            <div className="h-12 w-1/4 rounded-md bg-gray-300" />
        </div>
    );
};

export const UserSkeleton = () => {
    return (
        <>
            {Array(20)
                .fill(0)
                .map((_, index) => (
                    <Skeleton key={index} />
                ))}
        </>
    );
};
