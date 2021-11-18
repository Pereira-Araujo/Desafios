import { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';

import FormComponent from '../components/Form/index';
import BoxPlanComponent from '../components/BoxPlan/index';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import areaCode from '../constants/areaCodes';
import plans from '../constants/plans';

import totalNoPlan from '../services/totalNoPlan/totalNoPlan';
import totalWithPlan from '../services/totalWithPlan/totalWithPlan';
import difference from '../services/difference/difference';

import { Container, Title, Box, InputMinutes } from './style';

const SinglePage = () => {
	const [
		callCost,
		setCallCost,
		origin,
		setOrigin,
		destination,
		setDestination,
		faleMaisPlan,
		setFaleMaisPlan,
		minutes,
		setMinutes,
		isVisible
	] = useContext(GlobalStateContext);

	return (
		<Container>
			<Title>TELZIR FALEMAIS</Title>
			<Box>
				<FormComponent
					title={'Origem'}
					titleOption={'DDD'}
					callChange={(event) => setOrigin(event.target.value)}
					Options={areaCode.map((area) => {
						return (
							<MenuItem key={area} value={area}>
								{area}
							</MenuItem>
						);
					})}
				/>

				<FormComponent
					title={'Destino'}
					titleOption={'DDD'}
					callChange={(event) => setDestination(event.target.value)}
					Options={areaCode.map((area) => {
						return (
							<MenuItem key={area} value={area}>
								{area}
							</MenuItem>
						);
					})}
				/>

				<FormControl>
					<InputMinutes label={'Minutos'} onChange={(event) => setMinutes(event.target.value)} />
				</FormControl>

				<FormComponent
					title={'Plano'}
					titleOption={'Pacote'}
					callChange={(event) => setFaleMaisPlan(event.target.value)}
					Options={plans.map((type) => {
						return (
							<MenuItem key={type} value={type}>
								{type}
							</MenuItem>
						);
					})}
				/>
			</Box>

			{isVisible !== true ? (
				<div />
			) : (
				<BoxPlanComponent
					noPlan={totalNoPlan(callCost, minutes)}
					withPlan={totalWithPlan(callCost, minutes, Number(faleMaisPlan))}
					layBy={difference(
						totalNoPlan(callCost, minutes),
						totalWithPlan(callCost, minutes, Number(faleMaisPlan))
					)}
				/>
			)}
		</Container>
	);
};

export default SinglePage;
