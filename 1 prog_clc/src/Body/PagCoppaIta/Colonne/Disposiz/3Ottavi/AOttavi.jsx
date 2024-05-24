import React from 'react';
import { SqAOttavi } from '../../../../../START/app/3copItaTds';

const AOttavi = ({ width = '70px', height = '24px' }) => {
	const boxStyle = `flex items-center justify-start text-black bg-white ml-4 pl-1 font-bold overflow-hidden`;
	const teamStyle = "text-white filter brightness-75 pl-1 text-xl font-bold overflow-hidden";
	const containerStyle = { width, height };
	const resultBoxStyle = `flex flex-1 w-6 h-[24px] items-center justify-center bg-gray-500 font-bold text-black`;

	const createMatch = (match, positionStyle) => {
		const [team1Result, team2Result] = match.ris ? match.ris.split('-') : ['', ''];
		return (
			<div key={match.id} className="absolute flex flex-col space-y-1" style={positionStyle}>
				<div className="flex">
					<div className={`${boxStyle} ${teamStyle}`}  style={{ ...containerStyle, backgroundColor: '#A52A2A' }}>{match.team1}</div>
					<div className={resultBoxStyle}>{team1Result}</div>
				</div>
				<div className="flex">
					<div className={boxStyle} style={containerStyle}>{match.team2}</div>
					<div className={resultBoxStyle}>{team2Result}</div>
				</div>
			</div>
		);
	};

	return (
		<>
			{SqAOttavi.map(match => {
				const positionStyle = match.id === 3 || match.id === 4
					? { bottom: match.pos }
					: { top: match.pos };
				return createMatch(match, positionStyle);
			})}
		</>
	);
};

export default AOttavi;
