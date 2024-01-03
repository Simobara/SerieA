import { Atalanta, Bologna, Cagliari, Empoli, Fiorentina, Frosinone, Genoa, Inter, Juve, Lazio, Lecce, Milan, Monza, Napoli, Roma, Salernitana, Sassuolo, Torino, Udinese, Verona, } from '../../assets/ImportSquadre/importSquadre'
// import { giornataClou } from './Matches/matches';

//* INCONTRI
// export const initialPartite = [...giornataClou]

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---.
import { camAtalanta } from './0Start';
import { camBologna } from './0Start';
import { camCagliari } from './0Start';
import { camEmpoli } from './0Start';
import { camFiorentina } from './0Start';
import { camFrosinone } from './0Start';
import { camGenoa } from './0Start';
import { camInter } from './0Start';
import { camJuve } from './0Start';
import { camLazio } from './0Start';
import { camLecce } from './0Start';
import { camMilan } from './0Start';
import { camMonza } from './0Start';
import { camNapoli } from './0Start';
import { camRoma } from './0Start';
import { camSalernitana } from './0Start';
import { camSassuolo } from './0Start';
import { camTorino } from './0Start';
import { camUdinese } from './0Start';
import { camVerona } from './0Start';



// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---.
const calcolaPuntiSquadra = (puntiSquadra) => {
    let puntiTotali = 0;
    puntiSquadra.forEach(partita => {
        let risultatoCasa = partita.casa.trim();
        let risultatoFuori = partita.fuori.trim();
        let risultatoPartita = partita.risultato.trim();

        // Controlla se il risultato inizia con '8' o '9' e ignora l'aggiunta di punti se vero
        if (risultatoPartita.startsWith('8') || risultatoPartita.startsWith('9')) {
            return; // ignora questa partita e continua con la prossima iterazione del ciclo
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


//* SQUADRE PUNTEGGIO
export const squadre = [
    { logo: Inter, nome: 'Inter', punteggio: calcolaPuntiSquadra(camInter) },
    { logo: Juve, nome: 'Juve', punteggio: calcolaPuntiSquadra(camJuve) },
    { logo: Milan, nome: 'Milan', punteggio: calcolaPuntiSquadra(camMilan) },
    { logo: Atalanta, nome: 'Atalanta', punteggio: calcolaPuntiSquadra(camAtalanta) },
    { logo: Napoli, nome: 'Napoli', punteggio: calcolaPuntiSquadra(camNapoli) },
    { logo: Roma, nome: 'Roma', punteggio: calcolaPuntiSquadra(camRoma) },

    { logo: Lazio, nome: 'Lazio', punteggio: calcolaPuntiSquadra(camLazio) },
    { logo: Bologna, nome: 'Bologna', punteggio: calcolaPuntiSquadra(camBologna) },
    { logo: Fiorentina, nome: 'Fiorentina', punteggio: calcolaPuntiSquadra(camFiorentina) },
    { logo: Torino, nome: 'Torino', punteggio: calcolaPuntiSquadra(camTorino) },
    { logo: Sassuolo, nome: 'Sassuolo', punteggio: calcolaPuntiSquadra(camSassuolo) },
    { logo: Udinese, nome: 'Udinese', punteggio: calcolaPuntiSquadra(camUdinese) },
    { logo: Genoa, nome: 'Genoa', punteggio: calcolaPuntiSquadra(camGenoa) },

    { logo: Monza, nome: 'Monza', punteggio: calcolaPuntiSquadra(camMonza) },
    { logo: Frosinone, nome: 'Frosinone', punteggio: calcolaPuntiSquadra(camFrosinone) },
    { logo: Lecce, nome: 'Lecce', punteggio: calcolaPuntiSquadra(camLecce) },
    { logo: Cagliari, nome: 'Cagliari', punteggio: calcolaPuntiSquadra(camCagliari) },
    { logo: Empoli, nome: 'Empoli', punteggio: calcolaPuntiSquadra(camEmpoli) },
    { logo: Verona, nome: 'Verona', punteggio: calcolaPuntiSquadra(camVerona) },
    { logo: Salernitana, nome: 'Salernitana', punteggio: calcolaPuntiSquadra(camSalernitana) },
];



//tableCamminoSq
export const ATeams = ['INTER', 'JUVE', 'MILAN', 'ATALANTA', 'NAPOLI', 'ROMA'];
export const BTeams = ['MONZA', 'FROSINONE', 'LECCE', 'CAGLIARI', 'EMPOLI', 'VERONA', 'SALERNITANA'];

//logoSquadrePos
export const SqEndGruppo1 = 6 //taglio della fine prima linea  
export const SqEndGruppo2 = 13 //taglio della fine seconda linea



