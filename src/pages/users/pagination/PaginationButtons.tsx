import { PaginationButtonsSkeleton } from "./PaginationButtonsSkeleton";
import { Button } from "../../../common/components";
import { usePagination } from "./usePagination";

type PaginationButtonsProps = {
    isFetching: boolean;
};
export const PaginationButtons = (props: PaginationButtonsProps) => {
    const { isFetching } = props;
    const { pageNumber, previousPage, nextPage } = usePagination();

    if (isFetching) return <PaginationButtonsSkeleton />;

    return (
        <div className="flex flex-grow p-4">
            <Button text="Previous page" onClick={previousPage} disabled={pageNumber === 1 || isFetching} />
            <Button text="Next page" onClick={nextPage} disabled={isFetching} />
        </div>
    );
};
