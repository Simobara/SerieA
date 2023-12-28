import Pagina1 from "./Pagina1/pagina1";
import { SquadraProvider } from "./Global/global";
import { GiornataClouProvider } from "./Global/global";
import { CoppiaPartitaProvider } from "./Global/global";
import { CoppiaPartitaRegistrataProvider } from "./Global/global";
import { PartiteDefinNoModProvider } from "./Global/global";
import { ButtonResetProvider } from "./Global/global";

const Body = () => {
  return (
    <>
      <SquadraProvider>
        <ButtonResetProvider>
          <PartiteDefinNoModProvider>
            <GiornataClouProvider>
              <CoppiaPartitaProvider>
                <CoppiaPartitaRegistrataProvider>
                  <Pagina1 />
                </CoppiaPartitaRegistrataProvider>
              </CoppiaPartitaProvider >
            </GiornataClouProvider>
          </PartiteDefinNoModProvider>
        </ButtonResetProvider>
      </SquadraProvider>
    </>
  );
};

export default Body;
