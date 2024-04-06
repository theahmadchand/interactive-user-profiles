import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Layout } from "../../common/components";
import { useQueryClient } from "@tanstack/react-query";
import { Users } from "../../api";
import { useEffect } from "react";

function formatDate(date: Date | string): string {
    if (!(date instanceof Date)) date = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
}

export const UserDetail = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page"));

    const queryClient = useQueryClient();
    const queryData = queryClient.getQueryData<Users>(["users", page]);

    const user = queryData?.results.find((item) => item.login.uuid === userId);

    useEffect(() => {
        if (!user) navigate("/");
    }, [navigate, user]);

    if (!user) return;

    return (
        <Layout>
            <div className="flex h-full w-full items-center justify-center">
                <div className="absolute mb-6 flex h-20 w-20">
                    <img className="h-20 w-20 rounded-full object-cover" src={user.picture.large} alt="profile_photo" />
                </div>
                <div className="mx-4 h-32 w-5/6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md sm:mx-0 sm:w-[30rem]">
                    <div className="flex h-1/3 w-full items-baseline justify-between p-3">
                        <Link to="/" className="text-white">
                            Back
                        </Link>
                    </div>

                    <div className="flex w-full flex-col items-center justify-around rounded-2xl bg-white">
                        <div className="mb-6 mt-14 flex w-full flex-col items-center justify-center">
                            <p className="mb-4 text-2xl font-extrabold text-gray-700">
                                {user.name.first} {user.name.last}
                            </p>
                            <p className="flex gap-2">
                                <span className="font-bold">Email:</span>
                                <span className="text-gray-500">{user.email}</span>
                            </p>
                            <p className="flex gap-2">
                                <span className="font-bold">Location:</span>
                                <span className="text-gray-500">{user.email}</span>
                            </p>
                            <p className="flex gap-2">
                                <span className="font-bold">Date of birth:</span>
                                <span className="text-gray-500">{formatDate(user.dob.date)}</span>
                            </p>
                            <p className="flex gap-2">
                                <span className="font-bold">Phone:</span>
                                <span className="text-gray-500">{user.phone}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
