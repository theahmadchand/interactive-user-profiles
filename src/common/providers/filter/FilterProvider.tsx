import { useState } from "react";
import { Gender } from "./type";
import { FilterContext } from "./FilterContext";

export const FilterProvider: FCC = (props) => {
    const { children } = props;
    const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    return (
        <FilterContext.Provider value={{ selectedGender, pageNumber, setSelectedGender, setPageNumber }}>
            {children}
        </FilterContext.Provider>
    );
};
