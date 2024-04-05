import { Link } from "react-router-dom";
import { Layout } from "../../common/components";

export const UserDetail = () => {
  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute mb-6 flex h-20 w-20">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
            alt=""
          />
        </div>
        <div className="mx-4 h-32 w-5/6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md sm:mx-0 sm:w-[30rem]">
          <div className="flex h-1/3 w-full items-baseline justify-between p-3">
            <Link to="/" className="text-white">
              Back
            </Link>
          </div>

          <div className="flex w-full flex-col items-center justify-around rounded-2xl bg-white">
            <div className="mb-6 mt-14 flex w-full flex-col items-center justify-center">
              <p className="font-bold text-gray-700">Maria R.</p>
              <p className="text-sm text-gray-500">New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
