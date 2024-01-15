import { useState, useContext, useEffect } from "react";
import { CoppiaPartitaContext } from "../../Global/global";
import { ButtonResetContext } from "../../Global/global";
import { ATeams } from "../../../START/StartSqCammino/1Start";
import { BTeams } from "../../../START/StartSqCammino/1Start";
import Partite from "./Partite/partite";
import CalGiorn from "./CalGiorn/calGiorn";
import squadreConfig from "./PosSquadreChart/posSquadreChart";
import serieAItalia from "../../../assets/serieAItalia/serieAItalia.png";
// import { calendario } from "../../../START/Matches/matches"
// import { giornataClou } from "../../../START/Matches/matches";
// import { GiornataClouContext } from "../../Global/global";
// import { PartiteDefinNoModContext } from "../../Global/global";
// import ModalInserimento from "./ModalInserimento/modalInser";
import "./tableProxInc.css";
// import Calendario from "./Calendario/calendario";



const TableProxInc = () => {
  const [resetAll, setResetAll] = useState([]);
  // const [isModalInserOpen, setIsModalInserOpen] = useState(false);
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);
  // const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  // const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);

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
    const teamAElements = [];
    const teamBElements = [];
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
            backgroundColor: " #584194",
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
            backgroundColor: " #9191cc",
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

          const teamColorClass = coppiaSelected.team1 === squadra.id ? "bg-sky-800 z-10" : "bg-sky-500 z-5";


          let textStyleClass = "text-black font-medium text-lg"; // Default style
          if (coppiaSelected.team1 === squadra.id && ATeams.includes(coppiaSelected.team1.toUpperCase())) {
            textStyleClass = "text-black font-black text-lg";
          } else if (coppiaSelected.team1 === squadra.id && BTeams.includes(coppiaSelected.team1.toUpperCase())) {
            textStyleClass = "text-gray-700/80 font-light text-lg";
          } else if (coppiaSelected.team2 === squadra.id && ATeams.includes(coppiaSelected.team2.toUpperCase())) {
            textStyleClass = "text-black font-black text-lg";
          } else if (coppiaSelected.team2 === squadra.id && BTeams.includes(coppiaSelected.team2.toUpperCase())) {
            textStyleClass = "text-gray-600/60 font-light text-lg";
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

  const handleReset = () => {
    // setButtonResetIsResetting(prevState => !prevState);
    setResetAll([]); // Aumenta il contatore per indicare un reset
    setTimeout(() => {
      setButtonResetIsResetting(false);
    }, 300); // 2000 millisecondi equivalgono a 2 secondi
  };

  useEffect(() => {
    if (!buttonResetIsResetting) {
      setButtonResetIsResetting(false);
    }
  }, []);
  // return;
  // setGiornataClouSelected(giornataClou)
  // };

  // useEffect(() => {
  //   if (!buttonResetIsResetting) {
  //     setButtonResetIsResetting(false)
  //   }
  // }, [buttonResetIsResetting])

  //   const updatedPartiteDefinNoMod = new Set();
  //   giornataClouSelected.forEach(partita => {
  //     // Se la partita ha un risultato, aggiungila a updatedPartiteDefinNoMod
  //     if (partita.results) {
  //       updatedPartiteDefinNoMod.add(partita.numero);
  //     }
  //   });
  //   setPartiteDefinNoMod(updatedPartiteDefinNoMod);

  // }, [resetAll, giornataClouSelected, setPartiteDefinNoMod]);





  // useEffect(() => {
  //   // console.log("squadreConfig:", squadreConfig);
  //   if (coppiaSelected) {
  //     setSquadreAttive({ team1: coppiaSelected.team1, team2: coppiaSelected.team2 });
  //     // console.log("T1:", coppiaSelected.team1);
  //     // console.log("T2:", coppiaSelected.team2);
  //   }
  // }, [coppiaSelected]);



  return (
    <>
      <div className="relative ">
        <div className="flex justify-center h-[25.45rem]">
          <div className="relative overflow-hidden w-[120rem] ml-[-3rem]">
            <img src={serieAItalia} alt="serieAItalia" className="relative h-[47rem] w-[100%] mt-[-4.4rem] filter brightness-50" />
            {coppiaSelected && renderSquadre()}
            {buttonResetIsResetting &&
              <button className="absolute top-[30.5%] left-[46%] p-1 font-bold bg-transparent rounded-full hover:bg-red-400"
                onClick={() => handleReset()}
                style={{ width: '12px', height: '12px', backgroundColor: 'black' }}
              >
                {/* Nessun contenuto all'interno del bottone, solo lo stile del cerchio */}
              </button>
              // <button className="absolute top-[26.5%] left-[44.5%] p-2 font-bold bg-transparent rounded-lg hover:bg-red-400"
              //   // style={{ transform: "rotate(180deg)" }}
              //   onClick={() => handleReset()}
              // >
              //   📍
              // </button>
            }
            <div type='checkbox' className="absolute top-[22%] left-[48.5%]">1 -📈 </div>
            <div className="absolute top-[26%] left-[49.5%]">3 -📊 👁️</div>
            <div className="absolute top-[30.2%] left-[51%]">3 -📋 C/F</div>
          </div>
        </div>
        {/* <button className="mt-2 mr-4 p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
              // style={{ transform: 'rotate(180deg)' }}
              onClick={() => setIsModalInserOpen(true)}
            > 📝 </button> */}
        <div className="sticky flex flex-col overflow-y-hidden h-[33.2rem] bg-black mt-[-1.2rem] z-[4]">
          <CalGiorn onReset={resetAll} />
          <Partite resetAll={resetAll} />
        </div>
        {/* </div> */}
      </div >
      {/* <ModalInserimento isOpen={isModalInserOpen} isClose={() => setIsModalInserOpen(false)} /> */}
    </>
  );
};

export default TableProxInc;
