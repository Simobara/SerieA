import { useContext, useState, useEffect } from "react";
import { SquadraContext } from "../../Global/global";
import { CoppiaPartitaContext } from "../../Global/global";
import { squadre } from "../../../START/START";
import "./tableClass.css";

const TableClass = () => {
  const { sqSelected } = useContext(SquadraContext);
  console.log("ARRAY TEAM:", sqSelected);
  const [indiciDiffPts, setIndiciDiffPts] = useState([]);
  const [indiciDiffQ, setIndiciDiffQ] = useState([]);
  const [differenzePunti, setDifferenzePunti] = useState({});




  const { coppiaSelected } = useContext(CoppiaPartitaContext);

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
      return "bg-gray-800 text-white font-extrabold";
    } else if (index >= 4 && index < 6) {
      return "bg-sky-800 text-white font-extrabold";
    } else if (index === 6) {
      return "bg-cyan-700 text-white font-extrabold";
    } else if (index >= squadre.length - 3) {
      return "bg-gray-400 text-black font-extrabold";
    } else {
      return "bg-black";
    }
  };

  const isTeamMarkedWithX = (teamName) => { // variazione per vedere una funzione esterna
    return teamName.endsWith("X") || sqSelected.includes(teamName + "X");
  };

  const isPureNumber = (str) => /^\d+$/.test(str);


  const isCoppiaSelected = (nomeSquadra) => {
    return coppiaSelected && (nomeSquadra === coppiaSelected.team1 || nomeSquadra === coppiaSelected.team2);
  };


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



  useEffect(() => {
    if (coppiaSelected) {
      // setSquadraAttiva1(coppiaSelected.team1);
      // setSquadraAttiva2(coppiaSelected.team2);
      console.log("coppiaSelected", coppiaSelected)
      // console.log("SQ1", squadraAttiva1)
      // console.log("SQ2", squadraAttiva2)
    }
  }, [coppiaSelected]);

  return (
    <table className="relative h-[57.5rem] w-full max-w-[100%] mb-[-4]">
      <thead>
        <tr className="bg-black text-gray-500 py-1 text-center">
          <th className=" w-[2%]" style={{ whiteSpace: "nowrap" }}> # </th>
          <th className=" w-[10%]">---  SQUADRA ---</th>
          <th className=" w-[1%] xs:pl-0">?</th>
          <th className=" w-[2%] pr-[2rem]  text-left">PTS</th>
          {/* <th className=" w-[2%]"> </th> */}
          {/* Altre colonne commentate */}
        </tr>
      </thead>
      <tbody className="bg-black text-cyan-600">
        {squadreOrdinate.map((squadra, index) => (
          <tr key={index}>
            <td className={`text-center relative ${getBackgroundClass(index)}`}>
              <div className="w-full h-full flex items-center justify-center ">{/* {index + 1} */}</div>
            </td>
            <td className={`w-[100%] bg-black xs:pl-0 sm:pl-32 lg:pl-36 xl:px-6 flex justify-start relative sq-column text-xl 
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : ""}
              ${isTeamMarkedWithX(squadra.nome)
                ? "underline-yello text-yellow-500/40"
                : sqSelected.includes(squadra.nome + "Z")
                  ? "underline-gree text-green-500/50"
                  : sqSelected.includes(squadra.nome + "Y")
                    ? "text-gray-500/70"
                    : ""
              }`}
            >
              <div className={`flex items-center bg-black ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : ""}`}>
                <img src={squadra.logo} alt={`${squadra.nome} Logo`} className="w-7 h-7 mr-4" />
                <span>{squadra.nome.replace("X", "").replace("Y", "").replace("Z", "")}</span>
              </div>
            </td>
            <td
              className={`sm:pr-1 md:pl-1 lg:pl-2 xl:pl-0 text-right font-extrabold bg-black text-cyan-600 text-xl z-4 
              ${indiciDiffQ.includes(index) ? "borderAlto border-white" : ""}`}
            >
              {getPunteggioVisualizzato(squadra)}
            </td>
            <td
              className={`sm:pl-16 lg:pl-2  xl:mr-4 sm:pr-2 text-left font-bold bg-black text-cyan-600 text-xl
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : ""}
              ${indiciDiffPts.includes(index) ? "borderAlto border-gray-500/80 " : ""}
              ${getPunteggioVisualizzato(squadra) !== " " ? "text-gray-600/80 text-md" : ""}`}
            >
              <div className="innerBorder"></div>
              <div className="absolute transform -translate-x-4/3 -translate-y-8 text-center text-lg text-gray-600 mx-8 my-[-10]">{differenzePunti[index]}</div>
              {squadra.punteggio}
            </td>
            {/* Altri TD possono essere inseriti qui se necessario */}
          </tr>
        ))}
      </tbody>
    </table >
  );
};

export default TableClass;
