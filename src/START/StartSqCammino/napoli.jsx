import { calendario } from "../Calendario/calendario";

function creaRisultatiNapoli(calendario) {
    const squadra = 'Napoli';
    const risultatiNapoli = [];
    let giornataSpeciale = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        giornata.forEach(partita => {
            if (partita.team1 === squadra || partita.team2 === squadra) {
                const isCasa = partita.team1 === squadra;
                let resultsTrimmed = partita.results.trim(); // Applicazione del metodo .trim() ai risultati della partita

                if (i <= 19) {
                    if (resultsTrimmed === '') {
                        risultatiNapoli.push({
                            risultato: '',
                            casa: isCasa ? '...' : '',
                            fuori: isCasa ? '' : '...',
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    } else {
                        const risultatoSplit = resultsTrimmed.split('-');
                        const golNapoli = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                        const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                        let segno;
                        if (golNapoli > golAvversari) segno = '+';
                        else if (golNapoli < golAvversari) segno = '-';
                        else segno = '=';

                        const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                        risultatiNapoli.push({
                            risultato: risultatoInvertito,
                            casa: isCasa ? segno : '',
                            fuori: isCasa ? '' : segno,
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    }
                } else {
                    if (!giornataSpeciale) {
                        risultatiNapoli.push({
                            risultato: '',
                            casa: '***',
                            fuori: '***',
                            sqVs: '*** *** ***'
                        });
                        giornataSpeciale = true;
                    } else {
                        if (resultsTrimmed === '') {
                            risultatiNapoli.push({
                                risultato: '',
                                casa: isCasa ? '...' : '',
                                fuori: isCasa ? '' : '...',
                                sqVs: isCasa ? partita.team2 : partita.team1
                            });
                        } else {
                            const risultatoSplit = resultsTrimmed.split('-');
                            const golNapoli = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                            const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                            let segno;
                            if (golNapoli > golAvversari) segno = '+';
                            else if (golNapoli < golAvversari) segno = '-';
                            else segno = '=';

                            const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                            risultatiNapoli.push({
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

    return risultatiNapoli;
}

const risultatiNapoli = creaRisultatiNapoli(calendario);
export const napoli = risultatiNapoli;


// export const napoli = [
//     //* 1
//     { risultato: '✔️', casa: ' ', fuori: '+', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'GENOA' },
//     //* 2
//     { risultato: ' ', casa: ' ', fuori: '=', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'LECCE' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'FIORENTINA' },
//     //* 3
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '=', fuori: ' ', sqVs: 'MILAN' },
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'EMPOLI' },
//     //* 4
//     { risultato: ' ', casa: ' ', fuori: '+', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: '-', fuori: ' ', sqVs: 'INTER' },
//     { risultato: ' ', casa: ' ', fuori: '-', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '+', fuori: ' ', sqVs: 'CAGLIARI' },
//     //* 5
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'MONZA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'TORINO' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'SALERNITANA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'SASSUOLO' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'VERONA' },
//     //* 2
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'GENOA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'JUVE' },
//     //* 3
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'TORINO' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'INTER' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'ATALANTA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'MONZA' },
//     //* 4
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'ROMA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'UDINESE' },
//     //* 5
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'LECCE' },
// ];