import { nomiSquadre } from '../../app/1main';
import { calendario } from '../../app/0matches';

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

export function calcPntSq(puntiSquadra) {
	let puntiTotali = 0;
	puntiSquadra?.forEach((partita) => {
		let risultatoCasa = partita.casa.trim();
		let risultatoFuori = partita.fuori.trim();
		let risultatoPartita = partita.risultato.trim();
		// Controlla se il risultato inizia con '8' o '9' e ignora l'aggiunta di punti se vero
		if (risultatoPartita.startsWith('8') || risultatoPartita.startsWith('9')) {
			return;
		}
		if (risultatoCasa === '+') {
			puntiTotali += 3;
		} else if (risultatoCasa === '=') {
			puntiTotali += 1;
		}
		if (risultatoFuori === '+') {
			puntiTotali += 3;
		} else if (risultatoFuori === '=') {
			puntiTotali += 1;
		}
	});
	return puntiTotali;
}

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

export function creaRisSq(calendario, nomeSquadra) {
	const risultatiSquadra = [];
	let giornataSpecialeInserita = false;

	for (let i = 1; i <= 38; i++) {
		const giornata = calendario[`giornata${i}`];

		if (i === 20 && !giornataSpecialeInserita) {
			risultatiSquadra.push({
				risultato: '',
				casa: '',
				fuori: '',
				sqVs: '/',
			});
			giornataSpecialeInserita = true;
		}

		giornata.forEach((partita) => {
			if (partita.team1 === nomeSquadra || partita.team2 === nomeSquadra) {
				const isCasa = partita.team1 === nomeSquadra;
				let resultsTrimmed = '';
				if (partita.pron === '1') {
					resultsTrimmed = '9-8'; // Se 'pron' è '1', imposta il risultato su '9-8'
				} else if (partita.pron === '2') {
					resultsTrimmed = '8-9'; // Aggiunto: se 'pron' è '2', imposta il risultato su '8-9'
				} else if (partita.pron === 'x') {
					resultsTrimmed = '9-9'; // Aggiunto: se 'pron' è 'X', imposta il risultato su '9-9'
				} else {
					resultsTrimmed = typeof partita.results === 'string' ? partita.results.trim() : '';
				}
				if (resultsTrimmed.split('-').length === 1) {
					// Se resultsTrimmed è solo un numero, trattalo come una stringa vuota
					resultsTrimmed = '';
				}
				if (resultsTrimmed === '') {
					risultatiSquadra.push({
						risultato: '',
						casa: isCasa ? '...' : '',
						fuori: isCasa ? '' : '...',
						sqVs: isCasa ? partita.team2 : partita.team1,
					});
				} else {
					const risultatoSplit = resultsTrimmed.split('-');
					const golSquadra = isCasa ? risultatoSplit[0] : risultatoSplit[1];
					const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

					let segno;
					if (golSquadra > golAvversari) segno = '+';
					else if (golSquadra < golAvversari) segno = '-';
					else segno = '=';

					const risultatoInvertito = isCasa ? resultsTrimmed : risultatoSplit.reverse().join('-');

					risultatiSquadra.push({
						risultato: risultatoInvertito,
						casa: isCasa ? segno : '',
						fuori: isCasa ? '' : segno,
						sqVs: isCasa ? partita.team2 : partita.team1,
					});
				}
			}
		});
	}
	return risultatiSquadra;
}

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Object.keys(nomiSquadre).forEach((key) => {
// 	const squadra = nomiSquadre[key];
// 	const risultatiSquadra = creaRisSq(calendario, squadra.name);
// 	const punteggio = calcPntSq(risultatiSquadra);
// 	squadra.punteggio = punteggio; // Aggiunge il punteggio direttamente all'oggetto della squadra
// });

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

export function filterTeamsByCategory(category) {
	return Object.entries(nomiSquadre)
		.filter(([key, value]) => value && value.isTeam === category)
		.map(([key, value]) => {
			if (value && value.name) {
				return value.name.toUpperCase();
			}
			return '';
		});
}

export let ATeams = [];
export let BTeams = [];

document.addEventListener('DOMContentLoaded', () => {
	ATeams = [...filterTeamsByCategory('A')];
	BTeams = [...filterTeamsByCategory('B')];
});

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

function calcolaAnniConsct(squadre) {
	const annoCorrente = new Date().getFullYear();
	const risultati = {};

	Object.keys(squadre).forEach((key) => {
		const squadra = squadre[key];
		if (squadra.AnniA && squadra.AnniA.Ult) {
			risultati[squadra.name] = annoCorrente - squadra.AnniA.Ult;
		} else {
			risultati[squadra.name] = 'Dato "Ult" non disponibile';
		}
	});

	return risultati;
}

document.addEventListener('DOMContentLoaded', () => {
	const anniConsct = calcolaAnniConsct(nomiSquadre);
	// console.log(anniConsct);
});

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
