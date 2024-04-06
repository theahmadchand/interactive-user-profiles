export type Gender = "male" | "female" | "";
type GenderProps = {
    selectedGender: Gender;
    handleGenderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Gender = (props: GenderProps) => {
    const { selectedGender, handleGenderChange } = props;

    return (
        <main className="grid w-72 place-items-center">
            <div className="grid w-72 grid-cols-3 gap-2 rounded-lg bg-gray-100 p-1 outline outline-2 outline-blue-200">
                <div>
                    <input
                        type="radio"
                        name="option"
                        id="all"
                        value=""
                        className="peer hidden"
                        checked={selectedGender === ""}
                        onChange={handleGenderChange}
                    />
                    <label
                        htmlFor="all"
                        className="block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                        All
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="option"
                        id="male"
                        value="male"
                        className="peer hidden"
                        checked={selectedGender === "male"}
                        onChange={handleGenderChange}
                    />
                    <label
                        htmlFor="male"
                        className="block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                        Male
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="option"
                        id="female"
                        value="female"
                        className="peer hidden"
                        checked={selectedGender === "female"}
                        onChange={handleGenderChange}
                    />
                    <label
                        htmlFor="female"
                        className="block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                        Female
                    </label>
                </div>
            </div>
        </main>
    );
};
