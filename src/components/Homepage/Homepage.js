import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import { users } from "../../Mock-data.js";

function Homepage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cols, setCols] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    let data = users.filter((item) => item.id === id);
    setUser(data[0]);
  }, [id]);

  const openProject = (project) => {
    if (localStorage.getItem("user_role") === "admin") {
      navigate(`/user/${user.id}/project/${project.id}`, {
        state: { project, user: { name: user.name, id: user.id } },
      });
    } else {
      navigate(`/user/${user.id}/project/${project.id}`);
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
      <div className="py-3 px-3">
        <div className="font-bold">{user?.name}</div>
        <div className="grid sm:grid-cols-1 grid-cols-3 gap-2 w-full text-sm mt-2">
          {user?.projects?.map((item) => {
            return (
              <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 ">
                <div
                  onClick={() => openProject(item)}
                  className="font-semibold cursor-pointer w-fit"
                >
                  {item.project_name}
                </div>
                <div className="flex gap-1 w-full mt-1">
                  <div className="shadow-md p-2 rounded-md bg-white h-fit w-1/2">
                    <div>Latest completion</div>
                    <div className="text-2xl font-bold">
                      {item.latest_completion_count}
                    </div>
                  </div>
                  <div className="shadow-md p-2 rounded-md bg-white h-fit w-1/2">
                    <div>Latest comments</div>
                    <div className="text-2xl font-bold">
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
              <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 ">
                <div
                  onClick={() => openProject(item)}
                  className="font-semibold cursor-pointer w-fit"
                >
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
