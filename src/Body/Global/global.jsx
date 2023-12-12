// SquadraContext.js
import { createContext, useState } from 'react';

export const SquadraContext = createContext();
// eslint-disable-next-line
export const SquadraProvider = ({ children }) => {
    const [sqSelected, setSqSelected] = useState([]);

    return (
        <SquadraContext.Provider value={{ sqSelected, setSqSelected }}>
            {children}
        </SquadraContext.Provider>
    );
};


//-----------------------------------------------------------------------


export const CoppiaPartitaContext = createContext();
// eslint-disable-next-line
export const CoppiaPartitaProvider = ({ children }) => {
    const [coppiaSelected, setCoppiaSelected] = useState([]);

    return (
        <CoppiaPartitaContext.Provider value={{ coppiaSelected, setCoppiaSelected }}>
            {children}
        </CoppiaPartitaContext.Provider>
    )
};

//-----------------------------------------------------------------------

