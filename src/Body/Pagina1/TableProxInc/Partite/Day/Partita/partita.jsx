import { useState, useContext, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SquadraContext } from "../../../../../Global/global";
import { CoppiaPartitaContext } from "../../../../../Global/global";
import "./partita.css";

// eslint-disable-next-line
const Partita = ({ partita, movePartita, resetAll }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [selection, setSelection] = useState("");
  // eslint-disable-next-line
  const { sqSelected, setSqSelected } = useContext(SquadraContext);
  // eslint-disable-next-line
  const { coppiaSelected, setCoppiaSelected } = useContext(CoppiaPartitaContext);

  // const [eyeSelected, setEyeSelected] = useState(false);

  const handleSelection = (selectedTeam, selectionType) => {
    setSelection(selectionType);
    setSqSelected((currentSelected) => {
      let updatedSelection = currentSelected;
      const nonSelectedTeam = selectedTeam === partita.team1 ? partita.team2 : partita.team1;
      updatedSelection = updatedSelection.filter(
        (
          squadra //Rimuovi sempre entrambe le squadre
        ) =>
          squadra !== partita.team1 &&
          squadra !== partita.team1 + "X" &&
          squadra !== partita.team1 + "Y" &&
          squadra !== partita.team1 + "Z" &&
          squadra !== partita.team2 &&
          squadra !== partita.team2 + "X" &&
          squadra !== partita.team2 + "Y" &&
          squadra !== partita.team2 + "Z"
      );
      if (selectionType === "X") {
        updatedSelection = [...updatedSelection, partita.team1 + "X", partita.team2 + "X"]; // Aggiungi entrambe le squadre con 'X'
      } else {
        updatedSelection = [...updatedSelection, selectedTeam + "Z", nonSelectedTeam + "Y"]; // Aggiungi la squadra selezionata con 'Z' e 'Y'
      }
      return updatedSelection;
    });
  };
  const underlineTeam = (team) => {
    if (selection === "") {
      return ""; // Nessuno stile applicato se non c'è selezione
    }
    if (team === "1" && selection === "1") {
      return "underline font-bold text-green-700 underline-thick";
    } else if (team === "2" && selection === "2") {
      return "underline font-bold text-pink-800 underline-thick";
    } else if (selection === "X") {
      return "underline font-bold text-yellow-700 underline-thick";
    }
  };

  const handleCoppiaSelectTeam = (partita) => {
    const selectedTeams = {
      team1: partita.team1,
      team2: partita.team2,
    };

    // Controlla se le squadre correnti sono già selezionate
    if (coppiaSelected && coppiaSelected.team1 === selectedTeams.team1 && coppiaSelected.team2 === selectedTeams.team2) {
      setCoppiaSelected(null); // Deseleziona se la coppia di squadre è già selezionata
    } else {
      setCoppiaSelected(selectedTeams); // Altrimenti, seleziona la nuova coppia di squadre
    }
  };

  const handleResetColors = () => {
    setSelection("");
    setSqSelected((currentSelected) => {
      return currentSelected.filter(
        (squadra) =>
          // Rimuovi entrambe le squadre di questa partita e le loro varianti con 'X', 'Y', e 'Z' se presenti
          squadra !== partita.team1 &&
          squadra !== partita.team1 + "X" &&
          squadra !== partita.team1 + "Y" &&
          squadra !== partita.team1 + "Z" &&
          squadra !== partita.team2 &&
          squadra !== partita.team2 + "X" &&
          squadra !== partita.team2 + "Y" &&
          squadra !== partita.team2 + "Z"
      );
    });
  };
  const isBigTeam = (teamName) => {
    const boldTeams = ["Milan", "Juve", "Inter", "Atalanta", "Napoli", "Roma"];
    return boldTeams.includes(teamName);
  };
  const [, drag] = useDrag({
    type: "PARTITA",
    // eslint-disable-next-line
    item: { numero: partita.numero, day: partita.day },
  });
  const [, drop] = useDrop({
    accept: "PARTITA",
    hover: (draggedItem) => {
      // eslint-disable-next-line
      if (draggedItem.day === partita.day && draggedItem.numero !== partita.numero) {
        // eslint-disable-next-line
        movePartita(draggedItem.day, partita.day, draggedItem.numero, partita.numero);
      }
    },
    drop: (draggedItem) => {
      // eslint-disable-next-line
      if (draggedItem.day !== partita.day) {
        // eslint-disable-next-line
        movePartita(draggedItem.day, partita.day, draggedItem.numero);
      }
    },
  });
  useEffect(() => {
    // console.log("PIPPOLO RESETALL,");
    setSelection(resetAll);
    // console.log("selection", selection)
    //
    setSqSelected(resetAll);
    // console.log("sqSelected", sqSelected)
    //
    setCoppiaSelected(resetAll);
    console.log("coppiaSelected", coppiaSelected);
  }, [resetAll]);

  return (
    <>
      <div className="flex items-center justify-center sm:mx-[1rem] mb-2" ref={(node) => drag(drop(node))}>
        <div className="flex items-center justify-center  xs:text-xs sm:text-xl p-1 relative">
          <div className="-ml-2 sm:ml-0 xl:-ml-[10px] sm:mr-1 p-2 w-30">
            <span role="img" aria-label="Menu">
              ☰
            </span>
          </div>
          <div className=" w-15 ml-[-4px] ">
            {/* eslint-disable-next-line */}
            <span>{partita.time}</span>
          </div>
          <div className="flex sm:pl-1">
            <div className="sm:pr-1">
              <span role="img" aria-label="Double Arrow" onClick={() => handleResetColors()}>
                🗓️
              </span>
            </div>
          </div>
          {/* <div className="p-2 w-15">
                        <span role="img" aria-label="Calendario">📅</span>
                    </div> */}
          <div className="absolute left-full ml-8">
            <div className="text-xl font-bold">{/* {partita.numero} */}</div>
          </div>
        </div>
        <div className="relative flex flex-col sm:ml-4 justify-start w-[90rem] max-w-[70%] sm:mx-2">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center xs:text-xs sm:text-xl "></div>
            <div className={`absolute flex flex-row mr-[30%] uppercase ${isBigTeam(partita.team1) ? "bg-gray-600 font-bold p-1" : ""} ${underlineTeam("1")}`}>
              <div className="max-w-[9rem] whitespace-nowrap overflow-hidden pl-5" onClick={() => handleSelection(partita.team1, "1")}>
                {isMobile == true ? partita.team1.slice(0, 3) : partita.team1}
              </div>
            </div>
            <div
              className={`flex items-center justify-center absolute ml-[38%] sm:ml-[45%] border rounded-lg border-gray-500  min-w-5 px-3 z-4 bg-black ${selection === "X" ? "bg-yellow-800" : ""}`}
              onClick={() => handleSelection(partita.team1, "X")}
            >
              -
            </div>
            <div className={`flex flex-row ml-[60%] uppercase ${isBigTeam(partita.team2) ? "bg-gray-600 font-bold p-1" : ""} ${underlineTeam("2")}`}>
              <div className="max-w-[9rem] whitespace-nowrap overflow-hidden pl-5" onClick={() => handleSelection(partita.team2, "2")}>
                {isMobile == true ? partita.team2.slice(0, 3) : partita.team2}
                {/* {partita.team2} */}
              </div>
            </div>
          </div>
        </div>
        <button className="mb-1 px-2 bg-black text-white font-bold border border-double rounded" onClick={() => handleCoppiaSelectTeam(partita)}>
          👁️
        </button>
      </div>
    </>
  );
};
export default Partita;
