import { useState, useContext, useEffect } from 'react';
import { CoppiaPartitaContext } from '../../Glob/global';
import { ButtonResetContext } from '../../Glob/global';
import { ATeams, BTeams } from '../../../START/otheers/functions/functions';
import { nomiSquadre } from '../../../START/app/1main';
import serieAItalia from '../../../assts/ChartSerieAItalia/serieAItalia.png';
import Partite from './Partite/partite';
import CalGiorn from './CalGiorn/calGiorn';
import './tableProxInc.css';
// import { squadreConfig } from '../../../START/components/2NomiSquadre/nomiSquadre';
// import { calendario } from "../../../START/Matches/matches"
// import { giornataClou } from "../../../START/Matches/matches";
// import { GiornataClouContext } from "../../Global/global";
// import { PartiteDefinNoModContext } from "../../Global/global";
// import ModalInserimento from "./ModalInserimento/modalInser";
// import Calendario from "./Calendario/calendario";

const TableProxInc = () => {
	const [resetAll, setResetAll] = useState([]);
	const { coppiaSelected } = useContext(CoppiaPartitaContext);
	const { buttonResetIsResetting, setButtonResetIsResetting } = useContext(ButtonResetContext);
	const [squadreAttive, setSquadreAttive] = useState({ team1: '', team2: '' });
	// const [isModalInserOpen, setIsModalInserOpen] = useState(false);
	// const { giornataClouSelected, setGiornataClouSelected } = useContext(GiornataClouContext);
	// const { partiteDefinNoMod, setPartiteDefinNoMod } = useContext(PartiteDefinNoModContext);

	const isATeam = (teamName) => {
		if (typeof teamName === 'string') {
			return ATeams.includes(teamName.toUpperCase());
		}
		return false;
	};

	const isBTeam = (teamName) => {
		if (typeof teamName === 'string') {
			return BTeams.includes(teamName.toUpperCase());
		}
		return false;
	};

	const getTextTeam = (teamName) => {
		// console.log('teamName:', teamName); // Aggiungi per vedere cosa ricevi effettivamente come input
		if (isATeam(teamName)) {
			return 'text-black font-extrabold text-lg';
		} else if (isBTeam(teamName)) {
			return ' text-gray-500  font-light text-lg';
		} else {
			return 'text-sky-600 font-bold';
		}
	};

	const renderSquadre = () => {
		const squadreArray = Object.values(nomiSquadre);

		return squadreArray.map((squadra) => {
			const isCoppiaSelectedTeam = coppiaSelected && (coppiaSelected.team1 === squadra.name || coppiaSelected.team2 === squadra.name); // Verifica se la squadra corrente è team1 o team2
			const team1Info = coppiaSelected && squadreArray.find((s) => s.name === coppiaSelected.team1); // Trova le informazioni di team1 e team2 da nomiSquadre
			const team2Info = coppiaSelected && squadreArray.find((s) => s.name === coppiaSelected.team2);
			const isSamePosition = team1Info && team2Info && team1Info.style.top === team2Info.style.top && team1Info.style.left === team2Info.style.left; // Verifica se team1 e team2 hanno gli stessi valori di top e left

			if (isCoppiaSelectedTeam) {
				if (isSamePosition) {
					const sharedStyle = {
						width: '35px',
						height: '35px',
						backgroundColor: '#584194',
						borderRadius: '50%',
						position: 'absolute',
						top: squadra.style.top,
						left: squadra.style.left,
						zIndex: 4,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					};

					const innerCircleStyle = {
						width: '25px',
						height: '25px',
						backgroundColor: '#9191cc',
						opacity: 0.9,
						borderRadius: '50%',
					};

					return (
						<div key={squadra.name} id={squadra.name} style={sharedStyle}>
							<div style={innerCircleStyle}></div>
						</div>
					);
				} else {
					const customStyle = {
						...squadra.style,
						width: '27px',
						height: '27px',
						zIndex: 2,
					};
					const teamColorClass = coppiaSelected.team1 === squadra.name ? 'bg-sky-800 z-20' : 'bg-sky-500 z-5';
					// const textStyleClass = 'text-black font-medium text-xl';
					const teamName = coppiaSelected.team1 === squadra.name ? coppiaSelected.team1 : coppiaSelected.team2;
					const teamClass = getTextTeam(teamName);

					return (
						<div key={squadra.name} id={squadra.name} className={`absolute ${teamColorClass} scale-150 rounded-full flex items-center justify-center`} style={customStyle}>
							<span className={`${teamClass} overflow-hidden`}>{teamName.slice(0, 3)}</span>
						</div>
					);
				}
			} else {
				const defaultStyle = {
					width: '11px',
					height: '11px',
					backgroundColor: 'black',
					borderRadius: '50%',
					position: 'absolute',
					top: squadra.style.top,
					left: squadra.style.left,
				};
				return <div key={`${squadra.name}-${squadra.style.top}-${squadra.style.left}`} style={defaultStyle}></div>;
			}
		});
	};

	// const renderTeamSection = (teamName) => {
	// 	const teamClass = getTextTeam(teamName);
	// 	const bgClass = teamName === 'teamA' ? 'bg-red-400' : ''; // Aggiunge bg-red-400 se il nome del team è "teamA"

	// 	return (
	// 		<div className={`flex-1 flex items-center justify-center ${bgClass}`}>
	// 			<span className={teamClass}>{teamName}</span>
	// 		</div>
	// 	);
	// };

	const handleReset = () => {
		// setButtonResetIsResetting(prevState => !prevState);
		setResetAll([]); // Aumenta il contatore per indicare un reset
		setTimeout(() => {
			setButtonResetIsResetting(false);
		}, 300); // 2000 millisecondi equivalgono a 2 secondi
	};

	useEffect(() => {
		if (!buttonResetIsResetting) {
			setButtonResetIsResetting(false);
		}
	}, []);
	// return;
	// setGiornataClouSelected(giornataClou)
	// };

	// useEffect(() => {
	//   if (!buttonResetIsResetting) {
	//     setButtonResetIsResetting(false)
	//   }
	// }, [buttonResetIsResetting])

	//   const updatedPartiteDefinNoMod = new Set();
	//   giornataClouSelected.forEach(partita => {
	//     // Se la partita ha un risultato, aggiungila a updatedPartiteDefinNoMod
	//     if (partita.results) {
	//       updatedPartiteDefinNoMod.add(partita.numero);
	//     }
	//   });
	//   setPartiteDefinNoMod(updatedPartiteDefinNoMod);

	// }, [resetAll, giornataClouSelected, setPartiteDefinNoMod]);

	// useEffect(() => {
	//   // console.log("squadreConfig:", squadreConfig);
	//   if (coppiaSelected) {
	//     setSquadreAttive({ team1: coppiaSelected.team1, team2: coppiaSelected.team2 });
	//     // console.log("T1:", coppiaSelected.team1);
	//     // console.log("T2:", coppiaSelected.team2);
	//   }
	// }, [coppiaSelected]);

	return (
		<>
			<div className="relative ">
				<div className="flex justify-center h-[25.45rem]">
					<div className="relative overflow-hidden w-[120rem] ml-[-3rem]">
						<img src={serieAItalia} alt="serieAItalia" className="relative h-[47rem] w-[100%] mt-[-4.4rem] filter brightness-35" />
						{coppiaSelected && renderSquadre()}
						{
							buttonResetIsResetting && (
								<button
									className="absolute top-[25%] left-[54%] p-1 font-bold bg-transparent rounded-full hover:bg-red-400 z-10"
									onClick={() => handleReset()}
									// style={{
									// 	width: '12px',
									// 	height: '12px',
									// 	backgroundColor: 'purple',
									// }}
								>
									👁️
									{/* Nessun contenuto all'interno del bottone, solo lo stile del cerchio */}
								</button>
							)
							// <button className="absolute top-[26.5%] left-[44.5%] p-2 font-bold bg-transparent rounded-lg hover:bg-red-400"
							//   // style={{ transform: "rotate(180deg)" }}
							//   onClick={() => handleReset()}
							// >
							//   📍
							// </button>
						}
						{/* <div type="checkbox" className="absolute top-[22%] left-[48.5%]">
							1 -📈{' '}
						</div> */}
						<div className="absolute top-0 left-[57.5%] w-[320px] h-[223px] bg-black flex flex-col items-start justify-start text-white text-lg border border-gray-700 border-3 px-5 overflow-hidden" style={{ borderRadius: '15%' }}>
							<div className="flex-1 flex items-start">
								<span className={`${getTextTeam(coppiaSelected.team1)} ${isATeam(coppiaSelected.team1) ? 'bg-sky-700/80' : isBTeam(coppiaSelected.team1) ? 'bg-gray-600/80' : 'bg-sky-500/60'}`}>{coppiaSelected.team1}</span>
							</div>
							{/* <div className="border-b-4 border-gray-700 w-[70px]"></div> */}
							<div className="flex-1 flex items-start mt-1 ">
								<span className={`${getTextTeam(coppiaSelected.team2)} ${isATeam(coppiaSelected.team2) ? 'bg-sky-700/80' : isBTeam(coppiaSelected.team2) ? 'bg-gray-600/80' : 'bg-sky-500'}`}>{coppiaSelected.team2}</span>
							</div>
						</div>
						<div className="absolute top-[26%] left-[49.5%]">1 -📊 </div>
						<div className="absolute top-[30.2%] left-[51%]">3 -📋 </div>
					</div>
				</div>
				{/* <button className="mt-2 mr-4 p-4 font-bold bg-gray-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
              // style={{ transform: 'rotate(180deg)' }}
              onClick={() => setIsModalInserOpen(true)}
            > 📝 </button> */}
				<div className="sticky flex flex-col overflow-y-hidden h-[33.2rem] bg-black mt-[-1.2rem] z-[4]">
					<CalGiorn onReset={resetAll} />
					<Partite resetAll={resetAll} />
				</div>
				{/* </div> */}
			</div>
			{/* <ModalInserimento isOpen={isModalInserOpen} isClose={() => setIsModalInserOpen(false)} /> */}
		</>
	);
};

export default TableProxInc;
