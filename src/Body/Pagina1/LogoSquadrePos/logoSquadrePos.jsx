import { useState, useRef, useContext, useEffect } from "react";
import { squadre } from "../../../START/START";
import TableCamminoSq from "./TableCamminoSq/tableCamminoSq";
import { CoppiaPartitaContext } from "../../Global/global";
import { SqEndGruppo1, SqEndGruppo2 } from "../../../START/START";

import { inter } from "../../../START/StartSqCammino/inter";
import { juve } from "../../../START/StartSqCammino/juve";
import { milan } from "../../../START/StartSqCammino/milan";
import { atalanta } from "../../../START/StartSqCammino/atalanta";
import { napoli } from "../../../START/StartSqCammino/napoli";
import { roma } from "../../../START/StartSqCammino/roma";

import { lazio } from "../../../START/StartSqCammino/lazio";
import { bologna } from "../../../START/StartSqCammino/bologna";
import { fiorentina } from "../../../START/StartSqCammino/fiorentina";
import { torino } from "../../../START/StartSqCammino/torino";
import { sassuolo } from "../../../START/StartSqCammino/sassuolo";
import { udinese } from "../../../START/StartSqCammino/udinese";
import { genoa } from "../../../START/StartSqCammino/genoa";

import { frosinone } from "../../../START/StartSqCammino/frosinone";
import { monza } from "../../../START/StartSqCammino/monza";
import { lecce } from "../../../START/StartSqCammino/lecce";
import { cagliari } from "../../../START/StartSqCammino/cagliari";
import { empoli } from "../../../START/StartSqCammino/empoli";
import { verona } from "../../../START/StartSqCammino/verona";
import { salernitana } from "../../../START/StartSqCammino/salernitana";

