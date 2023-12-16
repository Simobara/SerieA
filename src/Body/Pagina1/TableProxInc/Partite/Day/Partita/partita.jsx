

import { useState, useContext, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SquadraContext } from "../../../../../Global/global";
import { CoppiaPartitaContext } from "../../../../../Global/global";
// import { NewPartiteContext } from "../../../../../Global/global";
import "./partita.css";

const Partita = ({ partita, movePartita, resetAll, coppiaSquadre, occhioApertoPartita, setOcchioApertoPartita }) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);
    const [isKQBtnActive, setIsKQBtnActive] = useState(false);
    const [isSignOk, setIsSignOk] = useState(false);//not mandatory
    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const [selection, setSelection] = useState("");
    const { sqSelected, setSqSelected } = useContext(SquadraContext);
    const { coppiaSelected, setCoppiaSelected } = useContext(CoppiaPartitaContext);

    const toggleSymbol = () => {
        setIsKQBtnActive(!isKQBtnActive);//true
        if (isKQBtnActive) {
            isSignOk(true)
        } else {
            isSignOk(false)
        }
    };

    const toggleEye = () => {
        console.log("Toggle Eye - Current State: ", occhioApertoPartita);
        if (occhioApertoPartita === partita.numero) {
            setOcchioApertoPartita(null);
        } else {
            setOcchioApertoPartita(partita.numero);
        }
        handleCoppiaSelectTeam(partita);
    };
    const isEyeOpen = occhioApertoPartita === partita.numero;

    // console.log("PARTITA/COPPIA SQUADRE", coppiaSquadre)
    const handleSelection = (selectedTeam, selectionType) => {
        if (!isKQBtnActive) {
            setSelection(selectionType);
            if (selectionType === "1" || selectionType === "X" || selectionType === "2") {
                setIsButtonClickable(true)
            }
            setSqSelected((currentSelected) => {
                let updatedSelection = currentSelected;
                const nonSelectedTeam = selectedTeam === partita.team1 ? partita.team2 : partita.team1;
                updatedSelection = updatedSelection.filter(
                    (//Rimuovi sempre entrambe le squadre
                        squadra) =>
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
    };

    const underlineTeam = (team) => {
        if (selection === "") {
            return ""; // Nessuno stile applicato se non c'è selezione
        }
        if (selection === "1") {
            if (team === "1") {
                return "underline underline-green text-sky-900 font-bold underline-thick z-3"; // Stile per la squadra selezionata
            } else {
                return "text-sky-900"; // Stile per l'altra squadra
            }
        } else if (selection === "2") {
            if (team === "2") {
                return "underline underline-red text-sky-900 font-bold underline-thick z-3"; // Stile per la squadra selezionata
            } else {
                return "text-sky-900"; // Stile per l'altra squadra
            }
        } else if (selection === "X") {
            return "underline underline-yellow text-sky-900 font-bold underline-thick z-3"; // Stile per la selezione 'X'
        }
    };

    const handleCoppiaSelectTeam = (partita) => {
        // toggleEye();
        const selectedTeams = {
            team1: partita.team1,
            team2: partita.team2,
            numeroPartita: partita.numero
        };

        if (coppiaSelected && coppiaSelected.team1 === selectedTeams.team1 && coppiaSelected.team2 === selectedTeams.team2) {//Control sq correnti sn gia'selez
            setCoppiaSelected([]); // Deseleziona se la coppia di squadre è già selezionata
        } else {
            setCoppiaSelected(selectedTeams); // Altrimenti, seleziona la nuova coppia di squadre
        }
    };

    const handleResetColors = () => {
        setSelection("");
        setIsKQBtnActive(false)
        setIsButtonClickable(false)
        if (occhioApertoPartita === partita.numero) {
            setOcchioApertoPartita(null);
            handleCoppiaSelectTeam(partita);
        }
        setSqSelected((currentSelected) => {
            return currentSelected.filter(
                (squadra) =>
                    // Rimuovi entrambe le squadre e le loro varianti con 'X', 'Y', e 'Z' se presenti
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
        setSqSelected(resetAll);
        // console.log("sqSelected", sqSelected)
        setCoppiaSelected(resetAll);
        // console.log("coppiaSelected", coppiaSelected);
        setOcchioApertoPartita(null);
        setIsButtonClickable(false)
        setIsKQBtnActive(false);
    }, [resetAll]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 600px)").matches);
        }; // Attach the event listener when the component mounts
        window.addEventListener("resize", handleResize);
        return () => {// Clean up the event listener when the component unmounts
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="text-cyan-600 font-bold flex items-center justify-center sm:mx-[1rem]"
                ref={(node) => drag(drop(node))}>
                <div className="flex items-center justify-center xs:text-xs sm:text-lg relative">
                    <div className="ml-[5%] sm:ml-0 sm:mr-1 p-2 w-30 ml-[1%] text-gray-600">
                        <span role="img" aria-label="Menu">
                            ☰
                        </span>
                    </div>
                    <div className=" w-15 ml-[2px] text-gray-600 font-normal">
                        {/* eslint-disable-next-line */}
                        <span>{partita.time}</span>
                    </div>
                    {/* <div className="p-2 w-15">
                        <span role="img" aria-label="Calendario">📅</span>
                    </div> */}
                    <div className="absolute ml-[4rem]">
                        <div className="text-xl font-bold">
                            {/* {partita.numero} */}
                        </div>
                    </div>
                    <div className="flex ml-2 sm:pl-1 hover:cursor-context-menu z-10" >
                        <div className="sm:pr-1">
                            <span role="img" aria-label="Double Arrow" onClick={() => handleResetColors()}
                            // style={{ transform: "rotate(180deg)" }}
                            >
                                〰️
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col sm:ml-[2rem] justify-start w-[90rem] max-w-[70%] sm:mx-2">
                    <div className="relative flex flex-row items-center ml-[1rem] xs:text-xs sm:text-xl ">
                        <div className="absolute ml-[-10%] sm:pl-1 sm: ml-[-2rem] z-[20] bg-black">
                            {isButtonClickable &&
                                <div className="" onClick={toggleSymbol} >
                                    {isKQBtnActive ? '☑️' : '✔️'}
                                </div>
                            }
                        </div>
                        <div className={`absolute flex flex-row ml-[6%]
                            ${(isKQBtnActive) ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>
                            <div className={`max-w-[9rem] whitespace-nowrap overflow-hidden z-[1] 
                                ${isBigTeam(partita.team1) ? "bg-gray-500/80 font-bold" : ""} 
                                ${underlineTeam("1")}`}
                                onClick={() => (!isSignOk) && handleSelection(partita.team1, "1")}>
                                {isMobile ? partita.team1.slice(0, 3) : partita.team1}
                            </div>
                        </div>
                        <div className={`absolute flex flex-row ml-[40%] border border-gray-700 rounded-lg
                        bg-gray-900 w-6 p-3 z-[4]
                            ${(isKQBtnActive) ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}
                            ${selection === "X" ? "text-yellow-500/50" : ""}`}
                            onClick={() => (!isSignOk) && (handleSelection(partita.team1, "X"))}
                        >
                        </div>
                        <div className={`absolute flex flex-row ml-[20%] sm:ml-[50%] z-[2]
                            ${(isKQBtnActive) ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>
                            <div className={`max-w-[9rem] whitespace-nowrap overflow-hidden md:ml-[1rem] 
                                ${isBigTeam(partita.team2) ? "bg-gray-500/80 font-bold" : ""} 
                                ${underlineTeam("2")}`}
                                onClick={() => (!isSignOk) && (handleSelection(partita.team2, "2"))}>
                                {isMobile == true ? partita.team2.slice(0, 3) : partita.team2}
                                {/* {partita.team2} */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="sm:pl-1 sm: mr-[0.5rem] z-[20] bg-black">
                    <div className="sm:pr-1 cursor-pointer" onClick={toggleSymbol} >
                        {isActive ? '❗' : '❔'}
                    </div>
                </div> */}
                <button
                    className="bg-black text-white font-bold z-[10] hover:cursor-pointer"
                    onClick={() => toggleEye()}
                    data-partita-numero={partita.numero}
                >
                    {/* 🗨️ */}
                    {isEyeOpen ? '👁️' : '🗨️'}
                </button>
            </div >
        </>
    );
};
export default Partita;

