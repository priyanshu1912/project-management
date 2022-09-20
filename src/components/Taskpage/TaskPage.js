import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { users } from "../../Mock-data.js";

function TaskPage() {
  const { state } = useLocation();
  const { id, pid, tid } = useParams();
  const [newcomment, setNewcomment] = useState("");
  const [comments, setComments] = useState([]);

  const [user, setUser] = useState(null);
  const userName = user?.name;
  const [projectName, setProjectName] = useState("");
  const [task, setTask] = useState(null);
  const [taskListName, setTaskListName] = useState("");

  // const task = state.task.task;
  // const task_list_name = state.task.item.task_list_name;
  // const project_name = state.project_name;
  // const userName = state.userName;

  useEffect(() => {
    let user = users.filter((item) => item.id === id)[0];
    setUser(user);
    let project = user.projects.filter((item) => item.id === pid)[0];
    setProjectName(project.project_name);
    let data = project.task_lists.filter((item) => {
      return item.tasks.filter((task) => task.id === tid)[0];
    })[0];
    setTaskListName(data.task_list_name);
    setTask(data.tasks.filter((task) => task.id === tid)[0]);
  }, [pid, tid]);

  const addComment = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      { userName, comment: newcomment, time: moment(new Date()).fromNow() },
    ]);
    setNewcomment("");
  };

  return (
    <div className="py-3 px-3 text-sm">
      <div className="font-bold text-base">
        {projectName} - {taskListName}
      </div>
      <div className="bg-gray-100 shadow-sm rounded-md w-full py-2 px-2 mt-2">
        <div className="flex justify-between ">
          <div
            className={`w-fit mb-2 py-0.5 px-2 text-white rounded-md ${
              task?.status === "uncompleted" ? "bg-rose-400" : "bg-green-400"
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
          <div className="resize-none new-class">{task?.description}</div>
        )}

        {/* comments */}
        <div className="mt-20">
          <div className="mb-4">
            Comments ({task?.comments ? task?.comments?.length : 0})
          </div>
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
    </div>
  );
}

export default TaskPage;
