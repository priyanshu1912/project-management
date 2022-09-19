import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

function Homepage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = state;

  const [cols, setCols] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");

  const openProject = (project) => {
    if (localStorage.getItem("user_role") === "admin") {
      navigate(`/user/${user.id}/project/${project.id}`, {
        state: { project, user: { name: user.name, id: user.id } },
      });
    } else {
      navigate("/dashboard", {
        state: { project, user: { name: user.name, id: user.id } },
      });
    }
  };

  return (
    <>
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
      <div className='py-3 px-3'>
        <div className='font-bold'>{user?.name}</div>
        <div className='grid grid-cols-3 gap-2 w-full text-sm mt-2'>
          {user?.projects?.map((item) => {
            return (
              <div className='bg-gray-100 shadow-sm rounded-md py-2 px-2 '>
                <div
                  onClick={() => openProject(item)}
                  className='font-semibold cursor-pointer w-fit'>
                  {item.project_name}
                </div>
                <div className='flex gap-1 w-full mt-1'>
                  <div className='shadow-md p-2 rounded-md bg-white h-fit w-1/2'>
                    <div>Latest completion</div>
                    <div className='text-2xl font-bold'>
                      {item.latest_completion_count}
                    </div>
                  </div>
                  <div className='shadow-md p-2 rounded-md bg-white h-fit w-1/2'>
                    <div>Latest comments</div>
                    <div className='text-2xl font-bold'>
                      {item.latest_comments_count}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {cols?.map((item) => {
            let project = Object.keys(item);
            return (
              <div className='bg-gray-100 shadow-sm rounded-md py-2 px-2 '>
                <div
                  onClick={() => openProject(item)}
                  className='font-semibold cursor-pointer w-fit'>
                  {project}
                </div>
              </div>
            );
          })}
          {/* <div
            onClick={() => setOpenModal(!openModal)}
            className="bg-gray-100 shadow-sm rounded-md py-4 px-2 w-full shrink-0 h-fit cursor-pointer "
          >
            <div className="font-semibold px-1 text-center">ADD NEW</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Homepage;
