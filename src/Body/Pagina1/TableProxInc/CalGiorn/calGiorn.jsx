import React, { useRef, useState, useContext, useEffect } from 'react';
import { calendario } from "../../../../START/Matches/matches";
import { GiornataClouContext } from "../../../Global/global/";
import { PartiteDefinNoModContext } from "../../../Global/global";
import { ButtonResetContext } from "../../../Global/global";
import { giornataClou } from '../../../../START/Matches/matches';
import "./CalGiorn.css";

const CalGiorn = ({ onReset }) => {
    const scrollContainer = useRef(null);
    const singleBoxRef = useRef(null); // Aggiunto ref per la larghezza della casella
    const [selected, setSelected] = useState(null);
    const [matches, setMatches] = useState([]);
    const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
    const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);
    const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);


    //Crea un ref per ciascuna casella
    const boxRefs = useRef([]);
    if (boxRefs.current.length !== 38) {
        // Inizializza l'array di refs con 38 elementi (numero delle caselle)
        boxRefs.current = Array(38).fill().map((_, i) => boxRefs.current[i] || React.createRef());
    }

    const handleSelectNumber = (number) => {
        if (number >= 1 && number <= 38) {
            // Seleziona la nuova giornata e controlla se è diversa dalla corrente
            if (number !== selected) {
                setButtonResetIsResetting(true);
            }

            setSelected(number);
            setMatches(calendario[`giornata${number}`]);
            setGiornataClouSelected(calendario[`giornata${number}`]);
            scrollIntoView(number);
        }
    }

    const scroll = (direction) => {
        let newSelected = selected;
        if (direction === 'left' && selected > 1) {
            newSelected = selected - 1;
        } else if (direction === 'right' && selected < 38) {
            newSelected = selected + 1;
        }
        handleSelectNumber(newSelected);
    };

    const scrollIntoView = (number) => {
        const selectedBoxRef = boxRefs.current[number - 1];
        if (scrollContainer.current && selectedBoxRef.current) {
            const scrollPosition = selectedBoxRef.current.offsetLeft; // Usa la posizione left del ref selezionato
            scrollContainer.current.scrollLeft = scrollPosition;
        }
    };

    const getVisibleMatches = () => {
        let start = selected - 3;
        let end = selected + 3;
        if (start < 1) {
            end = end + (1 - start);
            start = 1;
        } else if (end > 38) {
            start = start - (end - 38);
            end = 38;
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };


    // -------------------------------------------------------------------------------------------------------------
    //QUESTO USE EFFECT TROVA LA CASELLA DELLA GIORNATA CLOU INIZIALMENTE
    useEffect(() => {
        setButtonResetIsResetting(false)
        const giornataClouIndex = Object.keys(calendario).findIndex(giornata => calendario[giornata] === giornataClou) + 1;
        if (giornataClouIndex) {
            setSelected(giornataClouIndex);
            scrollIntoView(giornataClouIndex);
            setButtonResetIsResetting(false)
        }
    }, []);

    // QUESTO USE EFFECT REIMPOSTA LO STATO E LE PARTITE ALLO STADIO ORIGINALE
    useEffect(() => {
        setButtonResetIsResetting(false);
        if (onReset) {
            const giornataClouIndex = Object.keys(calendario).findIndex(giornata => calendario[giornata] === giornataClou) + 1;
            if (selected === giornataClouIndex) {
                // Se sei nella giornata clou, mantieni la selezione corrente
                // Esempio: potresti voler aggiornare solo parte dello stato
                setMatches(calendario[`giornata${selected}`]);
                setGiornataClouSelected(calendario[`giornata${selected}`]);
            } else {
                // Se sei in una giornata diversa dalla clou, reimposta tutto
                setSelected(null);
                setMatches([]);
                setGiornataClouSelected(giornataClou);
            }
        }
    }, [onReset]);

    //QUESTO USE EFFECT REIMPOSTA LA GIORNATA CLOU DOPO CHE CI SONO SCORRIMENTI NEL CALENDARIO
    useEffect(() => {
        if (giornataClouSelected) {
            const nuovaGiornataClou = Object.keys(calendario).findIndex(key => calendario[key] === giornataClouSelected) + 1;

            setMatches(giornataClouSelected);
            setSelected(nuovaGiornataClou);
            scrollIntoView(nuovaGiornataClou);

            // if (nuovaGiornataClou !== selected) {
            //     setButtonResetIsResetting(true);
            // }
        }
    }, [giornataClouSelected, calendario]); //resetAll

    // -------------------------------------------------------------------------------------------------------------
    return (
        <div className="flex items-center justify-center bg-gray-800">
            <button
                onClick={() => scroll('left')}
                disabled={selected === 1} // Disabilita se selected è 1
                className={`text-sky-600/60 p-2 hover:bg-gray-700 focus:outline-none ${selected === 1 ? 'opacity-20 cursor-not-allowed' : ''}`}
            >
                &#9664;
            </button>
            <div ref={scrollContainer} className="flex overflow-x-auto scrollbar-hide">
                <div className="flex flex-nowrap">
                    {getVisibleMatches().map((number, index) => (

                        <div
                            key={number}
                            ref={boxRefs.current[number - 1]} // Assegna il ref corrispondente
                            onClick={() => handleSelectNumber(number)}
                            className={`w-12 h-12 flex items-center justify-center m-1 cursor-pointer 
                            ${selected === number ? 'bg-sky-900' : 'bg-black'}`}
                        >
                            <span className={`text-md font-semibold 
                            ${selected === number ? 'text-black font-bold text-3xl' : 'text-cyan-800'}`}>{number}</span>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => scroll('right')}
                disabled={selected === 38} // Disabilita se selected è 38
                className={`text-sky-600/60 p-2 hover:bg-gray-700 focus:outline-none ${selected === 38 ? 'opacity-20 cursor-not-allowed' : ''}`}
            >
                &#9654;
            </button>
        </div>
    );
};

export default CalGiorn;
