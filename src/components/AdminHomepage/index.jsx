import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { users } from "../../Mock-data";

function AdminHomepage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log("state", users);
  const user = state;

  let allUsers = users;

  const openProject = (project) => {
    navigate("/dashboard", { state: { project, user: { name: user.name } } });
  };

  allUsers.map((user) => {
    let totalComments = 0;
    let totalCompletions = 0;
    user.projects.forEach((project) => {
      totalComments += project.latest_comments_count;
      totalCompletions += project.latest_completion_count;
    });
    user.totalComments = totalComments;
    user.totalCompletions = totalCompletions;
  });

  console.log("totalComments", allUsers);

  return (
    <div className='py-3 px-3'>
      {/* <div className='font-bold'>{user?.name}</div> */}
      <div className='grid grid-cols-3 gap-2 w-full text-sm mt-2'>
        {users?.map((item) => {
          return (
            <div className='bg-gray-100 shadow-sm rounded-md py-2 px-2 '>
              <div className='font-semibold cursor-pointer w-fit'>
                {item.name}
              </div>
              <div className='flex gap-1 w-full mt-1'>
                <div className='shadow-md p-2 rounded-md bg-white h-fit w-1/2'>
                  <div>Total completion</div>
                  <div className='text-2xl font-bold'>
                    {item.totalCompletions}
                  </div>
                </div>
                <div className='shadow-md p-2 rounded-md bg-white h-fit w-1/2'>
                  <div>Total comments</div>
                  <div className='text-2xl font-bold'>{item.totalComments}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminHomepage;
