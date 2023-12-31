import { useState, useContext, useEffect } from "react";
// import { useDrag, useDrop } from "react-dnd";
import { ATeams } from "../../../../../../START/START";
import { BTeams } from "../../../../../../START/START";

import { SquadraContext } from "../../../../../Global/global";
import { CoppiaPartitaContext } from "../../../../../Global/global";
import { CoppiaPartitaRegistrataContext } from "../../../../../Global/global";
import { GiornataClouContext } from "../../../../../Global/global";
import { PartiteDefinNoModContext } from "../../../../../Global/global";
import { ButtonResetContext } from "../../../../../Global/global";
// import { giornataClou } from "../../../../../../START/Matches/matches";
import "./partita.css";

const Partita = ({ partita, resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);
    const { giornataClouSelected } = useContext(GiornataClouContext);
    const { sqSelected, setSqSelected } = useContext(SquadraContext);
    const { coppiaSelected, setCoppiaSelected } = useContext(CoppiaPartitaContext);
    const { coppiaRegSelected, setCoppiaRegSelected } = useContext(CoppiaPartitaRegistrataContext);
    const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);
    const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);

    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const [isKQBtnActive, setIsKQBtnActive] = useState(false);
    const [isSignOk, setIsSignOk] = useState(false);
    const [selection, setSelection] = useState("");
    // const [isModifiable, setIsModifiable] = useState(true);



    const isATeam = (teamName) => {
        //    const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
        return ATeams.includes(teamName.toUpperCase());
    };

    const isBTeam = (teamName) => {
        // const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];
        return BTeams.includes(teamName.toUpperCase());
    };

    const getTextTeam = (teamName) => {
        if (isATeam(teamName)) {
            return "font-black text-sky-600/70";
        } else if (isBTeam(teamName)) {
            return "font-light text-gray-500";
        } else {
            return "text-medium text-cyan-700";
        }
    };



    const isPartitaModificabile = giornataClouSelected.some(p => p.numero === partita.numero && !p.results);
    // const partitaClass = isPartitaModificabile ? '' : 'unselectable';

    const isPartitaInCoppiaRegSelected = coppiaRegSelected.some(coppia =>
        coppia.team1 === partita.team1 && coppia.team2 === partita.team2
    );

    const handleToggleSymbol = () => {
        if (partita.results) return;
        setButtonResetIsResetting(true)
        if (!isPartitaInCoppiaRegSelected) {
            toggleSymbol();
        }
    };

    const toggleSymbol = () => {
        if (!isPartitaModificabile || partita.results) return;
        setButtonResetIsResetting(true)
        setIsKQBtnActive(!isKQBtnActive);
        setIsSignOk(!isKQBtnActive);
    };

    const toggleEye = () => {
        // if (partita.results) return;
        if (occhioApertoPartita === partita.numero) {
            setOcchioApertoPartita(null);
        } else {
            setOcchioApertoPartita(partita.numero);
        }
        setButtonResetIsResetting(true)
        handleCoppiaSelectTeam(partita);
    };
    const isEyeOpen = occhioApertoPartita === partita.numero;

    const handleSelection = (selectedTeam, selectionType, numeroPartita = '') => {
        // if (!isPartitaModificabile) return;
        if (numeroPartita !== 0 && numeroPartita === partita.numero) {
            setButtonResetIsResetting(true)
            setIsKQBtnActive(true);
            setSelection(selectionType);
            setIsButtonClickable(true);
            setSqSelected(currentSelected => {
                if (!Array.isArray(currentSelected)) {
                    console.error('Expected an array, but got:', currentSelected);
                    return [];
                }
                let updatedSelection = currentSelected.filter(
                    (squadra) => squadra !== partita.team1 && squadra !== partita.team2
                );
                if (selectionType === "1") {
                    updatedSelection.push(selectedTeam === partita.team1 ? partita.team1 : partita.team2);
                } else if (selectionType === "2") {
                    updatedSelection.push(selectedTeam === partita.team1 ? partita.team2 : partita.team1);
                } else if (selectionType === "X") {
                    updatedSelection.push(partita.team1, partita.team2);
                }
                return updatedSelection;
            });
        } else if (numeroPartita === '') {
            setButtonResetIsResetting(true)
            if (!isKQBtnActive) {
                setSelection(selectionType);
                if (selectionType === "1" || selectionType === "X" || selectionType === "2") {
                    setIsButtonClickable(true);
                }
                setSqSelected(currentSelected => {
                    if (!Array.isArray(currentSelected)) {
                        console.error('Expected an array, but got:', currentSelected);
                        return [];
                    }
                    let updatedSelection = currentSelected;
                    const nonSelectedTeam = selectedTeam === partita.team1 ? partita.team2 : partita.team1;
                    updatedSelection = updatedSelection.filter((squadra) =>
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
                        updatedSelection = [...updatedSelection, partita.team1 + "X", partita.team2 + "X"];
                    } else {
                        updatedSelection = [...updatedSelection, selectedTeam + "Z", nonSelectedTeam + "Y"];
                    }
                    return updatedSelection;
                });
            };
        };
    };

    const underlineTeam = (team) => {
        if (selection === "") {
            return "";
        }
        if (selection === "1") {
            if (team === "1") {
                return "brightnessScura underlineC font-bold underline-thick z-3";
            } else {
                return "brightnessScura"
                //text - sky - 800 / 90;
            }
        } else if (selection === "2") {
            if (team === "2") {
                return "brightnessScura underlineF font-bold underline-thick z-3";
            } else {
                return "brightnessScura"
                //text - sky - 800 / 90;
            }
        } else if (selection === "X") {
            return "brightnessScura underline underline-yellow font-bold underline-thick z-3";
        } else {
            return "brightnessScura"
            //text - sky - 800 / 90;
        }
    };

    const handleCoppiaSelectTeam = (partita) => {
        const selectedTeams = {
            team1: partita.team1,
            team2: partita.team2,
            numeroPartita: partita.numero
        };
        if (coppiaSelected && coppiaSelected.team1 === selectedTeams.team1 && coppiaSelected.team2 === selectedTeams.team2) {
            setCoppiaSelected({});
        } else {
            setCoppiaSelected(selectedTeams);
        }
    };

    const handleResetColors = () => {
        // if (partita.results) return;
        setSelection("");
        setIsKQBtnActive(false)
        setIsButtonClickable(false)
        if (occhioApertoPartita === partita.numero) {
            setOcchioApertoPartita(null);
            handleCoppiaSelectTeam(partita);
        }
        setSqSelected((currentSelected) => {
            if (currentSelected) {
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
            }
        });
    };

    const isBigTeam = (teamName) => {
        const boldTeams = ["Milan", "Juve", "Inter", "Atalanta", "Napoli", "Roma"];
        return boldTeams.includes(teamName);
    };

    // const nonSelectable = partita.results ? "unselectable" : "";
    // const [, drag] = useDrag({
    //     type: "PARTITA",
    //     // eslint-disable-next-line
    //     item: { numero: partita.numero, day: partita.day },
    // });
    // const [, drop] = useDrop({
    //     accept: "PARTITA",
    //     hover: (draggedItem) => {
    //         // eslint-disable-next-line
    //         if (draggedItem.day === partita.day && draggedItem.numero !== partita.numero) {
    //             // eslint-disable-next-line
    //             movePartita(draggedItem.day, partita.day, draggedItem.numero, partita.numero);
    //         }
    //     },
    //     drop: (draggedItem) => {
    //         // eslint-disable-next-line
    //         if (draggedItem.day !== partita.day) {
    //             // eslint-disable-next-line
    //             movePartita(draggedItem.day, partita.day, draggedItem.numero);
    //         }
    //     },
    // });
    // ------------------------------------------------------------------------------------------------

    //resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 600px)").matches);
        }; // Attach the event listener when the component mounts
        window.addEventListener("resize", handleResize);
        return () => {// Clean up the event listener when the component unmounts
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setCoppiaSelected({})
        if (resetAll) {
            // Chiudi l'occhio per tutte le partite
            setOcchioApertoPartita(null);
            setIsKQBtnActive(false);
            setIsSignOk(false);
            setIsButtonClickable(false);
            const numeriPartiteConRisultati = giornataClouSelected
                .filter(partita => partita.results !== '')
                .map(partita => partita.numero);
            giornataClouSelected.forEach(partitaClou => {
                if (!numeriPartiteConRisultati.includes(partitaClou.numero)) {
                    if (partita.numero === partitaClou.numero) {
                        setSelection("");
                        setSqSelected(currentSelected => {
                            if (!Array.isArray(currentSelected)) {
                                console.error('currentSelected is not an array:', currentSelected);
                                return [];
                            }
                            return currentSelected.filter(squadra =>
                                squadra !== partita.team1 &&
                                squadra !== partita.team2 &&
                                !squadra.includes(partita.team1) &&
                                !squadra.includes(partita.team2)
                            );
                        });
                        setCoppiaSelected(currentSelected => {
                            if (!Array.isArray(currentSelected)) {
                                console.error('currentSelected is not an array:', currentSelected);
                                return [];
                            }
                            return currentSelected.filter(coppia =>
                                coppia.numeroPartita !== partitaClou.numero
                            );
                        });
                    }
                }
            });
        }
    }, [resetAll, giornataClouSelected, partita]);

    // useEffect(() => {
    //     setIsModifiable(!partita.results);
    // }, [partita.results]);

    useEffect(() => {
        // Aggiorna partiteDefinNoMod quando cambia giornataClouSelected
        const newPartiteDefinNoMod = new Set();
        giornataClouSelected.forEach(partita => {
            if (partita.results) newPartiteDefinNoMod.add(partita.numero);
        });
        setPartiteDefinNoMod(newPartiteDefinNoMod);
    }, [giornataClouSelected, setPartiteDefinNoMod]);

    useEffect(() => {
        const partiteRegistrata = []; // Array temporaneo per le partite registrate
        giornataClouSelected.forEach((partitaGiornataClou) => {
            if (/^\d+-\d+$/.test(partitaGiornataClou.results)) {
                const score = partitaGiornataClou.results.split('-').map(Number);
                let selectionType;
                if (score[0] > score[1]) {
                    selectionType = "1";
                } else if (score[0] < score[1]) {
                    selectionType = "2";
                } else {
                    selectionType = "X";
                }
                handleSelection(partitaGiornataClou.team1, selectionType, partitaGiornataClou.numero);
                partiteRegistrata.push({
                    team1: partitaGiornataClou.team1,
                    team2: partitaGiornataClou.team2,
                    numeroPartita: partitaGiornataClou.numero,
                    risultato: partitaGiornataClou.results
                });
            }
        });
        setCoppiaRegSelected(partiteRegistrata);
    }, [giornataClouSelected]);

    useEffect(() => {
        if (partita.results) {
            const score = partita.results.split('-').map(Number);
            let selectionType;
            if (score[0] > score[1]) {
                selectionType = "1";
            } else if (score[0] < score[1]) {
                selectionType = "2";
            } else {
                selectionType = "X";
            }
            setSelection(selectionType);
            setIsKQBtnActive(true);
            setIsButtonClickable(true);
        }
    }, []);

    return (
        <>
            <div className={`text-cyan-600/70  font-bold flex items-center justify-center sm:mx-[1rem] 
                ${isPartitaModificabile ? '' : 'unselectable'}`}>
                <div className="flex items-center justify-center xs:text-xs sm:text-lg relative">
                    <div className="ml-[5%] sm:ml-0 sm:mr-1 p-[0.354rem] w-30 ml-[1%] text-gray-600">
                        {/* <span role="img" aria-label="Menu">☰</span> */}
                        <span>{partita.time}</span>
                    </div>
                    <div className="w-15 ml-[2px] text-gray-600 font-normal"> </div>
                    {/* <div className="p-2 w-15">
                        <span role="img" aria-label="Calendario">📅</span>
                    </div> */}
                    {/* <div className="absolute ml-[4rem]">
                        <div className="text-xl font-bold"></div>
                    </div> */}
                    {!isPartitaInCoppiaRegSelected && (
                        <div className={`{flex sm:pl-0 hover:cursor-context-menu z-10 }`}>
                            <div className={`{sm:pr-1 pl-0 
                                ${!isPartitaInCoppiaRegSelected} ? ml-[-0.5rem] mr-[-2rem] : 'pl-4'}`}>
                                <span role="img" aria-label="" onClick={() => handleResetColors()}>〰️</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative flex flex-col sm:ml-[2rem] justify-start w-[90rem] max-w-[70%] sm:mx-2">
                    <div className='relative flex flex-row items-center ml-[1rem] xs:text-xs sm:text-xl'>
                        {isButtonClickable && !isPartitaInCoppiaRegSelected && (
                            <div className={`absolute ml-[-3%] sm:pl-1 sm:ml-[-1.5rem] z-[20] bg-black 
                                ${!isPartitaModificabile ? 'unselectable' : ''}`}>
                                <div className="cursor-pointer" onClick={toggleSymbol}>
                                    {isKQBtnActive ? '☑️' : '✔️'}
                                </div>
                            </div>
                        )}
                        <div className={`{absolute flex flex-row ml-[6%] 
                                ${!isPartitaModificabile ? 'hover:cursor-not-allowed unselectable' : 'hover:cursor-pointer'}`}>
                            <div className={`max-w-[9rem] whitespace-nowrap overflow-hidden z-[1]
                                ${getTextTeam(partita.team1)} 
                                ${isKQBtnActive ? "hover:cursor-not-allowed unselectable" : ""}
                                ${isBigTeam(partita.team1) ? "border border-4 border-sky-600/90 rounded-md font-bold" : ""} 
                                ${underlineTeam("1")}`}
                                onClick={() => (!isSignOk && isPartitaModificabile) ? handleSelection(partita.team1, "1") : undefined}>
                                {isMobile ? partita.team1.slice(0, 3) : partita.team1}
                            </div>
                        </div>
                        <div className={`absolute flex flex-row ml-[40%] border border-sky-950 rounded-lg bg-gray-950 mt-3 w-6 pt-[0.7rem] z-[4] 
                                ${isKQBtnActive || !isPartitaModificabile ? "hover:cursor-not-allowed unselectable" : "hover:cursor-pointer"} 
                                ${selection === "X" ? "text-yellow-500/50" : ""}`}
                            onClick={() => (!isSignOk && isPartitaModificabile) ? handleSelection(partita.team1, "X") : undefined}
                        >
                            {/* Contenuto del div */}
                        </div>
                        <div className={`absolute flex flex-row ml-[20%] sm:ml-[50%] z-[2] 
                            ${!isPartitaModificabile ? 'hover:cursor-not-allowed unselectable' : 'hover:cursor-pointer'}`}>
                            <div className={`max-w-[9rem] whitespace-nowrap overflow-hidden md:ml-[1rem] 
                                ${getTextTeam(partita.team2)} 
                                ${isKQBtnActive ? "hover:cursor-not-allowed unselectable" : ""}
                                ${isBigTeam(partita.team2) ? " border border-4 border-sky-600/90 rounded-md font-bold" : ""} 
                                ${underlineTeam("2")}`}
                                onClick={() => (!isSignOk && isPartitaModificabile) ? handleSelection(partita.team2, "2") : undefined}>
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
