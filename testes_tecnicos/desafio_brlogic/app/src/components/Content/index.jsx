import {
  Box,
  CardAbout,
  CardBoxList,
  CardList,
  AboutPodcast,
  ShowMoreLess,
} from "./style";

const Content = (props) => {
  return (
    <Box>
      <CardAbout>
        <h6>SOBRE O PODCAST</h6>
        <AboutPodcast
          lines={4}
          more={<ShowMoreLess>Ler mais </ShowMoreLess>}
          less={<ShowMoreLess>Ler menos </ShowMoreLess>}
          expanded={false}
        >
          <span>{props.about}</span>
        </AboutPodcast>
      </CardAbout>

      <CardBoxList>
        <>
          <h6>LISTA DE EPISÓDIOS</h6>
          <CardList>{props.list}</CardList>
        </>
      </CardBoxList>
    </Box>
  );
};

export default Content;
