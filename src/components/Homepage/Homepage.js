import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Homepage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const user = state;

  const openProject = (project) => {
    navigate("/", { state: { project, user: { name: user.name } } });
  };

  return (
    <div className="py-3 px-3">
      <div className="font-bold">{user?.name}</div>
      <div className="grid grid-cols-4 gap-2 bg-gray-100 shadow-sm rounded-md w-full min-h-screen py-2 px-2 text-sm mt-2">
        {user?.projects?.map((item) => {
          return (
            <div
              className="shadow-md p-2 rounded-md bg-white cursor-pointer h-fit"
              onClick={() => openProject(item)}
            >
              <div className="font-semibold">{item.project_name}</div>
              <div>
                Latest completion count - {item.latest_completion_count}
              </div>
              <div>Latest comments count - {item.latest_comments_count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
