import { calendario } from "../Calendario/calendario";

function creaRisultatiSalernitana(calendario) {
    const squadra = 'Salernitana';
    const risultatiSalernitana = [];
    let giornataSpeciale = false;

    for (let i = 1; i <= 38; i++) {
        const giornata = calendario[`giornata${i}`];

        giornata.forEach(partita => {
            if (partita.team1 === squadra || partita.team2 === squadra) {
                const isCasa = partita.team1 === squadra;

                if (i <= 19) {
                    if (partita.results === ' ') {
                        risultatiSalernitana.push({
                            risultato: ' ',
                            casa: isCasa ? '...' : ' ',
                            fuori: isCasa ? ' ' : '...',
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    } else {
                        const risultatoSplit = partita.results.split('-');
                        const golSalernitana = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                        const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                        let segno;
                        if (golSalernitana > golAvversari) segno = '+';
                        else if (golSalernitana < golAvversari) segno = '-';
                        else segno = '=';

                        // Inverti il risultato se la Salernitana gioca fuori
                        const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                        risultatiSalernitana.push({
                            risultato: risultatoInvertito,
                            casa: isCasa ? segno : ' ',
                            fuori: isCasa ? ' ' : segno,
                            sqVs: isCasa ? partita.team2 : partita.team1
                        });
                    }
                } else {
                    if (!giornataSpeciale) {
                        // Creazione dei risultati con il formato richiesto
                        risultatiSalernitana.push({
                            risultato: ' ',
                            casa: '***',
                            fuori: '***',
                            sqVs: '*** *** ***'
                        });
                        giornataSpeciale = true;
                    } else {
                        // Continua con la logica normale dalla giornata 20
                        if (partita.results === ' ') {
                            risultatiSalernitana.push({
                                risultato: ' ',
                                casa: isCasa ? '...' : ' ',
                                fuori: isCasa ? ' ' : '...',
                                sqVs: isCasa ? partita.team2 : partita.team1
                            });
                        } else {
                            const risultatoSplit = partita.results.split('-');
                            const golSalernitana = isCasa ? risultatoSplit[0] : risultatoSplit[1];
                            const golAvversari = isCasa ? risultatoSplit[1] : risultatoSplit[0];

                            let segno;
                            if (golSalernitana > golAvversari) segno = '+';
                            else if (golSalernitana < golAvversari) segno = '-';
                            else segno = '=';

                            // Inverti il risultato se la Salernitana gioca fuori
                            const risultatoInvertito = isCasa ? partita.results : partita.results.split('-').reverse().join('-');

                            risultatiSalernitana.push({
                                risultato: risultatoInvertito,
                                casa: isCasa ? segno : ' ',
                                fuori: isCasa ? ' ' : segno,
                                sqVs: isCasa ? partita.team2 : partita.team1
                            });
                        }
                    }
                }
            }
        });
    }

    return risultatiSalernitana;
}

const risultatiSalernitana = creaRisultatiSalernitana(calendario);
export const salernitana = risultatiSalernitana;


// export const salernitana = [
//     //* 1
//     { risultato: '✔️', casa: '', fuori: '=', sqVs: 'ROMA' },
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'UDINESE' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'LECCE' },
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'TORINO' },
//     //* 2
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'INTER' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'MONZA' },
//     //* 3
//     { risultato: ' ', casa: '=', fuori: '', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '', fuori: '=', sqVs: 'SASSUOLO' },
//     //* 4 
//     { risultato: ' ', casa: '+', fuori: '', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: '-', fuori: '', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '', fuori: '-', sqVs: 'ATALANTA' },
//     //* 5 
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'MILAN' },
//     { risultato: ' ', casa: '', fuori: '...', sqVs: 'VERONA' },
//     { risultato: ' ', casa: '...', fuori: '', sqVs: 'JUVE' },

//     { risultato: '***', casa: '***', fuori: '***', sqVs: '*** *** ***' },
//     //* --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---A/R
//     //* 1
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'NAPOLI' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'GENOA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'ROMA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'TORINO' },

//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'EMPOLI' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'INTER' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'MONZA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'UDINESE' },

//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'CAGLIARI' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'LECCE' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'BOLOGNA' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'SASSUOLO' },

//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'LAZIO' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'FIORENTINA' },
//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'FROSINONE' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'ATALANTA' },

//     { risultato: ' ', casa: ' ', fuori: '...', sqVs: 'JUVE' },
//     { risultato: ' ', casa: '...', fuori: ' ', sqVs: 'VERONA' },
//     { risultato: '', casa: ' ', fuori: '...', sqVs: 'MILAN' },
// ];



