import ButtonAddComponent from '../../../components/ButtonsComponent/ButtonAddComponent';
import ButtonGridComponent from '../../../components/ButtonsComponent/ButtonChangeViewComponent/ButtonGridComponent';
import ButtonTableComponent from '../../../components/ButtonsComponent/ButtonChangeViewComponent/ButtonTableComponent';
const Options = () => {
	return (
		<ul>
			<li>
				<ButtonAddComponent text="Novo" />
			</li>

			<li>
				<ButtonGridComponent text="Cards" />
			</li>

			<li>
				<ButtonTableComponent text="Lista" />
			</li>
		</ul>
	);
};

export default Options;
