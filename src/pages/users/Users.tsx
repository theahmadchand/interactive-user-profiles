import { Button, Layout } from "../../common/components";
import { User } from "./user";

export const Users = () => {
  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-none flex-col divide-y rounded-xl border border-gray-300 bg-white md:w-1/2 lg:w-1/3">
          <div className="flex flex-col space-y-2 divide-y">
            {new Array(5).fill(null).map((_, index) => (
              <User key={index} />
            ))}
          </div>
          <div className="flex flex-grow gap-4 p-4">
            <Button text="Previous" />
            <Button text="Next" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
