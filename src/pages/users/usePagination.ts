import { useState } from "react";

export const usePagination = () => {
    const [page, setPage] = useState(1);

    const previousPage = () => setPage((previous) => previous - 1);
    const nextPage = () => setPage((previous) => previous + 1);

    return {
        page,
        previousPage,
        nextPage,
    };
};
