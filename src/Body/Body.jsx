import Pagina1 from "./Pagina1/pagina1";
import { SquadraProvider } from "./Global/global";
import { GiornataClouProvider } from "./Global/global";
import { CoppiaPartitaProvider } from "./Global/global";
import { CoppiaPartitaRegistrataProvider } from "./Global/global";
import { PartiteDefinNoModProvider } from "./Global/global";

const Body = () => {
  return (
    <>
      <SquadraProvider>
        <PartiteDefinNoModProvider>
          <GiornataClouProvider>
            <CoppiaPartitaProvider>
              <CoppiaPartitaRegistrataProvider>
                <Pagina1 />
              </CoppiaPartitaRegistrataProvider>
            </CoppiaPartitaProvider >
          </GiornataClouProvider>
        </PartiteDefinNoModProvider>
      </SquadraProvider>
    </>
  );
};

export default Body;
