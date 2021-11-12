import {
  BoxContainerDetails,
  BoxHeader,
  BoxImage,
  BoxTextRight,
  PlayerBox,
  AboutPodcast,
  ShowMoreLess
} from "./style";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const BoxDetails = (props) => {
  return (
    <BoxContainerDetails>
      <BoxHeader>
        <BoxImage>
          <img  src={props.image} alt={props.alt} />
        </BoxImage>

        <BoxTextRight>
          <h1>
           Episódio {props.index} - {props.title}
          </h1>
          <AboutPodcast
            lines={4}
            more={<ShowMoreLess>Ler mais </ShowMoreLess>}
            less={<ShowMoreLess>Ler menos</ShowMoreLess>}
            expanded={false}
          >
           <p>{props.description}</p> 
          </AboutPodcast>
          <h6>Participantes: {props.participants}</h6>
        </BoxTextRight>
      </BoxHeader>

      <PlayerBox>
        <AudioPlayer
          src={props.audio}
          onPlay={(e) => console.log("play works")}
          showSkipControls={true}
          onClickNext={props.next}
          onClickPrevious={props.previous}
          showJumpControls={false}
        />
      </PlayerBox>
    </BoxContainerDetails>
  );
};
export default BoxDetails;
