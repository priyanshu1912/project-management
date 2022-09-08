import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [cols, setCols] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");

  console.log(openModal);

  return (
    <div className="text-sm bg-white w-full min-h-screen flex gap-3 py-3 px-3">
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
      <div className="w-9/12 flex gap-2 rounded-md overflow-auto scroll-smooth hide-scrollbar">
        <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 w-1/3 shrink-0">
          <div className="mb-3 font-semibold px-1">TO DO 2</div>
          <div className="shadow-md p-2 rounded-md bg-white h-fit mb-1.5">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              esse.
            </div>
            <div className="bg-yellow-200 px-2 py-0.5 font-semibold rounded-md box-border mt-1.5 uppercase w-fit">
              Lorem, ipsum dolor
            </div>
          </div>
        </div>
        <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 w-1/3 shrink-0">
          <div className="mb-3 font-semibold px-1">IN PROGRESS 1</div>
          <div className="shadow-md p-2 rounded-md bg-white h-fit mb-1.5">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              esse.
            </div>
            <div className="bg-lime-200 px-2 py-0.5 font-semibold rounded-md box-border mt-1.5 uppercase w-fit">
              Lorem, ipsum dolor
            </div>
          </div>
        </div>
        <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 w-1/3 shrink-0">
          <div className="mb-3 font-semibold px-1">IN REVIEW 1</div>
          <div className="shadow-md p-2 rounded-md bg-white h-fit mb-1.5">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              esse.
            </div>
            <div className="bg-rose-200 px-2 py-0.5 font-semibold rounded-md box-border mt-1.5 uppercase w-fit">
              Lorem, ipsum dolor
            </div>
          </div>
        </div>
        {cols.length > 0 &&
          cols.map((item) => {
            return (
              <div className="bg-gray-100 shadow-sm rounded-md py-2 px-2 w-1/3 shrink-0">
                <div className="mb-3 font-semibold px-1 uppercase">{item}</div>
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
      <div className="w-1/4 bg-gray-100 rounded-md py-4 px-1.5">
        <div className="mb-5">
          <div className="mb-3 font-semibold px-1 uppercase">
            Completed Today
          </div>
          <ul className="list-disc ml-7">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="mb-5">
          <div className="mb-3 font-semibold px-1 uppercase">
            Completed This Week
          </div>
          <ul className="list-disc ml-7">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
