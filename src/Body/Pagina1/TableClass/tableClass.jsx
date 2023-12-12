import { useContext, useState, useEffect } from "react";
import { SquadraContext } from "../../Global/global";
import { squadre } from "../../../START/START";
import "./tableClass.css";

const TableClass = () => {
  const { sqSelected } = useContext(SquadraContext);
  console.log("ARRAY TEAM:", sqSelected);
  const [indiciDiffPts, setIndiciDiffPts] = useState([]);
  const [indiciDiffQ, setIndiciDiffQ] = useState([]);

  const [differenzePunti, setDifferenzePunti] = useState({});

  const getPunteggioVirtuale = (squadra) => {
    // Calcola il punteggio aggiunto in base alla selezione
    let aggiuntaPunti = 0;
    if (sqSelected.includes(squadra.nome + "Z")) {
      aggiuntaPunti = 3;
    } else if (sqSelected.includes(squadra.nome + "X")) {
      aggiuntaPunti = 1;
    }
    return squadra.punteggio + aggiuntaPunti;
  };

  const getPunteggioVisualizzato = (squadra) => {
    // Decide se mostrare il punteggio aggiunto o un punto "."
    if (sqSelected.includes(squadra.nome + "Z") || sqSelected.includes(squadra.nome + "X")) {
      return getPunteggioVirtuale(squadra);
    } else if (sqSelected.includes(squadra.nome + "Y")) {
      return squadra.punteggio;
    }
    return " ";
  };

  const squadreConPunteggioVirtuale = squadre.map((squadra) => ({
    // Aggiunge campo punteggio virtuale a ogni squadra
    ...squadra,
    punteggioVirtuale: getPunteggioVirtuale(squadra),
  }));

  const squadreOrdinate = squadreConPunteggioVirtuale.sort((a, b) => b.punteggioVirtuale - a.punteggioVirtuale); // Ordina le squadre in base al punteggio virtuale

  const getBackgroundClass = (index) => {
    if (index < 4) {
      return "bg-blue-900 text-white font-extrabold";
    } else if (index >= 4 && index < 6) {
      return "bg-gray-700 text-white font-extrabold";
    } else if (index === 6) {
      return "bg-gray-600 text-white font-extrabold";
    } else if (index >= squadre.length - 3) {
      return "bg-gray-400 text-black font-extrabold";
    } else {
      return "";
    }
  };

  const isTeamMarkedWithX = (teamName) => {
    return teamName.endsWith("X") || sqSelected.includes(teamName + "X");
  };

  const isPureNumber = (str) => /^\d+$/.test(str);

  useEffect(() => {
    let nuoviIndici = [];
    for (let i = 1; i < squadreOrdinate.length; i++) {
      const punteggioAttuale = getPunteggioVisualizzato(squadreOrdinate[i]);
      const punteggioPrecedente = getPunteggioVisualizzato(squadreOrdinate[i - 1]);
      if (isPureNumber(punteggioAttuale) && isPureNumber(punteggioPrecedente)) {
        const differenzaPunteggio = Math.abs(punteggioAttuale - punteggioPrecedente);
        if (differenzaPunteggio >= 3) {
          // Aggiunge l'indice solo se entrambi i punteggi sono numeri puri e la differenza è >= 3
          nuoviIndici.push(i);
        }
      }
    }
    setIndiciDiffQ(nuoviIndici);
  }, [sqSelected]);

  useEffect(() => {
    let nuoviIndici = [];
    let nuoveDifferenze = {};

    for (let i = 1; i < squadreOrdinate.length; i++) {
      const differenza = Math.abs(squadreOrdinate[i].punteggio - squadreOrdinate[i - 1].punteggio);

      if (differenza >= 3) {
        nuoviIndici.push(i);
        nuoveDifferenze[i] = differenza;
      }
    }

    setIndiciDiffPts(nuoviIndici);
    setDifferenzePunti(nuoveDifferenze);
  }, []);

  return (
    <table className="relative h-full min-h-[40rem] w-full max-w-[100%] mb-[-4]">
      <thead className="bg-black text-white">
        <tr className="text-white bg-blue-900 ">
          <th className="sm:px-2 text-center max-w-[10px]" style={{ whiteSpace: "nowrap" }}>
            #
          </th>
          <th className="py-1 max-w-[2rem]">SQUADRA</th>
          <th className="py-1  xs:pl-0 sm:pr-16 md:pr-16 lg:pr-20 xl:pl-0 sm:px-2 min-w-[2rem]">?</th>
          <th className="py-1 xl:pr-2  text-center sm:px-2 max-w-[1rem]">PTS</th>
          <th className="py-1 px-2 min-w-ful w-auto"> </th>
          {/* Altre colonne commentate */}
        </tr>
      </thead>
      <tbody className="bg-black text-white">
        {squadreOrdinate.map((squadra, index) => (
          <tr key={index}>
            <td className={`text-center relative ${getBackgroundClass(index)}`}>
              <div className="w-full h-full flex items-center justify-center border-b-2 border-gray-600">{/* {index + 1} */}</div>
            </td>
            <td
              className={`bg-black xs:pl-0 sm:pl-32 lg:pl-36 xl:px-6 flex justify-start relative sq-column text-xl ${
                isTeamMarkedWithX(squadra.nome)
                  ? "underline-yello text-yellow-800"
                  : sqSelected.includes(squadra.nome + "Z")
                  ? "underline-gree text-green-700"
                  : sqSelected.includes(squadra.nome + "Y")
                  ? "text-gray-500"
                  : ""
              }`}
            >
              <div className="flex items-center bg-black">
                <img src={squadra.logo} alt={`${squadra.nome} Logo`} className="w-5 h-7 mr-4" />
                <span>{squadra.nome.replace("X", "").replace("Y", "").replace("Z", "")}</span>
              </div>
            </td>
            <td
              className={`py-2 xs:pl-0 sm:pr-16 md:pr-16 lg:pr-20 xl:pl-0 text-center font-extrabold bg-black text-red-700 text-lg z-4 ${
                indiciDiffQ.includes(index) ? "borderAlto border-yellow-500" : ""
              }`}
            >
              {getPunteggioVisualizzato(squadra)}
            </td>
            <td
              className={`xs:pl-0 sm:pl-16 lg:pl-28 xl:px-3 xl:mr-4 xs:pr-0 sm:pr-16 lg:pr-12 xl:pr-3 py-2 text-left font-bold bg-black text-pink-500 text-lg ${
                indiciDiffPts.includes(index) ? "borderAlto border-pink-500" : ""
              }`}
            >
              <div className="absolute transform -translate-x-1/2 -translate-y-8 text-left text-2xl text-white mx-8 my-[-10]">{differenzePunti[index]}</div>
              {squadra.punteggio}
            </td>
            {/* Altri TD possono essere inseriti qui se necessario */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableClass;
