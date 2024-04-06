import { useNavigate } from "react-router-dom";
import { Button } from "../../../common/components";

type UserProps = {
    userId: string;
    first: string;
    last: string;
    username: string;
    image: string;
};

export const User = (props: UserProps) => {
    const { userId, first, last, username, image } = props;
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between space-x-6 p-6">
            <div className="flex items-center space-x-4">
                <img src={image} className="h-14 w-14 rounded-md" alt="profile_image" />
                <div className="flex flex-col space-y-2">
                    <span>
                        {first} {last}
                    </span>
                    <span>{`@${username}`}</span>
                </div>
            </div>

            <Button text="View" size="sm" onClick={() => navigate(`/user/${userId}`)} />
        </div>
    );
};
