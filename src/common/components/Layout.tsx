import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="h-screen bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] p-6">
      {children}
    </div>
  );
};
