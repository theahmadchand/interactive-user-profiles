import { useNavigate } from "react-router-dom";
import { Button } from "../../../common/components";

export const User = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between space-x-6 p-6">
      <div className="flex items-center space-x-4">
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          className="h-14 w-14 rounded-full"
          alt=""
        />
        <div className="flex flex-col space-y-2">
          <span>Flyod Miles</span>
          <span>@flyodmiles</span>
        </div>
      </div>

      <Button text="View" size="sm" onClick={() => navigate("/user-detail")} />
    </div>
  );
};
