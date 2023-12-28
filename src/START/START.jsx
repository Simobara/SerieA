import { Atalanta, Bologna, Cagliari, Empoli, Fiorentina, Frosinone, Genoa, Inter, Juve, Lazio, Lecce, Milan, Monza, Napoli, Roma, Salernitana, Sassuolo, Torino, Udinese, Verona, } from '../assets/ImportSquadre/importSquadre'
// import { giornataClou } from './Matches/matches';

//* INCONTRI
// export const initialPartite = [...giornataClou]

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---.
import { atalanta } from '../START/StartSqCammino/atalanta'
import { bologna } from '../START/StartSqCammino/bologna'
import { cagliari } from '../START/StartSqCammino/cagliari'
import { empoli } from '../START/StartSqCammino/empoli'
import { fiorentina } from '../START/StartSqCammino/fiorentina'
import { frosinone } from '../START/StartSqCammino/frosinone'
import { genoa } from '../START/StartSqCammino/genoa'
import { inter } from '../START/StartSqCammino/inter'
import { juve } from '../START/StartSqCammino/juve'
import { lazio } from '../START/StartSqCammino/lazio'
import { lecce } from '../START/StartSqCammino/lecce'
import { milan } from '../START/StartSqCammino/milan'
import { monza } from '../START/StartSqCammino/monza'
import { napoli } from '../START/StartSqCammino/napoli'
import { roma } from '../START/StartSqCammino/roma'
import { salernitana } from '../START/StartSqCammino/salernitana'
import { sassuolo } from '../START/StartSqCammino/sassuolo'
import { torino } from '../START/StartSqCammino/torino'
import { udinese } from '../START/StartSqCammino/udinese'
import { verona } from '../START/StartSqCammino/verona'

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---.
const calcolaPuntiSquadra = (partiteSquadra) => {
    let puntiTotali = 0;
    partiteSquadra.forEach(partita => {
        let risultatoCasa = partita.casa.trim();
        let risultatoFuori = partita.fuori.trim();
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


//* SQUADRE PUNTEGGIO
export const squadre = [
    { logo: Inter, nome: 'Inter', punteggio: calcolaPuntiSquadra(inter) },
    { logo: Juve, nome: 'Juve', punteggio: calcolaPuntiSquadra(juve) },
    { logo: Milan, nome: 'Milan', punteggio: calcolaPuntiSquadra(milan) },
    { logo: Atalanta, nome: 'Atalanta', punteggio: calcolaPuntiSquadra(atalanta) },
    { logo: Napoli, nome: 'Napoli', punteggio: calcolaPuntiSquadra(napoli) },
    { logo: Roma, nome: 'Roma', punteggio: calcolaPuntiSquadra(roma) },

    { logo: Lazio, nome: 'Lazio', punteggio: calcolaPuntiSquadra(lazio) },
    { logo: Bologna, nome: 'Bologna', punteggio: calcolaPuntiSquadra(bologna) },
    { logo: Fiorentina, nome: 'Fiorentina', punteggio: calcolaPuntiSquadra(fiorentina) },
    { logo: Torino, nome: 'Torino', punteggio: calcolaPuntiSquadra(torino) },
    { logo: Sassuolo, nome: 'Sassuolo', punteggio: calcolaPuntiSquadra(sassuolo) },
    { logo: Udinese, nome: 'Udinese', punteggio: calcolaPuntiSquadra(udinese) },
    { logo: Genoa, nome: 'Genoa', punteggio: calcolaPuntiSquadra(genoa) },

    { logo: Monza, nome: 'Monza', punteggio: calcolaPuntiSquadra(monza) },
    { logo: Frosinone, nome: 'Frosinone', punteggio: calcolaPuntiSquadra(frosinone) },
    { logo: Lecce, nome: 'Lecce', punteggio: calcolaPuntiSquadra(lecce) },
    { logo: Cagliari, nome: 'Cagliari', punteggio: calcolaPuntiSquadra(cagliari) },
    { logo: Empoli, nome: 'Empoli', punteggio: calcolaPuntiSquadra(empoli) },
    { logo: Verona, nome: 'Verona', punteggio: calcolaPuntiSquadra(verona) },
    { logo: Salernitana, nome: 'Salernitana', punteggio: calcolaPuntiSquadra(salernitana) },
];


//tableCamminoSq
export const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
export const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];

//logoSquadrePos
export const SqEndGruppo1 = 6 //taglio della fine prima linea  
export const SqEndGruppo2 = 13 //taglio della fine seconda linea



