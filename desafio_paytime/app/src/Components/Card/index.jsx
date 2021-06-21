import { CardPerson, CardPhoto, CardText, CardButton } from "./style";
function Card(props) {
  return (
    <CardPerson>
      <CardPhoto src={props.cardImage} alt={props.cardDescription} />
      <CardText>
        <h2>{props.cardName}</h2>
        <a href={props.cardGithubLink} target={"_blank"} rel={"noreferrer"}>
          {props.cardLink}
        </a>
        <p>Score: {props.cardScore}.00</p>
      </CardText>
      <CardButton onClick={props.callFunction}>VER MAIS</CardButton>
    </CardPerson>
  );
}

export default Card;
