//TODO?--- --- --- --- --- METTERE A POSTO LE SQUADRE

const calendario24 = {
  //NOTE: di norma 2 grandi vincono, 1-2 pareggiano (casa),  1 perde (di solito fuori) 
  //*---   AGOSTO                                                                                                              ---  1
  giornata1: [
    { numero: 1,  day: 'sab', time: '18:30',          team1: 'Empoli',      team2: 'Verona',           pron: '', results: '0-1' },
    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Frosinone',   team2: 'Napoli',           pron: '', results: '1-3' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Genoa',       team2: 'Fiorentina',       pron: '', results: '1-4' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Inter',       team2: 'Monza',            pron: '', results: '2-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Roma',        team2: 'Salernitana',      pron: '', results: '2-2' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Sassuolo',    team2: 'Atalanta',         pron: '', results: '0-2' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Lecce',       team2: 'Lazio',            pron: '', results: '2-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Udinese',     team2: 'Juve',             pron: '', results: '0-3' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Torino',      team2: 'Cagliari',         pron: '', results: '0-0' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Bologna',     team2: 'Milan',            pron: '', results: '0-2' },
],
  //*---  -----                                                                                                                ---  2
	giornata2: [
    { numero: 1,  day: 'sab', time: '18:30',          team1: 'Frosinone',   team2: 'Atalanta',         pron: '', results: '2-1' },
    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Monza',       team2: 'Empoli',           pron: '', results: '2-0' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Verona',      team2: 'Roma',             pron: '', results: '2-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Milan',       team2: 'Torino',           pron: '', results: '4-1' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Fiorentina',  team2: 'Lecce',            pron: '', results: '2-2' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Juve',        team2: 'Bologna',          pron: '', results: '1-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Lazio',       team2: 'Genoa',            pron: '', results: '0-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Napoli',      team2: 'Sassuolo',         pron: '', results: '2-0' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Salernitana', team2: 'Udinese',          pron: '', results: '1-1' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Cagliari',    team2: 'Inter',            pron: '', results: '0-2' },
],
  //*-----SETTEMBRE------------------------------------------    -  3 -    -------------------------------------------------------  3
	giornata3: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Sassuolo',    team2: 'Verona',           pron: '', results: '3-1' },
    { numero: 2,  day: 'ven', time: '18:30',          team1: 'Roma',        team2: 'Milan',            pron: '', results: '1-2' },
    
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Bologna',      team2: 'Cagliari',        pron: '', results: '2-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Udinese',      team2: 'Frosinone',       pron: '', results: '0-0' },
    { numero: 5,  day: 'sab', time: '12:30',          team1: 'Atalanta',     team2: 'Monza',           pron: '', results: '3-0' },
    { numero: 6,  day: 'sab', time: '15:00',          team1: 'Napoli',       team2: 'Lazio',           pron: '', results: '1-2' },
    
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Inter',        team2: 'Fiorentina',      pron: '', results: '4-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Torino',       team2: 'Genoa',           pron: '', results: '1-0' },
    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Empoli',       team2: 'Juve',            pron: '', results: '0-2' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Lecce',        team2: 'Salernitana',     pron: '', results: '2-0' },
],
  //*---  -----                                                                                                                ---  4
	giornata4: [
    { numero: 1,  day: 'sab', time: '18:30',          team1: 'Juve',         team2: 'Lazio',           pron: '', results: '3-1' },
    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Inter',        team2: 'Milan',           pron: '', results: '5-1' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Genoa',        team2: 'Napoli',          pron: '', results: '2-2' },

    { numero: 4,  day: 'dom', time: '12:30',          team1: 'Frosinone',    team2: 'Sassuolo',        pron: '', results: '4-2' },
    { numero: 5,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Lecce',           pron: '', results: '1-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Fiorentina',   team2: 'Atalanta',        pron: '', results: '3-2' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Roma',         team2: 'Empoli',          pron: '', results: '7-0' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Cagliari',     team2: 'Udinese',         pron: '', results: '0-0' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Salernitana',  team2: 'Torino',          pron: '', results: '0-3' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Verona',       team2: 'Bologna',         pron: '', results: '0-0' },
],
  //*---  -----                                                                                                                ---  5
	giornata5: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Salernitana',  team2: 'Frosinone',       pron: '', results: '1-1' },
    { numero: 2,  day: 'ven', time: '18:30',          team1: 'Lecce',        team2: 'Genoa',           pron: '', results: '1-0' },

    { numero: 3,  day: 'sab', time: '12:30',          team1: 'Lazio',        team2: 'Monza',           pron: '', results: '1-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Milan',        team2: 'Verona',          pron: '', results: '1-0' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Sassuolo',     team2: 'Juve',            pron: '', results: '4-2' },

    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Empoli',       team2: 'Inter',           pron: '', results: '0-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Atalanta',     team2: 'Cagliari',        pron: '', results: '2-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Udinese',      team2: 'Fiorentina',      pron: '', results: '0-2' },
    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Bologna',      team2: 'Napoli',          pron: '', results: '0-0' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Torino',       team2: 'Roma',            pron: '', results: '1-1' },
],
  //*                                                           --  6 ---                                                      ---  6
	giornata6: [
    { numero: 1,  day: 'mar', time: '18:30',          team1: 'Juve',         team2: 'Lecce',           pron: '', results: '1-0' },

    { numero: 2,  day: 'mer', time: '12:30',          team1: 'Inter',        team2: 'Sassuolo',        pron: '', results: '1-2' },
    { numero: 3,  day: 'mer', time: '15:00',          team1: 'Lazio',        team2: 'Torino',          pron: '', results: '2-0' },
    { numero: 4,  day: 'mer', time: '15:00',          team1: 'Napoli',       team2: 'Udinese',         pron: '', results: '4-1' },
    { numero: 5,  day: 'mer', time: '18:30',          team1: 'Cagliari',     team2: 'Milan',           pron: '', results: '1-3' },
    { numero: 6,  day: 'mer', time: '20:45',          team1: 'Empoli',       team2: 'Salernitana',     pron: '', results: '1-0' },
    { numero: 7,  day: 'mer', time: '20:45',          team1: 'Verona',       team2: 'Atalanta',        pron: '', results: '0-1' },

    { numero: 8,  day: 'gio', time: '18:00',          team1: 'Frosinone',    team2: 'Fiorentina',      pron: '', results: '1-1' },
    { numero: 9,  day: 'gio', time: '18:00',          team1: 'Monza',        team2: 'Bologna',         pron: '', results: '0-0' },
    { numero: 10, day: 'gio', time: '20:45',          team1: 'Genoa',        team2: 'Roma',            pron: '', results: '4-1' },
],
  //*---  OTTOBRE-----                                                                                                         ---  7
	giornata7: [
    { numero: 1,  day: 'sab', time: '15:00',          team1: 'Lecce',        team2: 'Napoli',           pron: '', results: '0-4' },
    { numero: 2,  day: 'sab', time: '18:00',          team1: 'Milan',        team2: 'Lazio',            pron: '', results: '2-0' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Salernitana',  team2: 'Inter',            pron: '', results: '0-4' },
    
    { numero: 4,  day: 'dom', time: '12:30',          team1: 'Bologna',      team2: 'Empoli',           pron: '', results: '3-0' },
    { numero: 5,  day: 'dom', time: '15:00',          team1: 'Udinese',      team2: 'Genoa',            pron: '', results: '2-2' },
    { numero: 6,  day: 'dom', time: '18:00',          team1: 'Atalanta',     team2: 'Juve',             pron: '', results: '0-0' },
    { numero: 7,  day: 'dom', time: '20:30',          team1: 'Roma',         team2: 'Frosinone',        pron: '', results: '2-0' },

    { numero: 8,  day: 'lun', time: '15:00',          team1: 'Sassuolo',     team2: 'Monza',            pron: '', results: '0-1' },
    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Torino',       team2: 'Verona',           pron: '', results: '0-0' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Fiorentina',   team2: 'Cagliari',         pron: '', results: '3-0' },
],
  //*---  -----                                                                                                                ---  8
	giornata8: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Empoli',       team2: 'Udinese',         pron: '', results: '0-0' },
    { numero: 2,  day: 'ven', time: '18:30',          team1: 'Lecce',        team2: 'Sassuolo',        pron: '', results: '1-1' },

    { numero: 3,  day: 'sab', time: '12:30',          team1: 'Genoa',        team2: 'Milan',           pron: '', results: '0-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Inter',        team2: 'Bologna',         pron: '', results: '2-2' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Juve',         team2: 'Torino',          pron: '', results: '2-0' },

    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Salernitana',     pron: '', results: '3-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Frosinone',    team2: 'Verona',          pron: '', results: '2-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Lazio',        team2: 'Atalanta',        pron: '', results: '3-2' },
    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Cagliari',     team2: 'Roma',            pron: '', results: '1-4' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Napoli',       team2: 'Fiorentina',      pron: '', results: '1-3' },
],
  //*--------------------------------------------------------    -  9 -    -------------------------------------------------------  9
	giornata9: [
    { numero: 1,  day: 'sab', time: '18:30',          team1: 'Verona',       team2: 'Napoli',          pron: '', results: '1-3' },
    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Torino',       team2: 'Inter',           pron: '', results: '0-3' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Sassuolo',     team2: 'Lazio',           pron: '', results: '0-2' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Roma',         team2: 'Monza',           pron: '', results: '1-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Bologna',      team2: 'Frosinone',       pron: '', results: '2-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Salernitana',  team2: 'Cagliari',        pron: '', results: '2-2' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Atalanta',     team2: 'Genoa',           pron: '', results: '2-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Milan',        team2: 'Juve',            pron: '', results: '0-1' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Udinese',      team2: 'Lecce',           pron: '', results: '1-1' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Fiorentina',   team2: 'Empoli',          pron: '', results: '0-2' },
],
  //*---  -----                                                                                                                --- 10
	giornata10: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Genoa',        team2: 'Salernitana',     pron: '', results: '1-0' },

    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Sassuolo',     team2: 'Bologna',         pron: '', results: '1-1' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Lecce',        team2: 'Torino',          pron: '', results: '0-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Juve',         team2: 'Verona',          pron: '', results: '1-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Cagliari',     team2: 'Frosinone',       pron: '', results: '4-3' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Udinese',         pron: '', results: '1-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Inter',        team2: 'Roma',            pron: '', results: '1-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Napoli',       team2: 'Milan',           pron: '', results: '2-2' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Empoli',       team2: 'Atalanta',        pron: '', results: '0-3' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Lazio',        team2: 'Fiorentina',      pron: '', results: '1-0' },
],
  //*---  NOVEMBRE----                                                                                                         --- 11
	giornata11: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Bologna',      team2: 'Lazio',           pron: '', results: '1-0' },

    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Salernitana',  team2: 'Napoli',          pron: '', results: '0-2' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Atalanta',     team2: 'Inter',           pron: '', results: '1-2' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Milan',        team2: 'Udinese',         pron: '', results: '0-1' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Verona',       team2: 'Monza',           pron: '', results: '1-3' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Cagliari',     team2: 'Genoa',           pron: '', results: '2-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Roma',         team2: 'Lecce',           pron: '', results: '2-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Fiorentina',   team2: 'Juve',            pron: '', results: '0-1' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Frosinone',    team2: 'Empoli',          pron: '', results: '2-1' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Torino',       team2: 'Sassuolo',        pron: '', results: '2-1' }, 
],
  //*                                                          --- 12 ---                                                      --- 12
	giornata12: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Sassuolo',     team2: 'Salernitana',     pron: '', results: '2-2' },
    { numero: 2,  day: 'ven', time: '18:30',          team1: 'Genoa',        team2: 'Verona',          pron: '', results: '1-0' },
    { numero: 3,  day: 'ven', time: '20:45',          team1: 'Lecce',        team2: 'Milan',           pron: '', results: '2-2' },
    { numero: 4,  day: 'ven', time: '20:45',          team1: 'Juve',         team2: 'Cagliari',        pron: '', results: '2-1' },

    { numero: 5,  day: 'sab', time: '12:30',          team1: 'Monza',        team2: 'Torino',          pron: '', results: '1-1' },
    { numero: 6,  day: 'sab', time: '15:00',          team1: 'Napoli',       team2: 'Empoli',          pron: '', results: '0-1' },
    { numero: 7,  day: 'sab', time: '15:00',          team1: 'Fiorentina',   team2: 'Bologna',         pron: '', results: '2-1' },
    { numero: 8,  day: 'sab', time: '18:00',          team1: 'Udinese',      team2: 'Atalanta',        pron: '', results: '1-1' },

    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Lazio',        team2: 'Roma',            pron: '', results: '0-0' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Inter',        team2: 'Frosinone',       pron: '', results: '2-0' },
],
  //*---  -----                                                                                                                --- 13
	giornata13: [
    { numero: 1,  day: 'sab', time: '18:30',          team1: 'Salernitana',  team2: 'Lazio',           pron: '', results: '2-1' },
    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Atalanta',     team2: 'Napoli',          pron: '', results: '1-2' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Milan',        team2: 'Fiorentina',      pron: '', results: '1-0' },

    { numero: 4,  day: 'dom', time: '12:30',          team1: 'Empoli',       team2: 'Sassuolo',        pron: '', results: '3-4' },
    { numero: 5,  day: 'dom', time: '15:00',          team1: 'Frosinone',    team2: 'Genoa',           pron: '', results: '2-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Roma',         team2: 'Udinese',         pron: '', results: '3-1' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Juve',         team2: 'Inter',           pron: '', results: '1-1' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Cagliari',     team2: 'Monza',           pron: '', results: '1-1' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Verona',       team2: 'Lecce',           pron: '', results: '2-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Bologna',      team2: 'Torino',          pron: '', results: '2-0' },
],
  //*---  DICEMBRE-----                                                                                                        --- 14
	giornata14: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Monza',        team2: 'Juve',            pron: '', results: '1-2' },

    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Genoa',        team2: 'Empoli',          pron: '', results: '1-1' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Lazio',        team2: 'Cagliari',        pron: '', results: '1-0' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Milan',        team2: 'Frosinone',       pron: '', results: '3-1' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Lecce',        team2: 'Bologna',         pron: '', results: '1-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Fiorentina',   team2: 'Salernitana',     pron: '', results: '3-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Udinese',      team2: 'Verona',          pron: '', results: '3-3' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Sassuolo',     team2: 'Roma',            pron: '', results: '1-2' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Napoli',       team2: 'Inter',           pron: '', results: '0-3' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Torino',       team2: 'Atalanta',        pron: '', results: '3-0' },
],
  //*--------------------------------------------------------    - 15 -    ------------------------------------------------------- 15
	giornata15: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Juve',         team2: 'Napoli',          pron: '', results: '1-0' },

    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Verona',       team2: 'Lazio',           pron: '', results: '1-1' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Atalanta',     team2: 'Milan',           pron: '', results: '3-2' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Inter',        team2: 'Udinese',         pron: '', results: '4-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Frosinone',    team2: 'Torino',          pron: '', results: '0-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Genoa',           pron: '', results: '1-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Salernitana',  team2: 'Bologna',         pron: '', results: '1-2' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Roma',         team2: 'Fiorentina',      pron: '', results: '1-1' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Empoli',       team2: 'Lecce',           pron: '', results: '1-1' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Cagliari',     team2: 'Sassuolo',        pron: '', results: '2-1' },
],
  //*---  -----                                                                                                                --- 16
	giornata16: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Genoa',        team2: 'Juve',            pron: '', results: '1-1' },

    { numero: 2,  day: 'sab', time: '18:30',          team1: 'Lecce',        team2: 'Frosinone',       pron: '', results: '2-1' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Napoli',       team2: 'Cagliari',        pron: '', results: '2-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Torino',       team2: 'Empoli',          pron: '', results: '1-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Milan',        team2: 'Monza',           pron: '', results: '3-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Fiorentina',   team2: 'Verona',          pron: '', results: '1-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Udinese',      team2: 'Sassuolo',        pron: '', results: '2-2' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Bologna',      team2: 'Roma',            pron: '', results: '2-0' },

    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Lazio',        team2: 'Inter',           pron: '', results: '0-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Atalanta',     team2: 'Salernitana',     pron: '', results: '4-1' },
],
  //*---  -----                                                                                                                --- 17
	giornata17: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Empoli',       team2: 'Lazio',           pron: '', results: '0-2' },
    { numero: 2,  day: 'ven', time: '18:30',          team1: 'Sassuolo',     team2: 'Genoa',           pron: '', results: '1-2' },
    { numero: 3,  day: 'ven', time: '20:45',          team1: 'Monza',        team2: 'Fiorentina',      pron: '', results: '0-1' },
    { numero: 4,  day: 'ven', time: '20:45',          team1: 'Salernitana',  team2: 'Milan',           pron: '', results: '2-2' },

    { numero: 5,  day: 'sab', time: '12:30',          team1: 'Frosinone',    team2: 'Juve',            pron: '', results: '1-2' },
    { numero: 6,  day: 'sab', time: '15:00',          team1: 'Bologna',      team2: 'Atalanta',        pron: '', results: '1-0' },
    { numero: 7,  day: 'sab', time: '15:00',          team1: 'Torino',       team2: 'Udinese',         pron: '', results: '1-1' },
    { numero: 8,  day: 'sab', time: '18:00',          team1: 'Verona',       team2: 'Cagliari',        pron: '', results: '2-0' },
    { numero: 9,  day: 'sab', time: '18:00',          team1: 'Inter',        team2: 'Lecce',           pron: '', results: '1-0' },
    { numero: 10, day: 'sab', time: '20:45',          team1: 'Roma',         team2: 'Napoli',          pron: '', results: '2-0' },
],
  //*                                                          --- 18 ---                                                      --- 18
	giornata18: [
    { numero: 1,  day: 'ven', time: '18:30',          team1: 'Fiorentina',   team2: 'Torino',          pron: '', results: '1-0' },
    { numero: 2,  day: 'ven', time: '18:30',          team1: 'Napoli',       team2: 'Monza',           pron: '', results: '0-0' },
    { numero: 3,  day: 'ven', time: '20:45',          team1: 'Genoa',        team2: 'Inter',           pron: '', results: '1-1' },
    { numero: 4,  day: 'ven', time: '20:45',          team1: 'Lazio',        team2: 'Frosinone',       pron: '', results: '3-1' },

    { numero: 5,  day: 'sab', time: '12:30',          team1: 'Atalanta',     team2: 'Lecce',           pron: '', results: '1-0' },
    { numero: 6,  day: 'sab', time: '15:00',          team1: 'Cagliari',     team2: 'Empoli',          pron: '', results: '0-0' },
    { numero: 7,  day: 'sab', time: '15:00',          team1: 'Udinese',      team2: 'Bologna',         pron: '', results: '3-0' },
    { numero: 8,  day: 'sab', time: '18:00',          team1: 'Verona',       team2: 'Salernitana',     pron: '', results: '0-1' },
    { numero: 9,  day: 'sab', time: '18:00',          team1: 'Milan',        team2: 'Sassuolo',        pron: '', results: '1-0' },
    { numero: 10, day: 'sab', time: '20:45',          team1: 'Juve',         team2: 'Roma',            pron: '', results: '1-0' },
],
  //*---  GENNAIO-----                                                                                                         --- 19
	giornata19: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Bologna',      team2: 'Genoa',           pron: '', results: '1-1' },

    { numero: 2,  day: 'sab', time: '12:30',          team1: 'Inter',        team2: 'Verona',          pron: '', results: '2-1' },
    { numero: 3,  day: 'sab', time: '15:00',          team1: 'Frosinone',    team2: 'Monza',           pron: '', results: '2-3' },
    { numero: 4,  day: 'sab', time: '18:00',          team1: 'Lecce',        team2: 'Cagliari',        pron: '', results: '1-1' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Sassuolo',     team2: 'Fiorentina',      pron: '', results: '1-0' },

    { numero: 6,  day: 'dom', time: '12:30',          team1: 'Empoli',       team2: 'Milan',           pron: '', results: '0-3' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Torino',       team2: 'Napoli',          pron: '', results: '3-0' },
    { numero: 8,  day: 'dom', time: '15:00',          team1: 'Udinese',      team2: 'Lazio',           pron: '', results: '1-2' },
    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Salernitana',  team2: 'Juve',            pron: '', results: '1-2' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Roma',         team2: 'Atalanta',        pron: '', results: '1-1' },
  ],
  //*---  -----  -----   -----  -----  -----   -----  ANDATA---  -----   ---RITORNO ----  -----   -----  -----   -----  -----  ----//
  //*---  -----                                                                                                                --- 20
	giornata20: [
    { numero: 1,  day: 'sab', time: '15:00',          team1: 'Genoa',        team2: 'Torino',          pron: '', results: '0-0' },
    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Napoli',       team2: 'Salernitana',     pron: '', results: '2-1' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Verona',       team2: 'Empoli',          pron: '', results: '2-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Monza',        team2: 'Inter',           pron: '', results: '1-5' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Lazio',        team2: 'Lecce',           pron: '', results: '1-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Cagliari',     team2: 'Bologna',         pron: '', results: '2-1' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Fiorentina',   team2: 'Udinese',         pron: '', results: '2-2' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Milan',        team2: 'Roma',            pron: '', results: '3-1' },

    { numero: 9,  day: 'lun', time: '20:45',          team1: 'Atalanta',     team2: 'Frosinone',       pron: '', results: '5-0' },
    
    { numero: 10, day: 'mar', time: '20:45',          team1: 'Juve',         team2: 'Sassuolo',        pron: '', results: '3-0' },
],
  //*--------------------------------------------------------    - 21 -    ------------------------------------------------------- 21
	giornata21: [
    { numero: 1,  day: 'sab', time: '18:00',          team1: 'Roma',         team2: 'Verona',           pron: '', results: '2-1' },
    { numero: 2,  day: 'sab', time: '20:45',          team1: 'Udinese',      team2: 'Milan',            pron: '', results: '2-3' },

    { numero: 3,  day: 'dom', time: '12:30',          team1: 'Frosinone',    team2: 'Cagliari',         pron: '', results: '3-1' },
    { numero: 4,  day: 'dom', time: '15:00',          team1: 'Empoli',       team2: 'Monza',            pron: '', results: '3-0' },
    { numero: 5,  day: 'dom', time: '18:00',          team1: 'Salernitana',  team2: 'Genoa',            pron: '', results: '1-2' },
    { numero: 6,  day: 'dom', time: '20:45',          team1: 'Lecce',        team2: 'Juve',             pron: '', results: '0-3' },

    { numero: 7,  day: 'lun', time: '19:00',          team1: 'Bologna',      team2: 'Fiorentina',       pron: '', results: '2-0' },
    { numero: 8,  day: 'lun', time: '18:00',          team1: 'Sassuolo',     team2: 'Napoli',           pron: '', results: '1-6' },
    { numero: 9,  day: 'lun', time: '20:45',          team1: 'Torino',       team2: 'Lazio',            pron: '', results: '0-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Inter',        team2: 'Atalanta',         pron: '', results: '4-0' },
],
  //*---  -----                                                                                                                --- 22
	giornata22: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Cagliari',     team2: 'Torino',           pron: '', results: '1-2' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Atalanta',     team2: 'Udinese',          pron: '', results: '2-0' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Juve',         team2: 'Empoli',           pron: '', results: '1-1' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Milan',        team2: 'Bologna',          pron: '', results: '2-2' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Genoa',        team2: 'Lecce',            pron: '', results: '2-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Verona',       team2: 'Frosinone',        pron: '', results: '1-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Sassuolo',         pron: '', results: '1-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Lazio',        team2: 'Napoli',           pron: '', results: '0-0' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Fiorentina',   team2: 'Inter',            pron: '', results: '0-1' },

    { numero: 10, day: 'lun', time: '20:45',          team1: 'Salernitana',  team2: 'Roma',             pron: '', results: '1-2' },
],
  //*---  FEBBRAIO-----                                                                                                        --- 23
	giornata23: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Lecce',        team2: 'Fiorentina',       pron: '', results: '3-2' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Empoli',       team2: 'Genoa',            pron: '', results: '0-0' },
    { numero: 3,  day: 'sab', time: '15:00',          team1: 'Udinese',      team2: 'Monza',            pron: '', results: '0-0' },
    { numero: 4,  day: 'sab', time: '18:00',          team1: 'Frosinone',    team2: 'Milan',            pron: '', results: '2-3' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Bologna',      team2: 'Sassuolo',         pron: '', results: '4-2' },

    { numero: 6,  day: 'dom', time: '12:30',          team1: 'Torino',       team2: 'Salernitana',      pron: '', results: '0-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Napoli',       team2: 'Verona',           pron: '', results: '2-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Atalanta',     team2: 'Lazio',            pron: '', results: '3-1' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Inter',        team2: 'Juve',             pron: '', results: '1-0' },

    { numero: 10, day: 'lun', time: '20:45',          team1: 'Roma',         team2: 'Cagliari',         pron: '', results: '4-0' },
],
  //*                                                          --- 24 ---                                                      --- 24
	giornata24: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Salernitana',  team2: 'Empoli',           pron: '', results: '1-3' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Cagliari',     team2: 'Lazio',            pron: '', results: '1-3' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Roma',         team2: 'Inter',            pron: '', results: '2-4' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Sassuolo',     team2: 'Torino',           pron: '', results: '1-1' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Fiorentina',   team2: 'Frosinone',        pron: '', results: '5-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Bologna',      team2: 'Lecce',            pron: '', results: '4-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Verona',           pron: '', results: '0-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Genoa',        team2: 'Atalanta',         pron: '', results: '1-4' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Milan',        team2: 'Napoli',           pron: '', results: '1-0' },

    { numero: 10, day: 'lun', time: '20:45',          team1: 'Juve',         team2: 'Udinese',          pron: '', results: '0-1' },
],
  //*---  -----                                                                                                                --- 25
	giornata25: [
    { numero: 1,  day: 'ven', time: '19:00',          team1: 'Torino',       team2: 'Lecce',            pron: '', results: '2-0' },
    { numero: 2,  day: 'ven', time: '21:00',          team1: 'Inter',        team2: 'Salernitana',      pron: '', results: '4-0' },

    { numero: 3,  day: 'sab', time: '15:00',          team1: 'Napoli',       team2: 'Genoa',            pron: '', results: '1-1' },
    { numero: 4,  day: 'sab', time: '18:00',          team1: 'Verona',       team2: 'Juve',             pron: '', results: '2-2' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Atalanta',     team2: 'Sassuolo',         pron: '', results: '3-0' },

    { numero: 6,  day: 'dom', time: '12:30',          team1: 'Lazio',        team2: 'Bologna',          pron: '', results: '1-2' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Empoli',       team2: 'Fiorentina',       pron: '', results: '1-1' },
    { numero: 8,  day: 'dom', time: '15:00',          team1: 'Udinese',      team2: 'Cagliari',         pron: '', results: '1-1' },
    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Frosinone',    team2: 'Roma',             pron: '', results: '0-3' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Monza',        team2: 'Milan',            pron: '', results: '4-2' },
],
  //*---  -----                                                                                                                --- 26
	giornata26: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Bologna',      team2: 'Verona',           pron: '', results: '2-0' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Sassuolo',     team2: 'Empoli',           pron: '', results: '2-3' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Salernitana',  team2: 'Monza',            pron: '', results: '0-2' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Genoa',        team2: 'Udinese',          pron: '', results: '2-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Juve',         team2: 'Frosinone',        pron: '', results: '3-2' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Cagliari',     team2: 'Napoli',           pron: '', results: '1-1' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Lecce',        team2: 'Inter',            pron: '', results: '0-4' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Milan',        team2: 'Atalanta',         pron: '', results: '1-1' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Roma',         team2: 'Torino',           pron: '', results: '3-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Fiorentina',   team2: 'Lazio',            pron: '', results: '2-1' },
],
  //*-----MARZO----------------------------------------------    - 27 -    ------------------------------------------------------- 27
	giornata27: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Lazio',        team2: 'Milan',            pron: '', results: '0-1' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Udinese',      team2: 'Salernitana',      pron: '', results: '1-1' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Monza',        team2: 'Roma',             pron: '', results: '0-2' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Torino',       team2: 'Fiorentina',       pron: '', results: '0-0' },

    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Verona',       team2: 'Sassuolo',         pron: '', results: '1-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Empoli',       team2: 'Cagliari',         pron: '', results: '0-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Frosinone',    team2: 'Lecce',            pron: '', results: '1-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Atalanta',     team2: 'Bologna',          pron: '', results: '1-2' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Napoli',       team2: 'Juve',             pron: '', results: '2-1' },

    { numero: 10, day: 'lun', time: '20:45',          team1: 'Inter',        team2: 'Genoa',            pron: '', results: '2-1' },
],
  //*---  -----                                                                                                                --- 28
	giornata28: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Napoli',       team2: 'Torino',           pron: '', results: '1-1' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Cagliari',     team2: 'Salernitana',      pron: '', results: '4-2' },
    { numero: 3,  day: 'sab', time: '15:00',          team1: 'Sassuolo',     team2: 'Frosinone',        pron: '', results: '1-0' },
    { numero: 4,  day: 'sab', time: '18:00',          team1: 'Bologna',      team2: 'Inter',            pron: '', results: '0-1' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Genoa',        team2: 'Monza',            pron: '', results: '2-3' },

    { numero: 6,  day: 'dom', time: '12:30',          team1: 'Lecce',        team2: 'Verona',           pron: '', results: '0-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Milan',        team2: 'Empoli',           pron: '', results: '1-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Juve',         team2: 'Atalanta',         pron: '', results: '2-2' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Fiorentina',   team2: 'Roma',             pron: '', results: '2-2' },

    { numero: 10, day: 'lun', time: '20:45',          team1: 'Lazio',        team2: 'Udinese',          pron: '', results: '1-2' },
],
  //*---  -----                                                                                                                --- 29
	giornata29: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Empoli',       team2: 'Bologna',          pron: '', results: '0-1' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Monza',        team2: 'Cagliari',         pron: '', results: '1-0' },
    { numero: 3,  day: 'sab', time: '15:00',          team1: 'Udinese',      team2: 'Torino',           pron: '', results: '0-2' },
    { numero: 4,  day: 'sab', time: '18:00',          team1: 'Salernitana',  team2: 'Lecce',            pron: '', results: '0-1' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Frosinone',    team2: 'Lazio',            pron: '', results: '2-3' },

    { numero: 6,  day: 'dom', time: '12:30',          team1: 'Juve',         team2: 'Genoa',            pron: '', results: '0-0' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Verona',       team2: 'Milan',            pron: '', results: '1-3' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Atalanta',     team2: 'Fiorentina',       pron: 'x', results: '' },
    { numero: 9,  day: 'dom', time: '18:00',          team1: 'Roma',         team2: 'Sassuolo',         pron: '', results: '1-0' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Inter',        team2: 'Napoli',           pron: '', results: '1-1' },
],
  //*     APRILE                                               --- 30 ---                                                      --- 30
	giornata30: [
    { numero: 1,  day: 'sab', time: '12:30',          team1: 'Napoli',       team2: 'Atalanta',         pron: '', results: '0-3' },
    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Genoa',        team2: 'Frosinone',        pron: '', results: '1-1' },
    { numero: 3,  day: 'sab', time: '15:00',          team1: 'Torino',       team2: 'Monza',            pron: '', results: '1-0' },
    { numero: 4,  day: 'sab', time: '18:00',          team1: 'Lazio',        team2: 'Juve',             pron: '', results: '1-0' },
    { numero: 5,  day: 'sab', time: '20:45',          team1: 'Fiorentina',   team2: 'Milan',            pron: '', results: '1-2' },

    { numero: 6,  day: 'lun', time: '12:30',          team1: 'Bologna',      team2: 'Salernitana',      pron: '', results: '3-0' },
    { numero: 7,  day: 'lun', time: '15:00',          team1: 'Cagliari',     team2: 'Verona',           pron: '', results: '1-1' },
    { numero: 8,  day: 'lun', time: '15:00',          team1: 'Sassuolo',     team2: 'Udinese',          pron: '', results: '1-1' },
    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Lecce',        team2: 'Roma',             pron: '', results: '0-0' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Inter',        team2: 'Empoli',           pron: '', results: '2-0' },
],
  //*---  -----                                                                                                                --- 31
	giornata31: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Salernitana',  team2: 'Sassuolo',         pron: '', results: '2-2' },
    
    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Milan',        team2: 'Lecce',            pron: '', results: '3-0' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Roma',         team2: 'Lazio',            pron: '', results: '1-0' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Empoli',       team2: 'Torino',           pron: '', results: '3-2' },
  
    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Frosinone',    team2: 'Bologna',          pron: '', results: '0-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Napoli',           pron: '', results: '2-4' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Cagliari',     team2: 'Atalanta',         pron: '', results: '2-1' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Verona',       team2: 'Genoa',            pron: '', results: '1-2' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Juve',         team2: 'Fiorentina',       pron: '', results: '1-0' },
    
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Udinese',      team2: 'Inter',            pron: '', results: '1-2' },
],
  //*---  -----                                                                                                                --- 32
	giornata32: [
    { numero: 1,  day: 'ven', time: '20:45',           team1: 'Lazio',      team2: 'Salernitana',       pron: '', results: '4-1' },
    
    { numero: 2,  day: 'sab', time: '15:00',           team1: 'Lecce',      team2: 'Empoli',            pron: '', results: '1-0' },
    { numero: 3,  day: 'sab', time: '18:00',           team1: 'Torino',     team2: 'Juve',              pron: '', results: '0-0' },
    { numero: 4,  day: 'sab', time: '20:45',           team1: 'Bologna',    team2: 'Monza',             pron: '', results: '0-0' },
    
    { numero: 5,  day: 'dom', time: '12:30',           team1: 'Napoli',     team2: 'Frosinone',         pron: '', results: '2-2' },
    { numero: 6,  day: 'dom', time: '15:00',           team1: 'Sassuolo',   team2: 'Milan',             pron: '', results: '3-3' },
    { numero: 7,  day: 'dom', time: '18:00',           team1: 'Udinese',    team2: 'Roma',              pron: '', results: '1-2' },
    { numero: 8,  day: 'dom', time: '20:45',           team1: 'Inter',      team2: 'Cagliari',          pron: '', results: '2-2' },
    
    { numero: 9,  day: 'lun', time: '18:30',           team1: 'Fiorentina', team2: 'Genoa',             pron: '', results: '1-1' },
    { numero: 10, day: 'lun', time: '20:45',           team1: 'Atalanta',   team2: 'Verona',            pron: '', results: '2-2' },
],
  //*--------------------------------------------------------    - 33 -    ------------------------------------------------------- 33
	giornata33: [
    { numero: 1,  day: 'ven', time: '18:30',           team1: 'Genoa',       team2: 'Lazio',            pron: '', results: '0-1' },
    { numero: 2,  day: 'ven', time: '20:45',           team1: 'Cagliari',    team2: 'Juve',             pron: '', results: '2-2' },
    
    { numero: 3,  day: 'sab', time: '18:00',           team1: 'Empoli',      team2: 'Napoli',           pron: '', results: '1-0' },
    { numero: 4,  day: 'sab', time: '20:45',           team1: 'Verona',      team2: 'Udinese',          pron: '', results: '1-0' },
    
    { numero: 5,  day: 'dom', time: '12:30',           team1: 'Sassuolo',    team2: 'Lecce',            pron: '', results: '0-3' },
    { numero: 6,  day: 'dom', time: '15:00',           team1: 'Torino',      team2: 'Frosinone',        pron: '', results: '0-0' },
    { numero: 7,  day: 'dom', time: '18:00',           team1: 'Salernitana', team2: 'Fiorentina',       pron: '', results: '0-2' },
    { numero: 8,  day: 'dom', time: '20:45',           team1: 'Monza',       team2: 'Atalanta',         pron: '', results: '1-2' },
    
    { numero: 9,  day: 'lun', time: '18:30',           team1: 'Roma',        team2: 'Bologna',          pron: '', results: '1-3' },
    { numero: 10, day: 'lun', time: '20:45',           team1: 'Milan',       team2: 'Inter',            pron: '', results: '1-2' },
],
  //*---  -----                                                                                                                --- 34
  giornata34: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Frosinone',    team2: 'Salernitana',      pron: '', results: '3-0' },

    { numero: 2,  day: 'sab', time: '15:00',          team1: 'Lecce',        team2: 'Monza',            pron: '', results: '1-1' },
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Juve',         team2: 'Milan',            pron: '', results: '0-0' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Lazio',        team2: 'Verona',           pron: '', results: '1-0' },
    
    { numero: 5,  day: 'dom', time: '12:30',          team1: 'Inter',        team2: 'Torino',           pron: '', results: '2-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Bologna',      team2: 'Udinese',          pron: '', results: '1-1' },
    { numero: 7,  day: 'dom', time: '15:00',          team1: 'Atalanta',     team2: 'Empoli',           pron: '', results: '2-0' },
    { numero: 8,  day: 'dom', time: '18:00',          team1: 'Napoli',       team2: 'Roma',             pron: '', results: '2-2' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Fiorentina',   team2: 'Sassuolo',         pron: '', results: '5-1' },
        
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Genoa',        team2: 'Cagliari',         pron: '', results: '3-0' },
],
  //*---  MAGGIO----                                                                                                           --- 35
	giornata35: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Torino',       team2: 'Bologna',          pron: '', results: '0-0' },
    
    { numero: 2,  day: 'sab', time: '18:00',          team1: 'Monza',        team2: 'Lazio',            pron: '', results: '2-2' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Sassuolo',     team2: 'Inter',            pron: '', results: '1-0' },
    
    { numero: 4,  day: 'dom', time: '12:30',          team1: 'Cagliari',     team2: 'Lecce',            pron: '', results: '1-1' },
    { numero: 5,  day: 'dom', time: '15:00',          team1: 'Empoli',       team2: 'Frosinone',        pron: '', results: '0-0' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Verona',       team2: 'Fiorentina',       pron: '', results: '2-1' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Milan',        team2: 'Genoa',            pron: '', results: '3-3' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Roma',         team2: 'Juve',             pron: '', results: '1-1' },

    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Salernitana',  team2: 'Atalanta',         pron: '', results: '1-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Udinese',      team2: 'Napoli',           pron: '', results: '1-1' },
],
  //*                                                          --- 36 ---                                                      --- 36
	giornata36: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Frosinone',    team2: 'Inter',            pron: '', results: '0-5' },

    { numero: 2,  day: 'sab', time: '18:00',          team1: 'Napoli',       team2: 'Bologna',          pron: '', results: '0-2' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Milan',        team2: 'Cagliari',         pron: '', results: '5-1' },
    
    { numero: 4,  day: 'dom', time: '12:30',          team1: 'Lazio',        team2: 'Empoli',           pron: '', results: '2-0' },
    { numero: 5,  day: 'dom', time: '15:00',          team1: 'Genoa',        team2: 'Sassuolo',         pron: '', results: '2-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Verona',       team2: 'Torino',           pron: '', results: '1-2' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Juve',         team2: 'Salernitana',      pron: '', results: '1-1' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Atalanta',     team2: 'Roma',             pron: '', results: '2-1' },
    
    { numero: 9,  day: 'lun', time: '18:00',          team1: 'Lecce',        team2: 'Udinese',          pron: '', results: '0-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Fiorentina',   team2: 'Monza',            pron: '', results: '2-1' },
],
  //*---  -----                                                                                                                --- 37
	giornata37: [
    { numero: 1,  day: 'ven', time: '20:45',          team1: 'Fiorentina',   team2: 'Napoli',            pron: '', results: '2-2' },
    
    { numero: 2,  day: 'sab', time: '18:00',          team1: 'Lecce',        team2: 'Atalanta',          pron: '', results: '0-2' },
    { numero: 3,  day: 'sab', time: '20:45',          team1: 'Torino',       team2: 'Milan',             pron: '', results: '3-1' },
    
    { numero: 4,  day: 'dom', time: '12:30',          team1: 'Sassuolo',     team2: 'Cagliari',          pron: '', results: '0-2' },
    { numero: 5,  day: 'dom', time: '15:00',          team1: 'Monza',        team2: 'Frosinone',         pron: '', results: '0-1' },
    { numero: 6,  day: 'dom', time: '15:00',          team1: 'Udinese',      team2: 'Empoli',            pron: '', results: '1-1' },
    { numero: 7,  day: 'dom', time: '18:00',          team1: 'Inter',        team2: 'Lazio',             pron: '', results: '1-1' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Roma',         team2: 'Genoa',             pron: '', results: '1-0' },
    
    { numero: 9,  day: 'lun', time: '18:30',          team1: 'Salernitana',  team2: 'Verona',            pron: '', results: '1-2' },
    { numero: 10, day: 'lun', time: '20:45',          team1: 'Bologna',      team2: 'Juve',              pron: '', results: '3-3' },
],
  //*---  -----                                                                                                                --- 38
	giornata38: [
    { numero: 1,  day: 'gio', time: '20:45',          team1: 'Cagliari',    team2: 'Fiorentina',         pron: '', results: '2-3' },
    
    { numero: 2,  day: 'ven', time: '20:45',          team1: 'Genoa',       team2: 'Bologna',            pron: '', results: '' },
    
    { numero: 3,  day: 'sab', time: '18:00',          team1: 'Juve',        team2: 'Monza',              pron: '', results: '' },
    { numero: 4,  day: 'sab', time: '20:45',          team1: 'Milan',       team2: 'Salernitana',        pron: '', results: '' },
    
    { numero: 5,  day: 'dom', time: '18:00',          team1: 'Atalanta',    team2: 'Torino',             pron: '', results: '' },
    { numero: 6,  day: 'dom', time: '18:00',          team1: 'Napoli',      team2: 'Lecce',              pron: '', results: '' },
    { numero: 7,  day: 'dom', time: '20:45',          team1: 'Empoli',      team2: 'Roma',               pron: '', results: '' },
    { numero: 8,  day: 'dom', time: '20:45',          team1: 'Frosinone',   team2: 'Udinese',            pron: '', results: '' },
    { numero: 9,  day: 'dom', time: '20:45',          team1: 'Verona',      team2: 'Inter',              pron: '', results: '' },
    { numero: 10, day: 'dom', time: '20:45',          team1: 'Lazio',       team2: 'Sassuolo',           pron: '', results: '' },
  ],
}; 


// ------------------- ------------------------------------------------------------------- ------------------------------------------
const giornataN = 38
// -------------------------------------------------------------------------------------- -------------------------------------------
export const currentYear = 2024
export const calendario = calendario24;
export const giornataClou = calendario[`giornata${giornataN}`];
// -------------------------------------------------------------------------------------- -------------------------------------------
