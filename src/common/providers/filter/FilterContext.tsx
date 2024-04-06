import { Dispatch, SetStateAction, createContext } from "react";
import { Gender } from "./type";

type FilterContextType = {
    selectedGender: Gender | null;
    setSelectedGender: Dispatch<SetStateAction<Gender | null>>;
    pageNumber: number;
    setPageNumber: Dispatch<SetStateAction<number>>;
};

export const FilterContext = createContext<FilterContextType>({
    selectedGender: null,
    setSelectedGender: () => {},
    pageNumber: 1,
    setPageNumber: () => {},
});
