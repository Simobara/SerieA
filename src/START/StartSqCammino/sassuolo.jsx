import { calendario } from "../Matches/matches";

function creaRisultatiSassuolo(calendario) {
    const squadra = 'Sassuolo';
    const risultatiSassuolo = [];
    let giornataSpeciale = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        giornata.forEach(partita => {
            if (partita.team1 === squadra || partita.team2 === squadra) {
                const isCasa = partita.team1 === squadra;
                let resultsTrimmed = partita.results.trim(); // Applicazione del metodo .trim() ai risultati della partita

                if (i <= 19) {
                    if (resultsTrimmed === '') {
                        risultatiSassuolo.push({
                            risultato: '',
                            casa: isCasa ? '...' : '',
                            fuori: isCasa ? '' : '...',
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    } else {
                        const risultatoSplit = resultsTrimmed.split('-');
                        const golSassuolo = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                        const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                        let segno;
                        if (golSassuolo > golAvversari) segno = '+';
                        else if (golSassuolo < golAvversari) segno = '-';
                        else segno = '=';

                        const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                        risultatiSassuolo.push({
                            risultato: risultatoInvertito,
                            casa: isCasa ? segno : '',
                            fuori: isCasa ? '' : segno,
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    }
                } else {
                    if (!giornataSpeciale) {
                        risultatiSassuolo.push({
                            risultato: '',
                            casa: '***',
                            fuori: '***',
                            sqVs: '*** *** ***'
                        });
                        giornataSpeciale = true;
                    } else {
                        if (resultsTrimmed === '') {
                            risultatiSassuolo.push({
                                risultato: '',
                                casa: isCasa ? '...' : '',
                                fuori: isCasa ? '' : '...',
                                sqVs: isCasa ? partita.team2 : partita.team1
                            });
                        } else {
                            const risultatoSplit = resultsTrimmed.split('-');
                            const golSassuolo = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                            const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                            let segno;
                            if (golSassuolo > golAvversari) segno = '+';
                            else if (golSassuolo < golAvversari) segno = '-';
                            else segno = '=';

                            const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                            risultatiSassuolo.push({
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

    return risultatiSassuolo;
}

const risultatiSassuolo = creaRisultatiSassuolo(calendario);
export const sassuolo = risultatiSassuolo;


// export const sassuolo = [
//     //* 1
//     { risultato: '✔️', casa: '-', fuori: '', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'FROSINONE' },
//     //* 2
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '', fuori: '+', sqVs: 'INTER' },
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '', fuori: '=', sqVs: 'LECCE' },
//     //* 3
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'TORINO' },
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'SALERNITANA' },
//     //* 4
//     { risultato: ' ', casa: '', fuori: '+', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '', fuori: '=', sqVs: 'UDINESE' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'FIORENTINA' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'MONZA' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'BOLOGNA' },
//     //* 2
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'TORINO' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'VERONA' },
//     //* 3
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'SALERNITANA' },
//     //* 4 
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'LECCE' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'INTER' },
//     //* 5
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'LAZIO' },
// ];
