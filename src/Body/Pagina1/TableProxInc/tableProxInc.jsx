import { useState } from "react";
// import Calendario from "./Calendario/calendario";
import Partite from "./Partite/partite";
import ModalInserimento from "./ModalInserimento/modalInser";
import serieAItalia from "../../../assets/serieAItalia/serieAItalia.png";
// import "./tableProxInc.css";

const TableProxInc = () => {
  const [resetAll, setResetAll] = useState([]);
  const [isModalInserOpen, setIsModalInserOpen] = useState(false);

  return (
    <>
      <div className="relative ">
        <div className="flex justify-center h-[25rem]">
          <div className="relative overflow-hidden w-[120rem] bg-black ml-[-3rem]">
            <img src={serieAItalia} alt="serieAItalia" className="absolute h-[47rem] w-[100%] mt-[-4.4rem]" />
            <button className="absolute top-[27%] right-[48%] p-4 font-bold bg-transparent rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
              style={{ transform: "rotate(180deg)" }}
              onClick={() => setResetAll([])}
            >
              🧲
            </button>
          </div>


        </div>

        {/* <div> */}
        {/* <button
              className="mt-2 mr-4 p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
              // style={{ transform: 'rotate(180deg)' }}
              onClick={() => setIsModalInserOpen(true)}
            >
              📝
            </button> */}
        {/* </div> */}
        {/* <div className="flex items-start"> */}
        {/* <Calendario /> */}
        {/* </div> */}
        {/* <div className="absolute bottom-0 w-full mt-[20rem]"> */}
        <div className="sticky flex flex-col overflow-y-hidden h-[33rem] bg-black mt-[-0.5rem] z-[4]">
          <Partite resetAll={resetAll} />
        </div>
        {/* </div> */}
      </div >
      <ModalInserimento isOpen={isModalInserOpen} isClose={() => setIsModalInserOpen(false)} />
    </>
  );
};

export default TableProxInc;
