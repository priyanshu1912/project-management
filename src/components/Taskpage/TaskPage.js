import moment from "moment/moment";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';

function TaskPage() {
  const { state } = useLocation();
  const [newcomment, setNewcomment] = useState("");
  const [comments, setComments] = useState([]);

  const task = state.task.task;
  const task_list_name = state.task.item.task_list_name;
  const project_name = state.project_name;
  const userName = state.userName;
  console.log('state', state);

  const addComment = (e) => {
    e.preventDefault();
    console.log(moment(new Date()).fromNow());
    setComments([
      ...comments,
      { userName, comment: newcomment, time: moment(new Date()).fromNow() },
    ]);
    setNewcomment("");
  };

  return (
    <div className="py-3 px-3 text-sm">
      <div className="font-bold text-base">
        {project_name} - {task_list_name}
      </div>
      <div className="bg-gray-100 shadow-sm rounded-md w-full min-h-screen py-2 px-2 mt-2">

<div className="flex justify-between ">
        <div
          className={`w-fit mb-2 py-0.5 px-2 text-white rounded-md ${task?.status === "uncompleted" ? "bg-rose-400" : "bg-green-400"
            }`}
        >
          {task?.status}
        </div>
        
      </div>

      <div className="font-semibold my-3">{task?.title}</div>

      <div>Description:</div>
      {task?.description.length > 1 ? (
        <ul>
          {task?.description.map((x, index) => {
            return (
              <div>
                {index + 1}. {x}
              </div>
            );
          })}
        </ul>
      ) : (
        <div className="resize-none new-class">
          {task?.description}
        </div>
      )}

      {/* comments */}
      <div className="mt-20">
        <div className="mb-4">Comments ({state.task.task.comments ? state.task.task.comments.length : 0})</div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">
                Priyanshu Bhardwaj{" "}
                <span className="font-normal">42 seconds ago</span>
              </div>
              <div>This is a test comment</div>
            </div>
          </div>
          {comments.length !== 0 &&
            comments.map((item) => {
              return (
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">
                      {item.userName}{" "}
                      <span className="font-normal">{item.time}</span>
                    </div>
                    <div>{item.comment}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex items-center gap-2 mt-5">
          <img
            src="https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
            className="w-10 h-10 rounded-full object-cover"
          />
          <form onSubmit={addComment} className="w-1/4">
            <input
              type="text"
              placeholder="Add a comment..."
              name="newcomment"
              value={newcomment}
              onChange={(e) => setNewcomment(e.target.value)}
              className="w-full border-2 p-2"
            />
            <button type="submit" className="hidden"></button>
          </form>
        </div>
      </div>
    </div>
    </div >
  );
}

export default TaskPage;
