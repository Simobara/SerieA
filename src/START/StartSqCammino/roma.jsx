import { calendario } from "../Matches/matches";

function creaRisultatiRoma(calendario) {
    const squadra = 'Roma';
    const risultatiRoma = [];
    let giornataSpeciale = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        giornata.forEach(partita => {
            if (partita.team1 === squadra || partita.team2 === squadra) {
                const isCasa = partita.team1 === squadra;
                let resultsTrimmed = partita.results.trim(); // Applicazione del metodo .trim() ai risultati della partita

                if (i <= 19) {
                    if (resultsTrimmed === '') {
                        risultatiRoma.push({
                            risultato: '',
                            casa: isCasa ? '...' : '',
                            fuori: isCasa ? '' : '...',
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    } else {
                        const risultatoSplit = resultsTrimmed.split('-');
                        const golRoma = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                        const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                        let segno;
                        if (golRoma > golAvversari) segno = '+';
                        else if (golRoma < golAvversari) segno = '-';
                        else segno = '=';

                        const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                        risultatiRoma.push({
                            risultato: risultatoInvertito,
                            casa: isCasa ? segno : '',
                            fuori: isCasa ? '' : segno,
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    }
                } else {
                    if (!giornataSpeciale) {
                        risultatiRoma.push({
                            risultato: '',
                            casa: '***',
                            fuori: '***',
                            sqVs: '*** *** ***'
                        });
                        giornataSpeciale = true;
                    } else {
                        if (resultsTrimmed === '') {
                            risultatiRoma.push({
                                risultato: '',
                                casa: isCasa ? '...' : '',
                                fuori: isCasa ? '' : '...',
                                sqVs: isCasa ? partita.team2 : partita.team1
                            });
                        } else {
                            const risultatoSplit = resultsTrimmed.split('-');
                            const golRoma = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                            const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                            let segno;
                            if (golRoma > golAvversari) segno = '+';
                            else if (golRoma < golAvversari) segno = '-';
                            else segno = '=';

                            const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                            risultatiRoma.push({
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

    return risultatiRoma;
}

const risultatiRoma = creaRisultatiRoma(calendario);
export const roma = risultatiRoma;


// export const roma = [
//     //* 1
//     { risultato: '✔️', casa: '=', fuori: ' ', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'EMPOLI' },
//     //* 2
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'TORINO' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'CAGLIARI' },
//     //* 3
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'MONZA' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'INTER' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'LECCE' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'LAZIO' },
//     //* 4
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'BOLOGNA' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'ATALANTA' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'VERONA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'CAGLIARI' },
//     //* 2
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'INTER' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'TORINO' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'MONZA' },
//     //* 3
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'LECCE' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'LAZIO' },
//     //* 4
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'JUVE' },
//     //* 5
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'GENOA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'EMPOLI' },
// ];
