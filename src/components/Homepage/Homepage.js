import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Homepage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const user = state;

  const openProject = (project) => {
    navigate("/dashboard", { state: { project, user: { name: user.name } } });
  };

  return (
    <div className="py-3 px-3">
      <div className="font-bold">{user?.name}</div>
      <div className="grid grid-cols-3 gap-2 w-full text-sm mt-2">
        {user?.projects?.map((item) => {
          return (
            <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 ">
              <div
                onClick={() => openProject(item)}
                className="font-semibold cursor-pointer w-fit"
              >
                {item.project_name}
              </div>
              <div className="flex gap-1 w-full mt-1">
                <div className="shadow-md p-2 rounded-md bg-white h-fit w-1/2">
                  <div>Latest completion</div>
                  <div className="text-2xl font-bold">
                    {item.latest_completion_count}
                  </div>
                </div>
                <div className="shadow-md p-2 rounded-md bg-white h-fit w-1/2">
                  <div>Latest comments</div>
                  <div className="text-2xl font-bold">
                    {item.latest_comments_count}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
