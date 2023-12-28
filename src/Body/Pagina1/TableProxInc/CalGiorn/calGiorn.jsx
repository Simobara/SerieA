import React, { useRef, useState, useContext, useEffect } from 'react';
import { calendario } from "../../../../START/Matches/matches";
import { GiornataClouContext } from "../../../Global/global/";
import "./CalGiorn.css";

const CalGiorn = () => {
    const scrollContainer = useRef(null);
    const singleBoxRef = useRef(null); // Aggiunto ref per la larghezza della casella
    const [selected, setSelected] = useState(null);
    const [matches, setMatches] = useState([]);
    const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);

    const handleSelectNumber = (number) => {
        setSelected(number);
        setMatches(calendario[`giornata${number}`]);
        setGiornataClouSelected(calendario[`giornata${number}`]);
    }

    const scroll = (direction) => {
        if (singleBoxRef.current) {
            const boxWidth = singleBoxRef.current.offsetWidth; // Calcola la larghezza di una casella
            const scrollAmount = direction === 'left' ? -boxWidth : boxWidth; // Determina l'ammontare dello spostamento
            scrollContainer.current.scrollLeft += scrollAmount;
            // Aggiorna il numero selezionato a seconda della direzione dello scroll
            if (direction === 'left' && selected != null && selected > 1) {
                handleSelectNumber(selected - 1);
            } else if (direction === 'right' && selected != null && selected < 38) {
                handleSelectNumber(selected + 1);
            }
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

    useEffect(() => {
        if (giornataClouSelected) {
            setMatches(giornataClouSelected);
            const giornataNumber = Object.keys(calendario).findIndex(key => calendario[key] === giornataClouSelected) + 1;
            if (giornataNumber) {
                setSelected(giornataNumber);
            }
        }
    }, [giornataClouSelected, calendario]);

    return (
        <div className="flex items-center justify-center bg-gray-800">
            <button onClick={() => scroll('left')} className="text-white p-2 hover:bg-gray-700 focus:outline-none">
                &#9664;
            </button>
            <div ref={scrollContainer} className="flex overflow-x-auto scrollbar-hide">
                <div className="flex flex-nowrap">
                    {getVisibleMatches().map((number, index) => (
                        <div
                            key={number}
                            ref={index === 0 ? singleBoxRef : null} // Assegna ref alla prima casella
                            onClick={() => handleSelectNumber(number)}
                            className={`w-12 h-12 flex items-center justify-center m-1 cursor-pointer 
                            ${selected === number ? 'bg-sky-900' : 'bg-black'}`}
                        >
                            <span className={`text-md font-semibold 
                            ${selected === number ? 'text-white' : 'text-cyan-800'}`}>{number}</span>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => scroll('right')} className="text-white p-2 hover:bg-gray-700 focus:outline-none">
                &#9654;
            </button>
        </div>
    );
};

export default CalGiorn;
