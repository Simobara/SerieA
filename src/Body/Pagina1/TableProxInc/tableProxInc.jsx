import { useState } from "react";
// import Calendario from "./Calendario/calendario";
import Partite from "./Partite/partite";
import ModalInserimento from "./ModalInserimento/modalInser";

const TableProxInc = () => {
  const [resetAll, setResetAll] = useState([]);
  const [isModalInserOpen, setIsModalInserOpen] = useState(false);

  return (
    <>
      <div className=" min-h-[93%] mt-0">
        <div
          className=" h-20 mt-3 w-full flex justify-end "
          // className="absolute top-0 right-0 "
        >
          <div>
            <button
              className="mt-2 mr-4 p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
              // style={{ transform: 'rotate(180deg)' }}
              onClick={() => setIsModalInserOpen(true)}
            >
              📝
            </button>
            <button
              className="mr-4 p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
              style={{ transform: "rotate(180deg)" }}
              onClick={() => setResetAll([])}
            >
              🧲
            </button>
          </div>
        </div>
        {/* <div className="flex items-start"> */}
        {/* <Calendario /> */}
        {/* </div> */}
        {/* <div className="absolute bottom-0 w-full mt-[20rem]"> */}
        <div className="flex  items-start mt-2 overflow-y-auto h-[90vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] xl:h-[100%]">
          <Partite resetAll={resetAll} />
        </div>
        {/* </div> */}
      </div>
      <ModalInserimento isOpen={isModalInserOpen} isClose={() => setIsModalInserOpen(false)} />
    </>
  );
};

export default TableProxInc;
