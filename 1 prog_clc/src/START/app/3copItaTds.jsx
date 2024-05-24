
export const testeDiSerie = [
	{ id: 1, pos: 'AOttavi1', 	name: 'Inter'	 		},
	{ id: 2, pos: 'AOttavi2', 	name: 'Juve' 			},
	{ id: 3, pos: 'AOttavi3', 	name: 'Milan' 		},
	{ id: 4, pos: 'AOttavi4', 	name: 'Atalanta'	},
	
	{ id: 5, pos: 'BOttavi1', 	name: 'Roma' 			},
	{ id: 6, pos: 'BOttavi2', 	name: 'Lazio' 		},
	{ id: 7, pos: 'BOttavi3', 	name: 'Fiorentina'},
	{ id: 8, pos: 'BOttavi4', 	name: 'Napoli' 		},
];
//*------------------------------------------------------------------------------ 32
export const SqATrentaduesimi = [
	{ id: 1, pos: '5%', 				team1: 'Bologna', 		team2: 'Cesena', 		ris: '2-0' },
	{ id: 2, pos: '15%', 				team1: 'Verona', 			team2: 'Ascoli', 		ris: '3-1' },
	{ id: 3, pos: '30%', 				team1: 'Lecce', 			team2: 'Como', 			ris: '2-2' },
	{ id: 4, pos: '40%', 				team1: 'Bari', 				team2: 'Parma', 		ris: '0-1' },
	{ id: 5, pos: 'bottom-36%', team1: 'Sassuolo',		team2: 'Cosenza', 	ris: '4-2' },
	{ id: 6, pos: 'bottom-26%', team1: 'Spezia', 			team2: 'Venezia', 	ris: '1-2' },
	{ id: 7, pos: 'bottom-11%', team1: 'Cagliari',		team2: 'Palermo', 	ris: '3-1' },
	{ id: 8, pos: 'bottom-1%', 	team1: 'Udinese', 		team2: 'Catanzaro', ris: '2-0' },
];
export const SqBTrentaduesimi = [
	{ id: 1, pos: '5%', 				team1: 'Monza', 			team2: 'Reggiana', 	ris: '2-0' },
	{ id: 2, pos: '15%',				team1: 'Genoa', 			team2: 'Modena', 		ris: '3-1' },
	{ id: 3, pos: '30%', 				team1: 'Empoli', 			team2: 'Cittadella',ris: '2-2' },
	{ id: 4, pos: '40%', 				team1: 'Cremonese',		team2: 'Reggiana', 	ris: '0-1' },
	{ id: 5, pos: 'bottom-36%', team1: 'Salernitana',	team2: 'Ternana',		ris: '4-2' },
	{ id: 6, pos: 'bottom-26%', team1: 'Sampdoria',		team2: 'Sudtirol', 	ris: '1-2' },
	{ id: 7, pos: 'bottom-11%', team1: 'Frosinone',		team2: 'Pisa', 			ris: '3-1' },
	{ id: 8, pos: 'bottom-1%', 	team1: 'Torino', 			team2: 'Feralp', 		ris: '2-0' },
];
//*------------------------------------------------------------------------------	16
export const SqASedicesimi = [
	{ id: 1, pos: '10%', 				team1: 'Bologna', 		team2: 'Verona', 		ris: '1-0' },
	{ id: 2, pos: '35%', 				team1: 'Como', 				team2: 'Parma', 		ris: '2-1' },
	{ id: 3, pos: '31%', 				team1: 'Sassuolo',		team2: 'Venezia',		ris: '1-2' },
	{ id: 4, pos: '6%', 				team1: 'Cagliari',		team2: 'Udinese',		ris: '0-1' },	
];
export const SqBSedicesimi = [
	{ id: 1, pos: '10%', 				team1: 'Monza',				team2: 'Genoa', 		ris: '4-2' },
	{ id: 2, pos: '35%', 				team1: 'Empoli',			team2: 'Reggiana',	ris: '0-1' },
	{ id: 3, pos: '31%', 				team1: 'Salernitana',	team2: 'Sudtirol',	ris: '2-0'},
	{ id: 4, pos: '6%', 				team1: 'Frosinone',		team2: 'Torino', 		ris: '1-2' }
];
//*------------------------------------------------------------------------------ 8
export const SqAOttavi = [
    { id: 1, pos: '8%', 			team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi1')?.name, team2: 'Bologna', 		ris: '1-2' },
    { id: 2, pos: '32%', 			team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi2')?.name, team2: 'Parma', 			ris: '1-0' },
    { id: 3, pos: '33%', 			team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi3')?.name, team2: 'Sassuolo', 	ris: '1-0' },
    { id: 4, pos: '9%',  			team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi4')?.name, team2: 'Udinese', 		ris: '3-0' },
];
export const SqBOttavi = [
    { id: 1, pos: '8%', 			team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi1')?.name, team2: 'Monza', 			ris: '1-0' },
    { id: 2, pos: '32%', 			team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi2')?.name, team2: 'Reggiana', 	ris: '2-0' },
    { id: 3, pos: '33%', 			team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi3')?.name, team2: 'Salernitana',ris: '3-0' },
    { id: 4, pos: '9%',  			team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi4')?.name, team2: 'Torino', 		ris: '3-1' },
];
//*------------------------------------------------------------------------------ 4
export const SqAQuarti = [
    { id: 1, pos: '20%', 			team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi1')?.name,	team2: '' || testeDiSerie.find(team => team.pos === 'AOttavi2')?.name, ris: '1-1' },
    { id: 2, pos: '70%', 			team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi3')?.name,	team2: '' || testeDiSerie.find(team => team.pos === 'AOttavi4')?.name, ris: '2-2' },  
];
export const SqBQuarti = [
    { id: 1, pos: '20%', 			team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi1')?.name, 	team2: '' || testeDiSerie.find(team => team.pos === 'BOttavi2')?.name, ris: '3-2' },
    { id: 2, pos: '70%', 			team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi3')?.name, 	team2: '' || testeDiSerie.find(team => team.pos === 'BOttavi4')?.name, ris: '1-1' },
];
//*------------------------------------------------------------------------------ 2
export const SqASemifinali = [
	{		id: 1, pos: '',	 				team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi1')?.name,
															team2: '' || testeDiSerie.find(team => team.pos === 'AOttavi3')?.name, ris: '0-2' }
];
export const SqBSemifinali = [
	{		id: 1, pos: '',	 				team1: '' || testeDiSerie.find(team => team.pos === 'BOttavi1')?.name,
															team2: '' || testeDiSerie.find(team => team.pos === 'BOttavi3')?.name, ris: '1-2' }
];
//*------------------------------------------------------------------------------ 1
export const Finale = [
	{		id: 1, pos: '',	 				team1: '' || testeDiSerie.find(team => team.pos === 'AOttavi3')?.name,
															team2: '' || testeDiSerie.find(team => team.pos === 'BOttavi1')?.name, ris: '1-2' }
];
//*------------------------------------------------------------------------------ 