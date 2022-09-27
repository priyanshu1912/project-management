import React, { useState, useEffect } from "react";
//import "../Activities/Activities.module.css";
import { users } from "../../Mock-data.js";
import { useParams } from "react-router-dom";

function Activities() {
  const { id, pid } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    let data = users.filter((item) => item.id === id)[0];
    data = data.projects.filter((item) => item.id === pid)[0];
    let tasks = [];
    data.task_lists.map((item) => {
      item.tasks.map((task) => tasks.push(task));
    });
    setTasks(tasks);
    console.log(tasks);
  }, [id]);

  return (
    <div className="py-3 px-3 grid grid-cols-2 gap-8 sm:block">
      <div className="flex sm:flex-col sm:items-start items-center gap-6 sm:gap-1 mb-8 hidden sm:block">
        <div
          className={`cursor-pointer ${activeTab === 1 && `font-bold`}`}
          onClick={() => setActiveTab(1)}
        >
          Comments from client
        </div>
        <div
          className={`cursor-pointer ${activeTab === 2 && `font-bold`}`}
          onClick={() => setActiveTab(2)}
        >
          Submission or queries from basecamp
        </div>
      </div>
      <div className="sm:hidden">
        <div className="font-semibold mb-5">Comments from client</div>
        {tasks?.map((item) => {
          let title = item.title;
          return item.comments?.map((x) => {
            return (
              <div
                //key={item.id}
                className="flex items-center gap-2 mb-4 border-b pb-3"
              >
                <input
                  type="checkbox"
                  id="comment"
                  className="h-4 w-4 text-green"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <div className="flex items-center gap-1">
                      <img src={x.image} className="h-5 w-5 rounded-full" />
                      <div className="font-semibold ">{x.userName}</div>
                    </div>
                    <div className="mb-1">{x.comment}</div>
                    <label for="comment" className="text-zinc-400">
                      {title}
                    </label>
                  </div>
                  <div className="cursor-pointer w-fit border-2 border-grey-100 h-fit rounded-md p-1">
                    Transfer
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
      <div className="sm:hidden">
        <div className="font-semibold mb-5">
          Submissions or queries from basecamp
        </div>
        {tasks?.map((item) => {
          let title = item.title;
          return item.comments?.map((x) => {
            return (
              <div
                //key={item.id}
                className="flex items-center gap-2 mb-4 border-b pb-3"
              >
                <input
                  type="checkbox"
                  id="comment"
                  className="h-4 w-4 text-green"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <div className="flex items-center gap-1">
                      <img src={x.image} className="h-5 w-5 rounded-full" />
                      <div className="font-semibold ">{x.userName}</div>
                    </div>
                    <div className="mb-1">{x.comment}</div>
                    <label for="comment" className="text-zinc-400">
                      {title}
                    </label>
                  </div>
                  <div className="cursor-pointer w-fit border-2 border-grey-100 h-fit rounded-md p-1">
                    Approve
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>

      <div className="hidden sm:block">
        {activeTab === 1 && (
          <>
            {tasks?.map((item) => {
              let title = item.title;
              return item.comments?.map((x) => {
                return (
                  <div
                    //key={item.id}
                    className="flex justify-between gap-2 mb-4 border-b pb-3"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="comment"
                        className="h-4 w-4 text-green"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <img src={x.image} className="h-5 w-5 rounded-full" />
                          <div className="font-semibold ">{x.userName}</div>
                        </div>
                        <div className="mb-1">{x.comment}</div>
                        <label for="comment" className="text-zinc-400">
                          {title}
                        </label>
                      </div>
                    </div>
                    <div className="cursor-pointer w-fit border-2 border-grey-100 h-fit rounded-md p-1">
                      Transfer
                    </div>
                  </div>
                );
              });
            })}
          </>
        )}
      </div>
      <div className="hidden sm:block">
        {activeTab === 2 && (
          <>
            {tasks?.map((item) => {
              let title = item.title;
              return item.comments?.map((x) => {
                return (
                  <div
                    //key={item.id}
                    className="flex items-center gap-2 mb-4 border-b pb-3"
                  >
                    <input
                      type="checkbox"
                      id="comment"
                      className="h-4 w-4 text-green"
                    />
                    <div className="flex">
                      <div>
                        <div className="flex items-center gap-1">
                          <img src={x.image} className="h-5 w-5 rounded-full" />
                          <div className="font-semibold ">{x.userName}</div>
                        </div>
                        <div className="mb-1">{x.comment}</div>
                        <label for="comment" className="text-zinc-400">
                          {title}
                        </label>
                      </div>
                      <div className="cursor-pointer w-fit border-2 border-grey-100 h-fit rounded-md p-1">
                        Approve
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Activities;
