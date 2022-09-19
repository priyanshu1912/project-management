import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { users as allUsers } from "../../Mock-data";

function AdminHomepage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = state;

  // let allUsers = users;

  const openUserDashboard = (user) => {
    navigate(`/user/${user.id}`, { state: user });
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

  return (
    <div className='py-3 px-3'>
      <div className='grid grid-cols-3 gap-2 w-full text-sm mt-2'>
        {allUsers?.map((item) => {
          return (
            <div
              className='bg-gray-100 shadow-sm rounded-md py-2 px-2'
              onClick={() => openUserDashboard(item)}>
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
