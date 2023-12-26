import Pagina1 from "./Pagina1/pagina1";
import { SquadraProvider } from "./Global/global";
import { CoppiaPartitaProvider } from "./Global/global";
import { CoppiaPartitaRegistrataProvider } from "./Global/global";

const Body = () => {
  return (
    <>
      <SquadraProvider>
        <CoppiaPartitaProvider>
          <CoppiaPartitaRegistrataProvider>
            <Pagina1 />
          </CoppiaPartitaRegistrataProvider>
        </CoppiaPartitaProvider >
      </SquadraProvider>
    </>
  );
};

export default Body;
