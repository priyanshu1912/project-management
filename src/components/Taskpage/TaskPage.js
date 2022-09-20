import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { users } from "../../Mock-data.js";
import { AiFillStar } from "react-icons/ai";

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
            <div className="flex gap-2 mb-6">
              <img
                src="https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">Priyanshu Bhardwaj </div>
                <div className="font-normal">42 seconds ago</div>
                <div className="flex items-center my-1">
                  <AiFillStar color="#FFD700" size={18} />
                  <AiFillStar color="#FFD700" size={18} />
                  <AiFillStar color="#FFD700" size={18} />
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  cum?
                </div>
              </div>
            </div>
            {comments.length !== 0 &&
              comments.map((item) => {
                return (
                  <div className="flex gap-2 mb-6">
                    <img
                      src="https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{item.userName}</div>
                      <div className="font-normal">{item.time}</div>
                      <div className="flex items-center my-1">
                        <AiFillStar color="#FFD700" size={18} />
                        <AiFillStar color="#FFD700" size={18} />
                        <AiFillStar color="#FFD700" size={18} />
                      </div>
                      <div>{item.comment}</div>
                    </div>
                  </div>
                );
              })}
            {comments.length !== 0 &&
              comments.map((item, reviewIdx) => (
                <div
                  //key={review.id}
                  className="flex text-sm text-gray-500 space-x-4"
                >
                  <div className="flex-none py-10">
                    <img
                      //src={review.avatarSrc}
                      src="https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg"
                      alt=""
                      className="w-10 h-10 bg-gray-100 rounded-full"
                    />
                  </div>
                  <div
                    // className={classNames(
                    //   reviewIdx === 0 ? "" : "border-t border-gray-200",
                    //   "py-10"
                    // )}
                    className="py-10"
                  >
                    <h3 className="font-medium text-gray-900">
                      {item.userName}
                    </h3>
                    <>
                      {/* <time dateTime={review.datetime}>{review.date}</time> */}
                      <div className="font-normal">{item.time}</div>
                    </>

                    <div className="flex items-center mt-4">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <AiFillStar
                          color="yellow"
                          key={rating}
                          // className={classNames(
                          //   review.rating > rating
                          //     ? "text-yellow-400"
                          //     : "text-gray-300",
                          //   "h-5 w-5 flex-shrink-0"
                          // )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    {/* <p className="sr-only">{review.rating} out of 5 stars</p> */}

                    <div
                      className="mt-4 prose prose-sm max-w-none text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: item.comment,
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src="https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg"
              className="w-10 h-10 rounded-full object-cover"
            />
            <form onSubmit={addComment} className="w-full">
              <input
                type="text"
                placeholder="Add a comment..."
                name="newcomment"
                value={newcomment}
                onChange={(e) => setNewcomment(e.target.value)}
                className="w-full border-2 p-2 outline-none"
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
