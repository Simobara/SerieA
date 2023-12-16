import { useState } from 'react';
import Partita from "./Partita/partita";
import Placeholder from "./Placeholder/placeholder"; //posizione per trascinare


const Day = ({ title, partite = [], day, movePartita, resetAll,
  coppiaSquadre, occhioApertoPartita, setOcchioApertoPartita
}) => {
  // const [occhioApertoPartita, setOcchioApertoPartita] = useState(null);
  const hasPartite = Array.isArray(partite) && partite.length > 0;

  return (
    <>
      <div className=" bg-gray-700/70 text-sky-800 text-lg font-bold text-sm uppercase text-start ml-[3%] mr-[3%] pl-12">
        {title}
        {/* <div className="h-px bg-transparent "></div> */}
      </div>
      {hasPartite &&
        partite.map((partita) =>
          <Partita
            key={partita.numero}
            partita={partita}
            movePartita={movePartita}
            resetAll={resetAll}
            coppiaSquadre={coppiaSquadre}
            occhioApertoPartita={occhioApertoPartita}
            setOcchioApertoPartita={setOcchioApertoPartita}
          />
        )}
      {!hasPartite &&
        <Placeholder day={day} movePartita={movePartita} />}
    </>
  );
};

export default Day;
