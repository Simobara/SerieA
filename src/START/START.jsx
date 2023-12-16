import { Atalanta, Bologna, Cagliari, Empoli, Fiorentina, Frosinone, Genoa, Inter, Juve, Lazio, Lecce, Milan, Monza, Napoli, Roma, Salernitana, Sassuolo, Torino, Udinese, Verona, } from '../assets/ImportSquadre/importSquadre'

// http://www.italiadelcalcio.it/i010100.htm

//* INCONTRI
export const initialPartite = [
    { numero: 1, day: 'ven', time: '20.45', team1: 'Genoa', team2: 'Juve', },
    { numero: 2, day: 'sab', time: '15:00', team1: 'Lecce', team2: 'Frosinone', },
    { numero: 3, day: 'sab', time: '18:00', team1: 'Napoli', team2: 'Cagliari', },
    { numero: 4, day: 'sab', time: '20:45', team1: 'Torino', team2: 'Empoli', },
    { numero: 5, day: 'dom', time: '12:30', team1: 'Milan', team2: 'Monza', },
    { numero: 6, day: 'dom', time: '15:00', team1: 'Fiorentina', team2: 'Verona', },
    { numero: 7, day: 'dom', time: '15:00', team1: 'Udinese', team2: 'Sassuolo', },
    { numero: 8, day: 'dom', time: '18:00', team1: 'Bologna', team2: 'Roma', },
    { numero: 9, day: 'dom', time: '20:45', team1: 'Lazio', team2: 'Inter', },
    { numero: 10, day: 'lun', time: '20:45', team1: 'Atalanta', team2: 'Salernitana', },
];
//* SQUADRE PUNTEGGIO
export const squadre = [
    { logo: Inter, nome: 'Inter', punteggio: 38 },
    { logo: Juve, nome: 'Juve', punteggio: 36 },
    { logo: Milan, nome: 'Milan', punteggio: 29 },
    { logo: Atalanta, nome: 'Atalanta', punteggio: 23 },
    { logo: Napoli, nome: 'Napoli', punteggio: 24 },
    { logo: Roma, nome: 'Roma', punteggio: 25 },

    { logo: Lazio, nome: 'Lazio', punteggio: 21 },
    { logo: Bologna, nome: 'Bologna', punteggio: 25 },
    { logo: Fiorentina, nome: 'Fiorentina', punteggio: 24 },
    { logo: Torino, nome: 'Torino', punteggio: 20 },
    { logo: Sassuolo, nome: 'Sassuolo', punteggio: 15 },
    { logo: Udinese, nome: 'Udinese', punteggio: 12 },
    { logo: Genoa, nome: 'Genoa', punteggio: 15 },

    { logo: Monza, nome: 'Monza', punteggio: 21 },
    { logo: Frosinone, nome: 'Frosinone', punteggio: 19 },
    { logo: Lecce, nome: 'Lecce', punteggio: 17 },
    { logo: Cagliari, nome: 'Cagliari', punteggio: 13 },
    { logo: Empoli, nome: 'Empoli', punteggio: 12 },
    { logo: Verona, nome: 'Verona', punteggio: 11 },
    { logo: Salernitana, nome: 'Salernitana', punteggio: 8 },
];

//tableCamminoSq
export const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
export const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];

//logoSquadrePos
export const SqEndGruppo1 = 6 //taglio della fine prima linea  
export const SqEndGruppo2 = 13 //taglio della fine seconda linea



