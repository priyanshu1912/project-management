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

  console.log(allUsers)

  return (
    <div className='py-3 px-3'>
      <div className='w-full text-sm mt-2'>
        <table class="min-w-full divide-y divide-gray-200">
           <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Projects</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest Comments</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest Completions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {
              allUsers?.map(item => {
                return (
<tr>
              <td onClick={() => openUserDashboard(item)} class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer">{item.name}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ item.projects.length}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalCompletions}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalComments}</td>
            </tr>
                )
              })
            }
          </tbody>
        </table>
        {/* {allUsers?.map((item) => {
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
        })} */}
      </div>
    </div>
  );
}

export default AdminHomepage;
