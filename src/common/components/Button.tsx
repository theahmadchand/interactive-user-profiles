import { match } from "ts-pattern";

type ButtonProps = {
    text: string;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
    const { text, size = "md", onClick, disabled } = props;

    const buttonWidth = match(size)
        .with("sm", () => "w-1/4")
        .with("md", () => "w-1/2")
        .with("lg", () => "w-full")
        .exhaustive();

    return (
        <button
            className={`${buttonWidth} group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg ${disabled ? "cursor-not-allowed" : "bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 hover:text-white"} text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800`}
            onClick={onClick}
            disabled={disabled}
        >
            <span
                className={`relative w-full rounded-md ${disabled ? "bg-gray-300" : "bg-white group-hover:bg-opacity-0"} px-5 py-2.5 transition-all duration-75 ease-in dark:bg-gray-900`}
            >
                {text}
            </span>
        </button>
    );
};
