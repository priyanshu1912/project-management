import "../App.css";
import { useState } from "react";
import Modal from "../components/Modal";
import TicketModal from "../components/TicketModal";
import { useLocation, useNavigate } from "react-router-dom";

let initial = {
  title: "",
  description: "",
  file: "",
};
function Dashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cols, setCols] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ticketModal, setTicketModal] = useState(false);
  const [text, setText] = useState("");

  const [currentIndex, setCurrentIndex] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");
  const [ticketData, setTicketData] = useState(initial);

  const saveTicket = () => {
    //console.log(ticketData);
    cols[currentIndex][currentActivity].push(ticketData);
    setTicketData(initial);
    setTicketModal(false);
  };

  //console.log(dashboardData);
  const project = state.project;
  const userName = state.user.name;

  console.log(project);

  const openTask = (task) => {
    navigate("/task", { state: { task, user: userName } });
  };

  return (
    <>
      <div className="py-3 px-3">
        <div className="font-bold">
          {userName} - {project.project_name}
        </div>
        <div className="text-sm bg-white w-full min-h-screen flex sm:flex-col gap-3 mt-2">
          {openModal && (
            <Modal
              openModal={openModal}
              setOpenModal={setOpenModal}
              text={text}
              setText={setText}
              cols={cols}
              setCols={setCols}
            />
          )}
          {ticketModal && (
            <TicketModal
              ticketModal={ticketModal}
              setTicketModal={setTicketModal}
              ticketData={ticketData}
              setTicketData={setTicketData}
              saveTicket={saveTicket}
            />
          )}
          <div className="w-9/12 sm:w-full flex gap-2 rounded-md overflow-auto scroll-smooth hide-scrollbar">
            {project.task_lists.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-100 shadow-sm rounded-md py-2 px-2 w-1/3 sm:w-full shrink-0"
                >
                  <div className="mb-3 font-semibold px-1 uppercase">
                    {item.task_list_name}
                  </div>
                  {item.tasks.map((item) => {
                    if (item.status === "uncompleted") {
                      return (
                        <div className="shadow-md p-2 rounded-md bg-white h-fit mb-1.5">
                          <div
                            className="font-semibold cursor-pointer"
                            onClick={() => openTask(item)}
                          >
                            {item.title}
                          </div>
                          <div className="mt-1.5">{item.description}</div>
                          {/* {item.tasks.length > 1 ? (
                        <ul>
                          {item.description.map((x, index) => {
                            return (
                              <div>
                                {index + 1}. {x}
                              </div>
                            );
                          })}
                        </ul>
                      ) : (
                        <textarea
                          rows={4}
                          className="mt-1.5 resize-none new-class"
                        >
                          {item.description}
                        </textarea>
                      )} */}
                        </div>
                      );
                    }
                  })}
                  {/* <div
                onClick={() => {
                  setCurrentIndex(index);
                  setCurrentActivity(activity);
                  setTicketModal(!ticketModal);
                }}
                className="bg-white shadow-md rounded-md py-4 px-2 w-full shrink-0 h-fit cursor-pointer "
              >
                <div className="font-semibold px-1 text-center">ADD NEW</div>
              </div> */}
                </div>
              );
            })}
            <div
              onClick={() => setOpenModal(!openModal)}
              className="bg-gray-100 shadow-sm rounded-md py-4 px-2 w-1/3 shrink-0 h-fit cursor-pointer "
            >
              <div className="font-semibold px-1 text-center">ADD NEW</div>
            </div>
          </div>
          <div className="w-1/4 sm:w-full bg-gray-100 rounded-md py-4 px-1.5">
            <div className="mb-5">
              <div className="mb-3 font-semibold px-1 uppercase">
                COMPLETED TODAY
              </div>
              <div>
                {project.task_lists.map((item, index) => {
                  return (
                    <>
                      {item.tasks.map((item) => {
                        if (item.status === "completed") {
                          return (
                            <div
                              className="flex gap-1 mb-1 cursor-pointer"
                              onClick={() => openTask(item)}
                            >
                              <svg
                                width="16"
                                height="13"
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0"
                              >
                                <path
                                  d="M13.2982 1.2859C13.5588 1.0378 13.9056 0.900638 14.2654 0.90336C14.6252 0.906083 14.9699 1.04848 15.2267 1.3005C15.4835 1.55252 15.6324 1.89445 15.6419 2.25414C15.6514 2.61384 15.5208 2.96316 15.2777 3.2284L7.89621 12.4599C7.76928 12.5966 7.61609 12.7063 7.44579 12.7824C7.2755 12.8586 7.09159 12.8996 6.90508 12.9031C6.71856 12.9065 6.53326 12.8723 6.36026 12.8025C6.18726 12.7327 6.03012 12.6288 5.89822 12.4969L1.00313 7.60178C0.866812 7.47476 0.757474 7.32158 0.681639 7.15138C0.605804 6.98118 0.565026 6.79745 0.561739 6.61115C0.558452 6.42485 0.592723 6.2398 0.662507 6.06703C0.73229 5.89427 0.836158 5.73732 0.967912 5.60557C1.09967 5.47381 1.25661 5.36995 1.42938 5.30016C1.60214 5.23038 1.7872 5.19611 1.9735 5.1994C2.1598 5.20268 2.34352 5.24346 2.51372 5.3193C2.68392 5.39513 2.8371 5.50447 2.96413 5.64079L6.83801 9.51283L13.263 1.3266C13.2746 1.31236 13.287 1.29877 13.3 1.2859H13.2982Z"
                                  fill="#14FF00"
                                />
                              </svg>
                              {item.title}
                            </div>
                          );
                        }
                      })}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-3 font-semibold px-1 uppercase">
                COMPLETED THIS WEEK
              </div>
              <div>
                {project.task_lists.map((item, index) => {
                  return (
                    <>
                      {item.tasks.map((item) => {
                        if (item.status === "completed") {
                          return (
                            <div
                              className="flex gap-1 mb-1 cursor-pointer"
                              onClick={() => openTask(item)}
                            >
                              <svg
                                width="16"
                                height="13"
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0"
                              >
                                <path
                                  d="M13.2982 1.2859C13.5588 1.0378 13.9056 0.900638 14.2654 0.90336C14.6252 0.906083 14.9699 1.04848 15.2267 1.3005C15.4835 1.55252 15.6324 1.89445 15.6419 2.25414C15.6514 2.61384 15.5208 2.96316 15.2777 3.2284L7.89621 12.4599C7.76928 12.5966 7.61609 12.7063 7.44579 12.7824C7.2755 12.8586 7.09159 12.8996 6.90508 12.9031C6.71856 12.9065 6.53326 12.8723 6.36026 12.8025C6.18726 12.7327 6.03012 12.6288 5.89822 12.4969L1.00313 7.60178C0.866812 7.47476 0.757474 7.32158 0.681639 7.15138C0.605804 6.98118 0.565026 6.79745 0.561739 6.61115C0.558452 6.42485 0.592723 6.2398 0.662507 6.06703C0.73229 5.89427 0.836158 5.73732 0.967912 5.60557C1.09967 5.47381 1.25661 5.36995 1.42938 5.30016C1.60214 5.23038 1.7872 5.19611 1.9735 5.1994C2.1598 5.20268 2.34352 5.24346 2.51372 5.3193C2.68392 5.39513 2.8371 5.50447 2.96413 5.64079L6.83801 9.51283L13.263 1.3266C13.2746 1.31236 13.287 1.29877 13.3 1.2859H13.2982Z"
                                  fill="#14FF00"
                                />
                              </svg>
                              {item.title}
                            </div>
                          );
                        }
                      })}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
