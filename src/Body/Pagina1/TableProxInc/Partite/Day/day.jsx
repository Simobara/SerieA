// import { useState } from 'react';
// import Placeholder from "./Placeholder/placeholder"; //posizione per trascinare
import Partita from "./Partita/partita";

const Day = ({ title, partite = [], resetAll, occhioApertoPartita, setOcchioApertoPartita }) => {
  // const [occhioApertoPartita, setOcchioApertoPartita] = useState(null);
  const hasPartite = Array.isArray(partite) && partite.length > 0;

  return (
    <>
      <div className=" bg-sky-900/60 text-sky-800 text-lg font-bold text-sm uppercase text-start ml-[3%] mr-[3%] pl-8 my-[0rem]">
        {title}
        {/* <div className="h-px bg-transparent "></div> */}
      </div>
      {hasPartite &&
        partite.map((partita) =>
          <Partita
            key={partita.numero}
            partita={partita}
            // movePartita={movePartita}
            resetAll={resetAll}
            // coppiaSquadre={coppiaSquadre}
            occhioApertoPartita={occhioApertoPartita}
            setOcchioApertoPartita={setOcchioApertoPartita}
          />
        )}
      {/* {!hasPartite &&
        <Placeholder day={day} movePartita={movePartita} />} */}
    </>
  );
};

export default Day;
