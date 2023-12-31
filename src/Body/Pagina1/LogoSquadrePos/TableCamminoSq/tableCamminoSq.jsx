import { useEffect, useState } from "react";
import { ATeams } from "../../../../START/START";
import { BTeams } from "../../../../START/START";
import "./tableCamminoSq.css";

const TableCamminoSq = ({ squadra, datiSquadra }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);

  // console.log("isMobile", isMobile);


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
      return "font-black";
    } else if (isBTeam(teamName)) {
      return "font-extralight text-gray-500/90";
    } else {
      return "text-medium";
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
    const conditions = ["+", "-", "=", "..."];
    if (conditions.includes(partita.casa)) {
      return "hover:bg-fuchsia-800/90";
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
        <table className=" filter brightness-75 overflow-y-auto w-[120%] table-auto bg-white">
          <tbody>
            {/* eslint-disable-next-line */}
            {datiSquadra.map((partita, index) => {
              const casaClass = getClassForCasa(partita.casa);
              const fuoriClass = getClassForFuori(partita.fuori);

              // Converti il nome della squadra: prima lettera maiuscola, resto minuscolo
              const formattedSqVs = partita.sqVs.toLowerCase();
              const sqVsFormatted = formattedSqVs.charAt(0).toUpperCase() + formattedSqVs.slice(1);

              const sqVsClass = isATeam(partita.sqVs) ? "text-black font-black" : isBTeam(partita.sqVs) ? "text-gray-500/40 font-extralight" : "font-medium";
              const bgHoverClass = getBgHoverClass(partita);
              // const textColorClass = getTextColor(partita);
              return (
                <tr key={index} className={`overflow-x-hidden xs:text-lg sm:text-md ${bgHoverClass} last-text-white `}>
                  <td className="w-[5%] sm:w-[15%] xl:w-[5%] text-center font-bold text-cyan-500 bg-black">{partita.risultato}</td>
                  <td className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xs sm:text-base ${casaClass}`}>{partita.casa}</td>
                  <td className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xs sm:text-base ${fuoriClass}`}>{partita.fuori}</td>
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
