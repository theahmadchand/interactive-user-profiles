import { ChangeEvent, useState } from "react";
import { Gender } from "./Gender";

export const useSelectGender = () => {
    const [selectedGender, setSelectedGender] = useState<Gender>("");

    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(event.target.value as Gender);
    };

    return { selectedGender, handleGenderChange };
};
