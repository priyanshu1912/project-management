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
    <div className="py-3 px-3">
      <div className="flex sm:flex-col sm:items-start items-center gap-6 sm:gap-1 mb-8">
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

      <div>
        {activeTab === 1 && (
          <>
            {tasks?.map((item) => {
              let title = item.title;
              return item.comments?.map((x) => {
                return (
                  <div
                    //key={item.id}
                    className="flex items-center gap-2 mb-4"
                  >
                    <input
                      type="checkbox"
                      id="comment"
                      className="h-4 w-4 text-green"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <img src={x.image} className="h-5 w-5 rounded-full" />
                        <div>{x.userName}</div>
                      </div>
                      <div className="font-semibold mb-1">{x.comment}</div>
                      <label for="comment" className="text-zinc-400">
                        {title}
                      </label>
                      <div className="cursor-pointer text-blue-600 w-fit">
                        Transfer
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </>
        )}
        {activeTab === 2 && (
          <>
            {tasks?.map((item) => {
              let title = item.title;
              return item.comments?.map((x) => {
                return (
                  <div
                    //key={item.id}
                    className="flex items-center gap-2 mb-4"
                  >
                    <input
                      type="checkbox"
                      id="comment"
                      className="h-4 w-4 text-green"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <img src={x.image} className="h-5 w-5 rounded-full" />
                        <div>{x.userName}</div>
                      </div>
                      <div className="font-semibold mb-1">{x.comment}</div>
                      <label for="comment" className="text-zinc-400">
                        {title}
                      </label>
                      <div className="cursor-pointer text-green-600 w-fit">
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
