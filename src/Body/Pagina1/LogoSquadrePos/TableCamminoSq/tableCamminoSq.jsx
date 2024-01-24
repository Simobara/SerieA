import { useEffect, useState, useContext } from "react";
import { ATeams } from "../../../../START/StartSqCammino/1Start";
import { BTeams } from "../../../../START/StartSqCammino/1Start";
import { calendario } from "../../../../START/Matches/matches";
import { GiornataClouContext } from "../../../Global/global/";
// import { giornataClou } from "../../../../START/Matches/matches";
import "./tableCamminoSq.css";

const TableCamminoSq = ({ squadra, datiSquadra }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);
  // console.log("isMobile", isMobile);
  const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
  const [selectedIndexGiornata, setSelectedIndexGiornata] = useState(null);

  const nomeSquadra = typeof squadra === "string" ? squadra : "DefinireSq";

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
      return "font-black text-black";
    } else if (isBTeam(teamName)) {
      return "font-thin text-gray-400/80";
    } else if (teamName !== "--- --- --- --- --- ---") {
      return "text-medium text-cyan-500/80 font-medium";
    } else {
      return "text-black"
    }
  };



  // const getTextColor = (partita) => {
  //   const conditions = ["+", "-", "=", "..."];
  //   if (conditions.includes(partita.casa) || conditions.includes(partita.fuori)) {
  //     return "text-white"; // white text when row is fuchsia
  //   }
  //   return "text-black"; // default text color
  // };

  const getBgHoverClass = (partita) => {
    if (partita.sqVs === "--- --- --- --- --- ---") {
      return "hover:no.hover"; // Nessuna classe hover per questa specifica condizione
    }
    const conditions = ["+", "-", "=", "..."];
    if (conditions.includes(partita.casa)) {
      return "hover:bg-fuchsia-900";
    } else if (conditions.includes(partita.fuori)) {
      return "hover:bg-fuchsia-500";
    }
    return " ";
  };

  const getClassForCasa = (casa) => {
    switch (casa) {
      case "+":
        return "bg-sky-900 text-white";
      case "=":
        return "bg-sky-500 text-white";
      case "-":
        return "bg-gray-300 text-white";
      default:
        return "bg-white";
    }
  };
  const getClassForFuori = (fuori) => {
    if (fuori === "...") {
      return "bg-white";
    }
    if (fuori === " ") {
      return " "
    }
    switch (fuori) {
      case "+":
        return "bg-sky-900 text-white";
      case "=":
        return "bg-sky-500 text-white";
      case "-":
        return "bg-gray-300 text-white";
      default:
        return "bg-transparent";
    }
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (giornataClouSelected) {
      let nuovoIndice = Object.keys(calendario).findIndex(key => calendario[key] === giornataClouSelected) + 1;
      // console.log("NI", nuovoIndice)
      if (nuovoIndice <= 19) {
        setSelectedIndexGiornata(nuovoIndice - 1);
      } else {
        setSelectedIndexGiornata(nuovoIndice);
      }
      // console.log(giornataClouSelected);
    }
  }, [giornataClouSelected]); // la dipendenza è necessaria per ricaricare l'effetto quando giornataClouSelected cambia



  return (
    <div className="">
      <h1 className={`{ text-center md:text-3xl scale-150 ${getTextTeam(nomeSquadra)}`}>{nomeSquadra}</h1>
      <table>
        <thead>
          <tr className="bg-black text-white border border-black overflow-x-hidden text-md">
            <th className="text-center text-white w-[12%] sm:w-[15%] xl:w-[12%] "></th>
            <th className="text-center text-cyan-700 w-[18%] sm:w-[25%] xl:w-[20%]">C</th>
            <th className="text-center text-cyan-700 w-[12%] sm:w-[15%] xl:w-[12%]">F</th>
            <th className="text-center text-white w-full "></th>
            <th className="text-left"></th>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-auto overflow-x-hidden md:overflow-x-hidden h-[37.5rem]">
        <table className=" filter brightness-[75%] overflow-y-auto w-[120%] table-auto bg-white">
          <tbody>
            {/* eslint-disable-next-line */}
            {datiSquadra.map((partita, index) => {
              const casaClass = getClassForCasa(partita.casa);
              const fuoriClass = getClassForFuori(partita.fuori);

              // Dividere il risultato in due parti
              const risultatoPulito = partita.risultato.trim().replace(/\s*-\s*/, "-");
              const risultatoParts = risultatoPulito.split("-");
              const risultatoParte1 = risultatoParts[0]; // Prima parte del risultato
              const risultatoParte2 = risultatoParts[1]; // Seconda parte del risultato

              // Condizione per non visualizzare il risultato se è 9-8, 8-9, o 9-9
              const isPronostico = (risultatoParte1 === '9' && risultatoParte2 === '8') ||
                (risultatoParte1 === '8' && risultatoParte2 === '9') ||
                (risultatoParte1 === '9' && risultatoParte2 === '9');


              let borderStyle = "";
              if (index === selectedIndexGiornata) {
                borderStyle = "border-b-4 border-fuchsia-400"; // Aggiungi la classe per un bordo giallo
              }

              // Converti il nome della squadra: prima lettera maiuscola, resto minuscolo
              const formattedSqVs = partita.sqVs.toLowerCase();
              const sqVsFormatted = formattedSqVs.charAt(0).toUpperCase() + formattedSqVs.slice(1);

              const sqVsClass = isATeam(partita.sqVs) ?
                "font-black bg-sky-600 rounded-lg text-black py-[-4] ml-[-4]" :
                isBTeam(partita.sqVs) ?
                  "font-light text-gray-400/50" :
                  (partita.sqVs === "--- --- --- --- --- ---") ?
                    "font-black text-black" : // Imposta il testo nero per questa condizione specifica
                    "text-cyan-500 font-bold ";
              const bgHoverClass = getBgHoverClass(partita);
              // const textColorClass = getTextColor(partita);
              return (
                <tr key={index} className={`overflow-x-hidden xs:text-lg sm:text-md ${bgHoverClass} last-text ${borderStyle}`}>
                  <td className={`w-[5%] sm:w-[15%] xl:w-[5%] text-center font-bold text-cyan-500 bg-black text-xl`}>
                    {isPronostico ?
                      <div className="flex justify-center items-center">
                        <span className="text-yellow-400 text-xl font-black justify-item-centre ">*</span>
                      </div> :
                      <>
                        <span className={"text-fuchsia-400 text-xl"}>{risultatoParte1}</span>
                        {risultatoParte1 && risultatoParte2 && "-"}
                        <span className={"text-sky-300"}>{risultatoParte2}</span>
                      </>
                    }
                  </td>
                  <td className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xl sm:text-base ${casaClass}`}>{partita.casa}</td>
                  <td className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xl sm:text-base ${fuoriClass}`}>{partita.fuori}</td>
                  <td className={`sm:w-[50%] pl-4 text-xl ${sqVsClass} `}>
                    {isMobile == true ? sqVsFormatted.slice(0, 3) : sqVsFormatted}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCamminoSq;
