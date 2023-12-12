import Partita from "./Partita/partita";
import Placeholder from "./Placeholder/placeholder"; //posizione per trascinare

// eslint-disable-next-line
const Day = ({ title, partite = [], day, movePartita, resetAll }) => {
  const hasPartite = Array.isArray(partite) && partite.length > 0;

  return (
    <>
      <div className=" bg-blue-900 font-extrabold uppercase text-center ml-[4%] mr-[3%]">
        {title}
        {/* <div className="h-px bg-transparent "></div> */}
      </div>
      {hasPartite && partite.map((partita) => <Partita key={partita.numero} partita={partita} movePartita={movePartita} resetAll={resetAll} />)}
      {!hasPartite && <Placeholder day={day} movePartita={movePartita} />}
    </>
  );
};

export default Day;
