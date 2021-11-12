import { Box } from "./style";

const BoxEpisodes = (props) => {
  return (
    <Box key={props.key} onClick={props.callFunction}>
      <img src={props.image} alt={props.alt} />

      <article>
        <h3>
          Episódio {props.index} - {props.title}
        </h3>
        <h5>{props.duration}</h5>
      </article>
    </Box>
  );
};
export default BoxEpisodes;