const LogoSquadrePos = () => {
  const [squadraAttiva1, setSquadraAttiva1] = useState("");
  // eslint-disable-next-line
  const [squadraAttiva2, setSquadraAttiva2] = useState("");
  // eslint-disable-next-line
  const { coppiaSelected } = useContext(CoppiaPartitaContext);

  const logoRefs = useRef({});
  const refContainer = useRef(null);
  const datiSquadre = {
    Inter: inter,
    Juve: juve,
    Milan: milan,
    Atalanta: atalanta,
    Napoli: napoli,
    Roma: roma,
    //*--- ---- ---
    Lazio: lazio,
    Bologna: bologna,
    Fiorentina: fiorentina,
    Torino: torino,
    Sassuolo: sassuolo,
    Udinese: udinese,
    Genoa: genoa,
    //*--- ---- ---
    Monza: monza,
    Frosinone: frosinone,
    Lecce: lecce,
    Cagliari: cagliari,
    Empoli: empoli,
    Verona: verona,
    Salernitana: salernitana,
  };

  // const handleClick = (nomeSquadra) => {
  //     console.log('')
  //     setSquadraAttiva1(nomeSquadra);
  // };

  const renderLinea = (start, end) => (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px", marginTop: "9px" }}>
      {squadre.slice(start, end).map((squadra, index) => {
        const isActive1 = squadra.nome === squadraAttiva1;
        const isActive2 = squadra.nome === squadraAttiva2;
        let className = "px-1 sm:px-2 py-1 cursor-pointer grayscale";
        let inlineStyle = {};

        // if (isActive1) {
        //   className = "px-2 cursor-pointer rounded-3xl grayscale-0 bg-sky-700/90 pt-1 sm:pt-2 z-3";
        //   inlineStyle = { filter: "brightness(125%)" }; // Aumenta la luminosità del 25%
        //}
        if (isActive1) {
          className = "px-2 cursor-pointer rounded-3xl grayscale-0 bg-sky-900 pt-1 sm:pt-2 z-3";
          inlineStyle = { filter: "brightness(125%)" }; // Aumenta la luminosità del 25%
        } else if (isActive2) {
          className = "px-2 cursor-pointer rounded-3xl grayscale-0 bg-sky-500 pt-1 sm:pt-2 z-1";
          inlineStyle = { filter: "brightness(125%)" }; // Aumenta la luminosità del 25%
        }

        return (
          <div key={index} ref={(el) => (logoRefs.current[index] = el)} className={className} style={inlineStyle}>
            <img src={squadra.logo} alt={`${squadra.nome} Logo`} className="w-7 h-7 sm:w-14 sm:h-14" />
          </div>
        );
      })}
    </div>
  );


  // useEffect(() => {
  //   console.log("SQATTIVA 1", squadraAttiva1);
  //   console.log("SQATTIVA 2", squadraAttiva2);
  // }, [squadraAttiva1, squadraAttiva2]);

  useEffect(() => {
    if (coppiaSelected) {
      setSquadraAttiva1(coppiaSelected.team1);
      setSquadraAttiva2(coppiaSelected.team2);
    }
  }, [coppiaSelected]);

  return (
    <>
      <div className=" bg-black text-white">
        <div className="mt-[0rem] mb-[2rem] overflow-hidden z-2 sticky">
          <div className="w-[40rem] mx-auto items-center h-1 bg-gray-600/80 text-gray-900 ">
            <div className="pl-1 border border-2 border-sky-800/70 w-5 bg-gray-700 text-sky-700/70 sm:text-md font-extrabold uppercase">1</div>
          </div>
          {/* Aggiunta di max-h-[3rem] e overflow-y-auto */}
          <div className="filter brightness-[75%] max-h-[3.3rem] sm:max-h-[5rem] xl:max-h-[5rem] overflow-y-hidden">{renderLinea(0, SqEndGruppo1)}
          </div>
        </div>
        <div className="mt-[-2rem] mb-[1.8rem] overflow-hidden z-3 sticky ">
          <div className="w-[40rem] mx-auto items-center h-1 bg-gray-600/80 text-gray-900">
            <div className="pl-1 border border-2 border-sky-800/80 w-5 bg-gray-700 text-sky-700/70 sm:text-md font-extrabold uppercase">2</div>
          </div>
          {/* Aggiunta di max-h-[3rem] e overflow-y-auto */}
          <div className="filter brightness-[75%] max-h-[3.3rem] sm:max-h-[5rem] xl:max-h-[5rem] overflow-y-hidden">{renderLinea(SqEndGruppo1, SqEndGruppo2)}</div>
        </div>
        <div className="mt-[-2rem] mb-[0rem] overflow-visible z-4 sticky">
          <div className="w-[40rem] mx-auto items-center h-1 bg-gray-600/80 text-gray-900">
            <div className="pl-1 border border-2 border-sky-800/80 w-5 bg-gray-700 text-sky-700/70 sm:text-md font-extrabold uppercase">3</div>
          </div>
          {/* Aggiunta di max-h-[3rem] e overflow-y-auto */}
          <div className="filter brightness-[75%] max-h-[3.3rem] sm:max-h-[5rem] xl:max-h-[5rem] overflow-y-hidden">{renderLinea(SqEndGruppo2, squadre.length)}</div>
        </div>
      </div>
      <div ref={refContainer} className=" flex sticky mt-[5px] ">
        {squadraAttiva1 && (
          <div className="bg-sky-900 text-black  w-[50%] max-w-[50%] overflow-x-hidden overflow-y-auto z-1">
            <TableCamminoSq squadra={squadraAttiva1} datiSquadra={datiSquadre[squadraAttiva1]} />
          </div>
        )}
        {squadraAttiva2 && (
          <div className="bg-sky-500/80 text-black  w-[50%] max-w-[50%] overflow-x-hidden overflow-y-auto z-1">
            <TableCamminoSq squadra={squadraAttiva2} datiSquadra={datiSquadre[squadraAttiva2]} />
          </div>
        )}
      </div>
    </>
  );
};

export default LogoSquadrePos;
