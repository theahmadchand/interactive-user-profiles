import { match } from "ts-pattern";

type ButtonProps = {
  text: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { text, size = "md", onClick } = props;

  const buttonWidth = match(size)
    .with("sm", () => "w-1/4")
    .with("md", () => "w-1/2")
    .with("lg", () => "w-full")
    .exhaustive();

  return (
    <button
      className={`${buttonWidth} group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800`}
      onClick={onClick}
    >
      <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        {text}
      </span>
    </button>
  );
};
