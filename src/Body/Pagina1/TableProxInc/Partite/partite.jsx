import { useState, useMemo, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { initialPartite } from "../../../../START/START";
import Day from "./Day/day";
// eslint-disable-next-line
const Partite = ({ resetAll }) => {
  const [partite, setPartite] = useState([...initialPartite]);

  const reassignNumbers = (updatedPartite) => {
    return updatedPartite.map((partita, index) => ({ ...partita, numero: index + 1 }));
  };

  const movePartita = (fromDay, toDay, fromNumero, toNumero) => {
    let updatedPartite = [...partite];
    const fromIndex = updatedPartite.findIndex((p) => p.numero === fromNumero && p.day === fromDay);
    const toIndex = toNumero ? updatedPartite.findIndex((p) => p.numero === toNumero && p.day === toDay) : -1;
    if (fromDay === toDay && toIndex !== -1) {
      [updatedPartite[fromIndex], updatedPartite[toIndex]] = [updatedPartite[toIndex], updatedPartite[fromIndex]];
    } else {
      updatedPartite[fromIndex].day = toDay;
    }
    setPartite(reassignNumbers(updatedPartite));
  };
  // Memorizza il risultato del filtraggio per ridurre i calcoli
  const partitePerGiorno = useMemo(
    () => ({
      ven: partite.filter((p) => p.day === "ven"),
      sab: partite.filter((p) => p.day === "sab"),
      dom: partite.filter((p) => p.day === "dom"),
      lun: partite.filter((p) => p.day === "lun"),
    }),
    [partite]
  );

  useEffect(() => {
    // eslint-disable-next-line
    if (resetAll.length === 0) {
      // Azione da eseguire per resettare
      // Ad esempio, potresti voler resettare lo stato `partite` al suo stato iniziale
      setPartite([...initialPartite]);
    }
  }, [resetAll]); // Dipendenza da `resetAll`

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" relative flex flex-col items-left overflow-x-hidden overflow-y-auto  xs:text-xs sm:text-xl  mb-[-4rem]">
        <Day title="Ven 24/11" partite={partitePerGiorno.ven} day="ven" movePartita={movePartita} resetAll={resetAll} />
        <Day title="Sab 25/11" partite={partitePerGiorno.sab} day="sab" movePartita={movePartita} resetAll={resetAll} />
        <Day title="Dom 26/11" partite={partitePerGiorno.dom} day="dom" movePartita={movePartita} resetAll={resetAll} />
        <Day title="Lun 27/11" partite={partitePerGiorno.lun} day="lun" movePartita={movePartita} resetAll={resetAll} />
        {/* <div style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button className="p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        style={{ transform: 'rotate(180deg)' }}
                        onClick={() => setResetAll([])}>
                        🧲
                    </button>
                </div> */}
      </div>
    </DndProvider>
  );
};

export default Partite;
