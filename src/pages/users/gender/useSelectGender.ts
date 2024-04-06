import { ChangeEvent } from "react";
import { useFilterContext, Gender } from "../../../common/providers";

export const useSelectGender = () => {
    const { selectedGender, setSelectedGender } = useFilterContext();

    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(event.target.value as Gender);
    };

    return { selectedGender, handleGenderChange };
};
