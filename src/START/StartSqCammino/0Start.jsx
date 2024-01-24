import { calendario } from "../Matches/matches";

export const creaRisultatiSquadra = (calendario, nomeSquadra) => {
    const risultatiSquadra = [];
    let giornataSpecialeInserita = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        if (i === 20 && !giornataSpecialeInserita) {
            risultatiSquadra.push({
                risultato: '',
                casa: '---',
                fuori: '---',
                sqVs: '--- --- --- --- --- ---'
            });
            giornataSpecialeInserita = true;
        }

        giornata.forEach(partita => {
            if (partita.team1 === nomeSquadra || partita.team2 === nomeSquadra) {
                const isCasa = partita.team1 === nomeSquadra;
                let resultsTrimmed = '';


                if (partita.pron === '1') {// Se 'pron' è '1', imposta il risultato su '9-8'
                    resultsTrimmed = '9-8';
                } else if (partita.pron === '2') { // Aggiunto: se 'pron' è '2', imposta il risultato su '8-9'
                    resultsTrimmed = '8-9';
                } else if (partita.pron === 'x') { // Aggiunto: se 'pron' è 'X', imposta il risultato su '9-9'
                    resultsTrimmed = '9-9';
                } else {
                    resultsTrimmed = typeof partita.results === 'string' ? partita.results.trim() : '';
                }

                // Se resultsTrimmed è solo un numero, trattalo come una stringa vuota
                if (resultsTrimmed.split('-').length === 1) {
                    resultsTrimmed = '';
                }

                if (resultsTrimmed === '') {
                    risultatiSquadra.push({
                        risultato: '',
                        casa: isCasa ? '...' : '',
                        fuori: isCasa ? '' : '...',
                        sqVs: isCasa ? partita.team2 : partita.team1
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
                        sqVs: isCasa ? partita.team2 : partita.team1
                    });
                }
            }
        });
    }
    return risultatiSquadra;
};



const camInter = creaRisultatiSquadra(calendario, 'Inter');
const camJuve = creaRisultatiSquadra(calendario, 'Juve');
const camMilan = creaRisultatiSquadra(calendario, 'Milan');
const camAtalanta = creaRisultatiSquadra(calendario, 'Atalanta');
const camNapoli = creaRisultatiSquadra(calendario, 'Napoli');
const camRoma = creaRisultatiSquadra(calendario, 'Roma');

const camLazio = creaRisultatiSquadra(calendario, 'Lazio');
const camBologna = creaRisultatiSquadra(calendario, 'Bologna');
const camFiorentina = creaRisultatiSquadra(calendario, 'Fiorentina');
const camTorino = creaRisultatiSquadra(calendario, 'Torino');
const camSassuolo = creaRisultatiSquadra(calendario, 'Sassuolo');
const camUdinese = creaRisultatiSquadra(calendario, 'Udinese');
const camGenoa = creaRisultatiSquadra(calendario, 'Genoa');

const camFrosinone = creaRisultatiSquadra(calendario, 'Frosinone');
const camMonza = creaRisultatiSquadra(calendario, 'Monza');
const camLecce = creaRisultatiSquadra(calendario, 'Lecce');
const camCagliari = creaRisultatiSquadra(calendario, 'Cagliari');
const camEmpoli = creaRisultatiSquadra(calendario, 'Empoli');
const camVerona = creaRisultatiSquadra(calendario, 'Verona');
const camSalernitana = creaRisultatiSquadra(calendario, 'Salernitana');


export {
    camInter,
    camJuve,
    camMilan,
    camAtalanta,
    camNapoli,
    camRoma,
    camLazio,
    camBologna,
    camFiorentina,
    camTorino,
    camSassuolo,
    camUdinese,
    camGenoa,
    camFrosinone,
    camMonza,
    camLecce,
    camCagliari,
    camEmpoli,
    camVerona,
    camSalernitana
};
