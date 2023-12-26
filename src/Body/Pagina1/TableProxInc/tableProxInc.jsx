import { useState, useContext, useEffect } from "react";
// import Calendario from "./Calendario/calendario";
import Partite from "./Partite/partite";
import ModalInserimento from "./ModalInserimento/modalInser";
import serieAItalia from "../../../assets/serieAItalia/serieAItalia.png";
// import "./tableProxInc.css";
import { CoppiaPartitaContext } from "../../Global/global";
import squadreConfig from "./PosSquadreChart/posSquadreChart";
import { ATeams } from "../../../START/START";
import { BTeams } from "../../../START/START";


const TableProxInc = () => {
  const [resetAll, setResetAll] = useState([]);
  const [isModalInserOpen, setIsModalInserOpen] = useState(false);
  const { coppiaSelected } = useContext(CoppiaPartitaContext);

  const [squadreAttive, setSquadreAttive] = useState({ team1: "", team2: "" });


  const isATeam = (teamName) => {
    //    const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
    return ATeams.includes(teamName.toUpperCase());
  };

  const isBTeam = (teamName) => {
    // const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];
    return BTeams.includes(teamName.toUpperCase());
  };




  const renderSquadre = () => {
    return squadreConfig.map(squadra => {
      // Verifica se la squadra corrente è team1 o team2
      const isCoppiaSelectedTeam = coppiaSelected && (coppiaSelected.team1 === squadra.id || coppiaSelected.team2 === squadra.id);

      // Trova le informazioni di team1 e team2 da squadreConfig
      const team1Info = coppiaSelected && squadreConfig.find(s => s.id === coppiaSelected.team1);
      const team2Info = coppiaSelected && squadreConfig.find(s => s.id === coppiaSelected.team2);

      // Verifica se team1 e team2 hanno gli stessi valori di top e left
      const isSamePosition = team1Info && team2Info && team1Info.style.top === team2Info.style.top && team1Info.style.left === team2Info.style.left;

      if (isCoppiaSelectedTeam) {
        if (isSamePosition) {
          // Stile per un singolo cerchio verde
          const sharedStyle = {
            width: "35px",
            height: "35px",
            backgroundColor: " #3372f0",
            borderRadius: "50%",
            position: "absolute",
            top: squadra.style.top,
            left: squadra.style.left,
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          };

          const innerCircleStyle = {
            width: "25px",
            height: "25px",
            backgroundColor: " #e8e8fa",
            opacity: 0.9, // Regola l'opacità per il bianco trasparente
            borderRadius: "50%"
          };

          return (
            <div
              key={squadra.id}
              id={squadra.id}
              style={sharedStyle}
            >
              <div style={innerCircleStyle}></div>
            </div>
          );
        } else {
          // Stile separato per team1 e team2
          const customStyle = {
            ...squadra.style,
            width: "25px",
            height: "25px",
            zIndex: 4,
          };

          const teamColorClass = coppiaSelected.team1 === squadra.id ? "bg-sky-800" : "bg-sky-500";

          let textStyleClass = "text-black font-normal text-lg"; // Default style
          if (coppiaSelected.team1 === squadra.id && ATeams.includes(coppiaSelected.team1.toUpperCase())) {
            textStyleClass = "text-black font-extrabold text-md";
          } else if (coppiaSelected.team1 === squadra.id && BTeams.includes(coppiaSelected.team1.toUpperCase())) {
            textStyleClass = "text-blue-200 font-normal text-md";
          } else if (coppiaSelected.team2 === squadra.id && ATeams.includes(coppiaSelected.team2.toUpperCase())) {
            textStyleClass = "text-black font-extrabold text-md";
          } else if (coppiaSelected.team2 === squadra.id && BTeams.includes(coppiaSelected.team2.toUpperCase())) {
            textStyleClass = "text-blue-200 font-normal text-md";
          }

          const teamName = coppiaSelected.team1 === squadra.id ? coppiaSelected.team1 : coppiaSelected.team2;

          return (
            <div
              key={squadra.id}
              id={squadra.id}
              className={`absolute ${teamColorClass} scale-150 rounded-full flex items-center justify-center`}
              style={customStyle}
            >
              <span className={`${textStyleClass} text-md overflow-hidden`}>{teamName.slice(0, 3)}</span>
            </div>
          );
        }
      } else {
        const defaultStyle = {
          width: "11px",
          height: "11px",
          backgroundColor: "black",
          borderRadius: "50%",
          position: "absolute",
          top: squadra.style.top,
          left: squadra.style.left
        };

        return (
          <div
            key={squadra.id}
            id={squadra.id}
            style={defaultStyle}
          ></div>
        );
      }
    });
  };


  useEffect(() => {
    // console.log("squadreConfig:", squadreConfig);
    if (coppiaSelected) {
      setSquadreAttive({ team1: coppiaSelected.team1, team2: coppiaSelected.team2 });
      // console.log("T1:", coppiaSelected.team1);
      // console.log("T2:", coppiaSelected.team2);
    }
  }, [coppiaSelected]);



  return (
    <>
      <div className="relative ">
        <div className="flex justify-center h-[25rem]">
          <div className="relative overflow-hidden w-[120rem] ml-[-3rem]">
            <img src={serieAItalia} alt="serieAItalia" className="relative h-[47rem] w-[100%] mt-[-4.4rem]" />
            {coppiaSelected && renderSquadre()}
            <button className="absolute top-[26.5%] left-[44.5%] p-2 font-bold bg-transparent rounded-lg hover:bg-red-400"
              // style={{ transform: "rotate(180deg)" }}
              onClick={() => setResetAll([])}
            >
              📍
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
          <Partite resetAll={resetAll} coppiaSelected={squadreAttive} />
        </div>
        {/* </div> */}
      </div >
      {/* <ModalInserimento isOpen={isModalInserOpen} isClose={() => setIsModalInserOpen(false)} /> */}
    </>
  );
};

export default TableProxInc;
