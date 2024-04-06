export const UserDetailSkeleton = () => {
    return (
        <div className="mb-6 mt-14 flex w-full animate-pulse flex-col items-center justify-center">
            <div className="mb-4 h-8 w-1/3 rounded bg-gray-300" />
            <div className="flex w-3/5 flex-col justify-center gap-2.5">
                <div className="h-4 rounded bg-gray-300" />
                <div className="h-4 rounded bg-gray-300" />
                <div className="h-4 rounded bg-gray-300" />
                <div className="h-4 rounded bg-gray-300" />
                <div className="h-4 rounded bg-gray-300" />
            </div>
        </div>
    );
};
