import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const useFilterContext = () => {
    const service = useContext(FilterContext);

    if (service === undefined) {
        throw new Error("useFilterContext must be used within FilterProvider");
    }

    return service;
};
