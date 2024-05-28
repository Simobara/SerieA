import PagSerieA from './PagSerieA/pagSerieA';
import { SquadraProvider } from './Glob/global';
import { GiornataClouProvider } from './Glob/global';
import { CoppiaPartitaProvider } from './Glob/global';
import { CoppiaPartitaRegistrataProvider } from './Glob/global';
import { PartiteDefinNoModProvider } from './Glob/global';
import { ButtonResetProvider } from './Glob/global';
import { IndexSelectedProvider } from './Glob/global';

const Body = () => {
	return (
		<>
			<IndexSelectedProvider>
				<SquadraProvider>
					<ButtonResetProvider>
						<PartiteDefinNoModProvider>
							<GiornataClouProvider>
								<CoppiaPartitaProvider>
									<CoppiaPartitaRegistrataProvider>
										<PagSerieA />
									</CoppiaPartitaRegistrataProvider>
								</CoppiaPartitaProvider>
							</GiornataClouProvider>
						</PartiteDefinNoModProvider>
					</ButtonResetProvider>
				</SquadraProvider>
			</IndexSelectedProvider>
		</>
	);
};

export default Body;
