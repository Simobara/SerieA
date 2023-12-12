import "./tableCamminoSq.css";
import { useEffect, useState } from "react";
// eslint-disable-next-line
import { ATeams } from "../../../../START/START";
import { BTeams } from "../../../../START/START";
// eslint-disable-next-line
const TableCamminoSq = ({ squadra, datiSquadra }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);

  console.log("isMobile", isMobile);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // eslint-disable-next-line
  const nomeSquadra = typeof squadra === "string" ? squadra.toUpperCase() : "DefinireSq";
  const isATeam = (teamName) => {
    //    const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
    return ATeams.includes(teamName.toUpperCase());
  };
  const isBTeam = (teamName) => {
    // const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];
    return BTeams.includes(teamName.toUpperCase());
  };
  const getBgHoverClass = (partita) => {
    const conditions = ["+", "-", "=", "..."];
    if (conditions.includes(partita.casa)) {
      return "hover:bg-cyan-900";
    } else if (conditions.includes(partita.fuori)) {
      return "hover:bg-fuchsia-900";
    }
    return "";
  };
  const getClassForCasa = (casa) => {
    switch (casa) {
      case "+":
        return "bg-black text-white";
      case "-":
        return "bg-gray-300 border border-2 border-gray-100 text-white";
      case "=":
        return "bg-stone-400 text-white";
      default:
        return "bg-white";
    }
  };
  const getClassForFuori = (fuori) => {
    if (fuori === "...") {
      return "bg-white";
    }
    switch (fuori) {
      case "+":
        return "bg-black text-white";
      case "-":
        return "bg-gray-300 border border-2 border-gray-100 text-white";
      case "=":
        return "bg-stone-400 text-white";
      default:
        return "";
    }
  };

  return (
    <div className="border border-black border-8">
      <h1 className="text-center text-sm sm:text-lg md:text-2xl font-extrabold scale-150">{nomeSquadra}</h1>
      <table>
        <thead>
          <tr className="bg-black text-white border border-2 border-black overflow-x-hidden">
            <th className="text-center text-white w-[12%] sm:w-[15%] text-xs xl:w-[12%] ">RIS</th>
            <th className="text-center text-pink-400 w-[18%] sm:w-[25%] text-xs xl:w-[20%]">C</th>
            <th className="text-center text-pink-400 w-[12%] sm:w-[15%] text-xs xl:w-[12%]">F</th>
            <th className="text-center text-white w-full text-xs">VS</th>
            <th className="text-left"></th>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-auto overflow-x-hidden md:overflow-x-hidden md:overflow-x-hidden h-[100%] max-h-[40vh] md:max-h-[50vh] xl:max-h-[45vh]">
        <table className="overflow-y-auto w-[120%] table-auto bg-white pb-10">
          <tbody>
            {/* eslint-disable-next-line */}
            {datiSquadra.map((partita, index) => {
              const casaClass = getClassForCasa(partita.casa);
              const fuoriClass = getClassForFuori(partita.fuori);
              const sqVsClass = isATeam(partita.sqVs) ? "text-black font-extrabold " : isBTeam(partita.sqVs) ? "text-gray-300 font-extrabold" : "";
              const bgHoverClass = getBgHoverClass(partita);
              return (
                <tr key={index} className={`overflow-x-hidden border border-2 border-white-600 xs:text-xs sm:text-2xl ${bgHoverClass}`}>
                  <td className="w-[7%] sm:w-[15%] xl:w-[10%] text-center bg-white">{partita.risultato}</td>
                  <td className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xs sm:text-base font-normal ${casaClass}`}>{partita.casa}</td>
                  <td className={`w-[7%] sm:w-[15%] xl:w-[10%] text-center xs:text-xs sm:text-base font-normal ${fuoriClass}`}>{partita.fuori}</td>
                  <td className={` sm:w-[50%] xs:text-xs sm:text-base pl-5 sm:pl-5 ${sqVsClass} hover:text-white`}>{isMobile == true ? partita.sqVs.slice(0, 3) : partita.sqVs}</td>
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
