// import { calendario } from "../Calendario/calendario";

const creaRisultatiSquadra = (calendario, nomeSquadra) => {
    const risultatiSquadra = [];
    let giornataSpeciale = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        giornata.forEach(partita => {
            if (partita.team1 === nomeSquadra || partita.team2 === nomeSquadra) {
                const isCasa = partita.team1 === nomeSquadra;
                let resultsTrimmed = partita.results.trim();

                if (i <= 19) {
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

                        const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                        risultatiSquadra.push({
                            risultato: risultatoInvertito,
                            casa: isCasa ? segno : '',
                            fuori: isCasa ? '' : segno,
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    }
                } else {
                    if (!giornataSpeciale) {
                        risultatiSquadra.push({
                            risultato: '',
                            casa: '***',
                            fuori: '***',
                            sqVs: '*** *** ***'
                        });
                        giornataSpeciale = true;
                    } else {
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

                            const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                            risultatiSquadra.push({
                                risultato: risultatoInvertito,
                                casa: isCasa ? segno : '',
                                fuori: isCasa ? '' : segno,
                                sqVs: isCasa ? partita.team2 : partita.team1
                            });
                        }
                    }
                }
            }
        });
    }

    return risultatiSquadra;
}

// Esempio di utilizzo per tutte le squadre mostrate nell'immagine
// const risultatiAtalanta = creaRisultatiSquadra(calendario, 'Atalanta');
// const risultatiBologna = creaRisultatiSquadra(calendario, 'Bologna');
// const risultatiCagliari = creaRisultatiSquadra(calendario, 'Cagliari');
// const risultatiEmpoli = creaRisultatiSquadra(calendario, 'Empoli');
// const risultatiFiorentina = creaRisultatiSquadra(calendario, 'Fiorentina');
// const risultatiFrosinone = creaRisultatiSquadra(calendario, 'Frosinone');
// const risultatiGenoa = creaRisultatiSquadra(calendario, 'Genoa');
// const risultatiInter = creaRisultatiSquadra(calendario, 'Inter');
// const risultatiJuve = creaRisultatiSquadra(calendario, 'Juve');
// const risultatiLazio = creaRisultatiSquadra(calendario, 'Lazio');
// const risultatiLecce = creaRisultatiSquadra(calendario, 'Lecce');
// const risultatiMilan = creaRisultatiSquadra(calendario, 'Milan');
// const risultatiMonza = creaRisultatiSquadra(calendario, 'Monza');
// const risultatiNapoli = creaRisultatiSquadra(calendario, 'Napoli');
// const risultatiRoma = creaRisultatiSquadra(calendario, 'Roma');
// const risultatiSalernitana = creaRisultatiSquadra(calendario, 'Salernitana');
// const risultatiSassuolo = creaRisultatiSquadra(calendario, 'Sassuolo');
// const risultatiTorino = creaRisultatiSquadra(calendario, 'Torino');
// const risultatiUdinese = creaRisultatiSquadra(calendario, 'Udinese');
// const risultatiVerona = creaRisultatiSquadra(calendario, 'Verona');

// export default {
//     risultatiAtalanta,
//     risultatiBologna,
//     risultatiCagliari,
//     risultatiEmpoli,
//     risultatiFiorentina,
//     risultatiFrosinone,
//     risultatiGenoa,
//     risultatiInter,
//     risultatiJuve,
//     risultatiLazio,
//     risultatiLecce,
//     risultatiMilan,
//     risultatiMonza,
//     risultatiNapoli,
//     risultatiRoma,
//     risultatiSalernitana,
//     risultatiSassuolo,
//     risultatiTorino,
//     risultatiUdinese,
//     risultatiVerona
// };