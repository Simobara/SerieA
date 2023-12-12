import Pagina1 from "./Pagina1/pagina1";
import { SquadraProvider } from "./Global/global";
import { CoppiaPartitaProvider } from "./Global/global";

const Body = () => {
  return (
    <>
      <SquadraProvider>
        <CoppiaPartitaProvider>
          <Pagina1 />
        </CoppiaPartitaProvider>
      </SquadraProvider>
    </>
  );
};

export default Body;
