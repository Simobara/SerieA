import Pagina1 from "./Pagina1/pagina1";
import { SquadraProvider } from "./Global/global";
import { GiornataClouProvider } from "./Global/global";
import { CoppiaPartitaProvider } from "./Global/global";
import { CoppiaPartitaRegistrataProvider } from "./Global/global";

const Body = () => {
  return (
    <>
      <SquadraProvider>
        <GiornataClouProvider>
          <CoppiaPartitaProvider>
            <CoppiaPartitaRegistrataProvider>
              <Pagina1 />
            </CoppiaPartitaRegistrataProvider>
          </CoppiaPartitaProvider >
        </GiornataClouProvider>
      </SquadraProvider>
    </>
  );
};

export default Body;
