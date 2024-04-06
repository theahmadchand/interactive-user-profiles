import { useFilterContext } from "../../common/providers";

export const usePagination = () => {
    const { pageNumber, setPageNumber } = useFilterContext();

    const previousPage = () => setPageNumber((previous) => previous - 1);
    const nextPage = () => setPageNumber((previous) => previous + 1);

    return {
        pageNumber,
        previousPage,
        nextPage,
    };
};
