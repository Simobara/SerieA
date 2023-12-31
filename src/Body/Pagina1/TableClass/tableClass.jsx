import { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { squadre } from "../../../START/START";
import { ATeams } from "../../../START/START";
import { BTeams } from "../../../START/START";
import { SquadraContext } from "../../Global/global";
import { CoppiaPartitaContext } from "../../Global/global";
import { CoppiaPartitaRegistrataContext } from "../../Global/global";
// import { CoppiaPartitaRegistrataContext } from "../../Global/global";
import "./tableClass.css";

const TableClass = () => {
  const { sqSelected } = useContext(SquadraContext);
  const [indiciDiffPts, setIndiciDiffPts] = useState([]);
  const [indiciDiffQ, setIndiciDiffQ] = useState([]);
  const [numeriIndiciBorderWhite, setNumeriIndiciBorderWhite] = useState({});
  const [differenzePunti, setDifferenzePunti] = useState({});
  const { coppiaSelected } = useContext(CoppiaPartitaContext);
  const { coppiaRegSelected } = useContext(CoppiaPartitaRegistrataContext);
  const [punteggiAggiornati, setPunteggiAggiornati] = useState([]);



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
      return "font-black text-sky-600/70 border border-4 border-sky-600/90 rounded-md font-bold my-[-2rem]";
    } else if (isBTeam(teamName)) {
      return "font-light text-gray-500";
    } else {
      return "text-medium text-cyan-700";
    }
  };

  const getPunteggioVirtuale = useCallback((squadra) => {
    let aggiuntaPunti = 0;
    if (sqSelected.includes(squadra.nome + "Z")) aggiuntaPunti = 3;
    else if (sqSelected.includes(squadra.nome + "X")) aggiuntaPunti = 1;
    return squadra.punteggio + aggiuntaPunti;
  }, [sqSelected]);

  const getPunteggioVisualizzato = useCallback((squadra) => {
    if (sqSelected.includes(squadra.nome + "Z") || sqSelected.includes(squadra.nome + "X"))
      return getPunteggioVirtuale(squadra);
    else if (sqSelected.includes(squadra.nome + "Y"))
      return squadra.punteggio;
    return " ";
  }, [sqSelected, getPunteggioVirtuale]);

  const squadreConPunteggioVirtuale = useMemo(() => {
    return squadre.map(squadra => ({
      ...squadra,
      punteggioVirtuale: getPunteggioVirtuale(squadra),
    }));
  }, [squadre, getPunteggioVirtuale]);

  const squadreOrdinate = useMemo(() => {
    return [...squadreConPunteggioVirtuale].sort((a, b) => b.punteggioVirtuale - a.punteggioVirtuale);
  }, [squadreConPunteggioVirtuale]);

  const getColoriColonna0 = (index) => {
    if (index < 4) {
      return "bg-gray-700/70 text-white font-extrabold";
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

  const isTeamMarkedWithX = useCallback((teamName) => {
    return teamName.endsWith("X") || sqSelected.includes(teamName + "X");
  }, [sqSelected]);

  const isPureNumber = (str) => /^\d+$/.test(str);

  const isCoppiaSelected = useCallback((nomeSquadra) => {
    return coppiaSelected && (nomeSquadra === coppiaSelected.team1 || nomeSquadra === coppiaSelected.team2);
  }, [coppiaSelected]);



  // ---------------------------------------------------------------(CoppiaPartitaRegistrataContext);

  const aggPunteggioSqReg = () => {
    if (coppiaRegSelected) {
      coppiaRegSelected.forEach(match => {
        const scores = match.risultato.split('-').map(Number);
        const scoreTeam1 = scores[0];
        const scoreTeam2 = scores[1];
        let winningTeam;
        if (scoreTeam1 > scoreTeam2) {
          winningTeam = match.team1;
        } else if (scoreTeam2 > scoreTeam1) {
          winningTeam = match.team2;
        }
        if (winningTeam) {
          aggiungiPunti(winningTeam, 0);
        }
      });
    }
  };

  const aggiungiPunti = (nomeSquadra, punti) => {
    const squadra = squadre.find(s => s.nome === nomeSquadra);
    if (squadra) {
      squadra.punteggio += punti;
    }
  };

  const getPunteggioColonnaDomanda = (squadra) => {
    // Check if the squadra is part of any selected match
    const isPartOfSelectedMatch = coppiaRegSelected.some(match =>
      match.team1 === squadra.nome || match.team2 === squadra.nome
    );
    return isPartOfSelectedMatch ? squadra.punteggio : getPunteggioVisualizzato(squadra);
  };

  const isTeamInCoppiaRegSelected = useCallback((teamName) => {
    return coppiaRegSelected.some(match =>
      match.team1 === teamName || match.team2 === teamName
    );
  }, [coppiaRegSelected]);

  const getPunteggioColonnaPTS = useCallback((squadra) => {
    let punteggioFinale = squadra.punteggio;
    if (isTeamInCoppiaRegSelected(squadra.nome)) {
      coppiaRegSelected.forEach(match => {
        const [scoreTeam1, scoreTeam2] = match.risultato.split('-').map(Number);
        if (scoreTeam1 === scoreTeam2) {
          if (match.team1 === squadra.nome || match.team2 === squadra.nome) {
            punteggioFinale -= 1;
          }
        } else {
          if ((match.team1 === squadra.nome && scoreTeam1 > scoreTeam2) ||
            (match.team2 === squadra.nome && scoreTeam2 > scoreTeam1)) {
            punteggioFinale -= 3;
          }
        }
      });
    }
    return punteggioFinale;
  }, [coppiaRegSelected]); // Aggiungi tutte le dipendenze esterne utilizzate nella funzione

  const isWinningTeamInCoppiaRegSelected = (teamName) => {
    return coppiaRegSelected.some(match => {
      const [scoreTeam1, scoreTeam2] = match.risultato.split('-').map(Number);
      return ((match.team1 === teamName && scoreTeam1 > scoreTeam2) ||
        (match.team2 === teamName && scoreTeam2 > scoreTeam1));
    });
  };

  const isLosingTeamInCoppiaRegSelected = (teamName) => {
    return coppiaRegSelected.some(match => {
      const [scoreTeam1, scoreTeam2] = match.risultato.split('-').map(Number);
      return ((match.team1 === teamName && scoreTeam1 < scoreTeam2) ||
        (match.team2 === teamName && scoreTeam2 < scoreTeam1));
    });
  };

  const isDrawingTeamInCoppiaRegSelected = (teamName) => {
    return coppiaRegSelected.some(match => {
      const [scoreTeam1, scoreTeam2] = match.risultato.split('-').map(Number);
      return (match.team1 === teamName || match.team2 === teamName) && scoreTeam1 === scoreTeam2;
    });
  };

  // ------------------------------------------------------------------------------------
  useEffect(() => {
    let nuoviIndici = [];
    let numeriCorrispondenti = {};
    for (let i = 1; i < squadreOrdinate.length; i++) {
      const punteggioAttuale = getPunteggioColonnaDomanda(squadreOrdinate[i]);
      const punteggioPrecedente = getPunteggioColonnaDomanda(squadreOrdinate[i - 1]);
      if (isPureNumber(punteggioAttuale) && isPureNumber(punteggioPrecedente)) {
        const differenzaPunteggio = Math.abs(punteggioAttuale - punteggioPrecedente);
        if (differenzaPunteggio >= 3) {
          nuoviIndici.push(i);
          numeriCorrispondenti[i] = differenzaPunteggio;
        }
      }
    }
    setIndiciDiffQ(nuoviIndici);
    setNumeriIndiciBorderWhite(numeriCorrispondenti);
  }, [squadreOrdinate, coppiaRegSelected]);

  useEffect(() => {
    let nuoviIndici = [];
    let nuoveDifferenze = {};

    // Assicurati che punteggiAggiornati sia un array ordinato
    const punteggiOrdinati = [...punteggiAggiornati].sort((a, b) => b.punteggioAggiornato - a.punteggioAggiornato);

    for (let i = 1; i < punteggiOrdinati.length; i++) {
      const differenza = Math.abs(punteggiOrdinati[i].punteggioAggiornato - punteggiOrdinati[i - 1].punteggioAggiornato);
      if (differenza >= 3) {
        nuoviIndici.push(i);
        nuoveDifferenze[i] = differenza;
      }
    }
    setIndiciDiffPts(nuoviIndici);
    setDifferenzePunti(nuoveDifferenze);
  }, [punteggiAggiornati]);

  useEffect(() => {
    if (coppiaRegSelected) {
      console.log("COMP TABLECLASS/coppiaRegSelected", coppiaRegSelected)
    }
    aggPunteggioSqReg();
  }, [coppiaRegSelected]);

  useEffect(() => {
    // Calcola i nuovi punteggi basandoti su getPunteggioColonnaPTS
    const nuoviPunteggi = squadreOrdinate.map(squadra => ({
      ...squadra,
      punteggioAggiornato: getPunteggioColonnaPTS(squadra)
    }));
    setPunteggiAggiornati(nuoviPunteggi);
    // Calcola le differenze di punteggio tra le squadre adiacenti basandoti sui nuovi punteggi
    let nuoveDifferenze = {};
    for (let i = 1; i < nuoviPunteggi.length; i++) {
      const differenza = Math.abs(nuoviPunteggi[i].punteggioAggiornato - nuoviPunteggi[i - 1].punteggioAggiornato);
      if (differenza >= 3) {
        nuoveDifferenze[i] = differenza;
      }
    }
    setDifferenzePunti(nuoveDifferenze);
  }, [coppiaRegSelected]); // Aggiungi le dipendenze necessarie qui


  // -------------------------------------------------------------------------------------------------
  return (
    <table className="relative h-[57.5rem] w-full max-w-[100%] mb-[-4]">
      <thead>
        <tr className="bg-black text-gray-600 py-1 text-center">
          <th className=" w-[2%]" style={{ whiteSpace: "nowrap" }}> # </th>
          <th className=" w-[10%]">---  SQUADRA ---</th>
          <th className=" w-[1%] xs:pl-0">?</th>
          <th className=" w-[2%] pr-[2rem]  text-left">PTS</th>
          {/* <th className=" w-[2%]"> </th> */}
          {/* Altre colonne commentate */}
        </tr>
      </thead>
      <tbody className="bg-black text-cyan-800">
        {squadreOrdinate.map((squadra, index) => (
          <tr key={index}>
            <td className={`text-center relative ${getColoriColonna0(index)}`}>
              <div className="w-full h-full flex items-center justify-center ">{/* {index + 1} */}</div>
            </td>
            {/* { COLONNA SQUADRE} */}
            <td className={`w-[100%] bg-black xs:pl-0 sm:pl-32 lg:pl-36 xl:px-6 flex justify-start relative sq-column text-xl 
            ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : ""}
            ${isTeamMarkedWithX(squadra.nome) ? `underline-yellow` : sqSelected.includes(squadra.nome + "Z") ? "underlineC" : sqSelected.includes(squadra.nome + "Y") ? "" : ""}
            
            ${isWinningTeamInCoppiaRegSelected(squadra.nome) ? `filter brightness-[65%] underlineC ${isCoppiaSelected(squadra.nome) ? ` bg-gray-500` : "bg-gray-700/60"}` : ""}
            ${isLosingTeamInCoppiaRegSelected(squadra.nome) ? `filter brightness-[65%]  ${isCoppiaSelected(squadra.nome) ? " bg-gray-500" : "bg-gray-700/60"}` : ""}
            ${isDrawingTeamInCoppiaRegSelected(squadra.nome) ? `filter brightness-[65%] underline-yellow ${isCoppiaSelected(squadra.nome) ? "bg-gray-500" : "bg-gray-700/60"}` : ""}          
                  >
              }`}
            >
              <div className={`flex items-center bg-black
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : ""}
              ${isWinningTeamInCoppiaRegSelected(squadra.nome) ? "bg-gray-700/10" : ""}
              ${isLosingTeamInCoppiaRegSelected(squadra.nome) ? " bg-gray-700/10" : ""}
              ${isDrawingTeamInCoppiaRegSelected(squadra.nome) ? " bg-gray-700/10" : ""}
              `}>
                <img src={squadra.logo} alt={`${squadra.nome} Logo`} className="w-7 h-7 mr-4" />
                <span className={getTextTeam(squadra.nome)}>{squadra.nome.replace("X", "").replace("Y", "").replace("Z", "")}</span>
              </div>
            </td>
            {/* { COLONNA ?} */}
            <td
              className={`sm:pr-1 md:pl-1 lg:pl-2 xl:pl-0 text-right font-extrabold bg-black text-cyan-500/80 text-xl z-4 
              ${indiciDiffQ.includes(index) ? "borderAlto border-white" : ""}`}>
              <div className="absolute transform -translate-x-4/3 -translate-y-7 text-center text-lg text-white mx-8 my-[-10]">
                {numeriIndiciBorderWhite[index]}</div>
              {getPunteggioColonnaDomanda(squadra)}
            </td>
            {/* { COLONNA PTS} */}
            <td
              className={`sm:pl-16 lg:pl-2 xl:mr-4 sm:pr-2 text-left font-bold bg-black text-xl
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : ""}
              ${indiciDiffPts.includes(index) ? "borderAlto border-gray-600/80 " : ""}
              ${getPunteggioColonnaDomanda(squadra) !== " " ? "text-gray-600/70" : "text-cyan-700/80"}

              ${isWinningTeamInCoppiaRegSelected(squadra.nome) ? `filter brightness-[65%] text-gray-500 
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : " bg-gray-700/60"}` : ""}

              ${isLosingTeamInCoppiaRegSelected(squadra.nome) ? `filter brightness-[65%] text-gray-500
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : " bg-gray-700/60"}` : ""}

              ${isDrawingTeamInCoppiaRegSelected(squadra.nome) ? `filter brightness-[65%] text-gray-500 
              ${isCoppiaSelected(squadra.nome) ? "bg-gray-700" : "bg-gray-700/60"}` : ""}
              `}
            >
              <div className="innerBorder"></div>
              <div className={`absolute transform -translate-x-4/3 -translate-y-8 text-center text-md text-gray-600/80 mx-8 my-[-10]`}>
                {differenzePunti[index]}
              </div>
              {getPunteggioColonnaPTS(squadra)}
            </td>
          </tr>
        ))
        }
      </tbody >
    </table >
  );
};
export default TableClass;