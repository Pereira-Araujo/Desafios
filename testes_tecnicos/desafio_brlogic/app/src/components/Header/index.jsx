import { CardHeader, CardHeaderText } from "./style";

const Header = (props) => {
  return (
    <CardHeader>
      <CardHeaderText>
        <h3>Podlogic</h3>
        <h4>{props.quantity} episódios</h4>
      </CardHeaderText>
    </CardHeader>
  );
};
export default Header;
