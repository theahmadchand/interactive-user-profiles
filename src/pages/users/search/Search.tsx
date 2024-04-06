type SearchProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
};

export const Search = (props: SearchProps) => {
    const { value, onChange, onClear } = props;

    return (
        <div className="justify-start-start relative flex w-full py-2 md:w-2/3">
            <input
                className="focus:shadow-outline w-full appearance-none rounded-lg border-2 border-gray-300 p-3 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                type="text"
                placeholder="Search by name, username..."
                value={value}
                onChange={onChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
                {value && (
                    <button onClick={onClear}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 mr-3 h-5 w-5 text-blue-500 hover:text-blue-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-6 w-6 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};
