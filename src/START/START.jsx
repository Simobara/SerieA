import { Atalanta, Bologna, Cagliari, Empoli, Fiorentina, Frosinone, Genoa, Inter, Juve, Lazio, Lecce, Milan, Monza, Napoli, Roma, Salernitana, Sassuolo, Torino, Udinese, Verona, } from '../assets/ImportSquadre/importSquadre'

// http://www.italiadelcalcio.it/i010100.htm

//* INCONTRI
export const initialPartite = [
    { numero: 1, day: 'sab', time: '15:00', team1: 'Salernitana', team2: 'Lazio', },
    { numero: 2, day: 'sab', time: '18:00', team1: 'Atalanta', team2: 'Napoli', },
    { numero: 3, day: 'sab', time: '20:45', team1: 'Milan', team2: 'Fiorentina', },
    { numero: 4, day: 'dom', time: '12:30', team1: 'Cagliari', team2: 'Monza', },
    { numero: 5, day: 'dom', time: '15:00', team1: 'Frosinone', team2: 'Genoa', },
    { numero: 6, day: 'dom', time: '15:00', team1: 'Empoli', team2: 'Sassuolo', },
    { numero: 7, day: 'dom', time: '18:00', team1: 'Roma', team2: 'Udinese', },
    { numero: 8, day: 'dom', time: '20:45', team1: 'Juve', team2: 'Inter', },
    { numero: 9, day: 'lun', time: '18:30', team1: 'Verona', team2: 'Lecce', },
    { numero: 10, day: 'lun', time: '20:45', team1: 'Bologna', team2: 'Torino', }
];
//* SQUADRE PUNTEGGIO
export const squadre = [
    { logo: Inter, nome: 'Inter', punteggio: 31 },
    { logo: Juve, nome: 'Juve', punteggio: 29 },
    { logo: Milan, nome: 'Milan', punteggio: 23 },
    { logo: Atalanta, nome: 'Atalanta', punteggio: 20 },
    { logo: Napoli, nome: 'Napoli', punteggio: 21 },
    { logo: Roma, nome: 'Roma', punteggio: 18 },

    { logo: Lazio, nome: 'Lazio', punteggio: 17 },
    { logo: Bologna, nome: 'Bologna', punteggio: 18 },
    { logo: Fiorentina, nome: 'Fiorentina', punteggio: 20 },
    { logo: Torino, nome: 'Torino', punteggio: 16 },
    { logo: Sassuolo, nome: 'Sassuolo', punteggio: 12 },
    { logo: Udinese, nome: 'Udinese', punteggio: 11 },
    { logo: Genoa, nome: 'Genoa', punteggio: 14 },

    { logo: Monza, nome: 'Monza', punteggio: 17 },
    { logo: Frosinone, nome: 'Frosinone', punteggio: 15 },
    { logo: Lecce, nome: 'Lecce', punteggio: 14 },
    { logo: Cagliari, nome: 'Cagliari', punteggio: 9 },
    { logo: Empoli, nome: 'Empoli', punteggio: 10 },
    { logo: Verona, nome: 'Verona', punteggio: 8 },
    { logo: Salernitana, nome: 'Salernitana', punteggio: 5 },
];

//tableCamminoSq
export const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
export const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];

//logoSquadrePos
export const SqEndGruppo1 = 6 //taglio della fine prima linea  
export const SqEndGruppo2 = 13 //taglio della fine seconda linea



