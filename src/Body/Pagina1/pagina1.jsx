import LogoSquadrePos from "./LogoSquadrePos/logoSquadrePos";
import TableClass from "./TableClass/tableClass";
import TableProxInc from "./TableProxInc/tableProxInc";
import "./pagina1.css";

const Pagina1 = () => {
  return (
    <>
      {/* <div className="flex"> */}
      {/* <div className="w-6 bg-black"></div> */}
      {/* <div className="flex overflow-x-scroll whitespace-nowrap pl-1 z-3 inset-scrollbar">
                    <LogoSquadrePos />
                </div> */}
      {/* <div className="w-6 bg-black"></div> */}
      {/* </div> */}
      <div className=" xl:flex h-[95vh] w-full overflow-x-hidden">
        <div className="md:max-h-[100%] sm:w-[100%] sm:max-w-[100%]  md:w-[100%]  md:max-w-[100%] lg:w-[100%] lg:max-w-[100%]  xl:w-[25%] xl:max-w-[30%]   bg-black pb-6 m-2 mt-0">
          <div className="overflow-y-auto overflow-x-hidden  h-[90vh]  md:h-[90vh]  lg:h-[90vh]  xl:h-[100%] border border-4  rounded-[20px] border-gray-700 bg-black  unselectable m-2">
            <TableClass />
          </div>
        </div>
        <div className="md:max-h-[100%]  sm:w-[100%] sm:max-w-[100%]  md:w-[100%] md:max-w-[100%]  lg:w-[100%] lg:max-w-[100%] xl:w-[35%] xl:max-w-[55%] ml-[-1.1rem] sm:ml-[-1rem]  xl:ml-[-1.1rem] bg-black mt-0  mr-[1rem] sm:mr-[1rem] md:mr-[2rem] xl:[0rem] pb-4 mb-4">
          <div className="overflow-y-auto overflow-x-hidden h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[90vh] xl:h-[100%] border border-4  rounded-[20px] border-gray-700 bg-black text-white my-2">
            <TableProxInc />
          </div>
        </div>
        <div className="md:max-h-[100%]  sm:w-[100%] sm:max-w-[100%]  sm:w-[100%] sm:min-w-[100%] lg:w-[100%] lg:min-w-[100%]  xl:w-[40%] xl:min-w-[40%] ml-[0.6rem]  sm:ml-[1rem]  lg:ml-[1.3rem] xl:ml-[-2.1rem] flex-1 bg-black pb-4 m-2">
          <div className="overflow-y-auto overflow-x-hidden h-[100%] border border-4  rounded-[20px] border-gray-700 bg-black unselectable mr-[0.3rem] sm:mr-[0.4rem] md:mr-[0.6rem]">
            <LogoSquadrePos />
          </div>
        </div>
      </div>
    </>
  );
};
export default Pagina1;
