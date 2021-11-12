import { useState, useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";

import Header from "../components/Header";
import Content from "../components/Content";
import BoxEpisodes from "../components/BoxEpisodes";
import BoxDetails from "../components/BoxDetails";

import BASE_URL from "../constants/url";
import amountCount from "../utils/amount";
import convertToHours from "../utils/convertToHours";
import separatePersons from "../utils/spacePerson";
import variablesToOpenPodcast from "../utils/genericVariables";
import nextElement from "../utils/nextElement"
import previousElement from "../utils/previousElement"

import { Container, Card, BackPage } from "./style";

const SinglePage = () => {
  const [amountEpisodes, aboutPodlogic] = useContext(GlobalStateContext);
  const [informationPodcast, setInformationPodcast] = useState([]);
  const [isPlay, setIsPlay] = useState(false);

  const arrayList = amountEpisodes.map((episodeId) => {
    return episodeId.id;
  });


  const closeDetails = () => {
    setIsPlay(false);
  };

  const openPodcast = (value) => {
    isPlay ? setIsPlay(false) : setIsPlay(true);

    let [detailPodcastValue, detailInformations] = variablesToOpenPodcast();
    detailPodcastValue = value;

    axios
      .get(`${BASE_URL}episodes/${detailPodcastValue}/details.json`)
      .then((response) => {
        detailInformations = [response.data];
        setInformationPodcast(detailInformations);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getRandomPodcast = (value) => {
    let [detailPodcastValue, detailInformations] = variablesToOpenPodcast();
    detailPodcastValue = value;

    axios
      .get(`${BASE_URL}episodes/${detailPodcastValue}/details.json`)
      .then((response) => {
        detailInformations = [response.data];
        setInformationPodcast(detailInformations);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const listEpdisodes = amountEpisodes.map((podcast) => {
    return (
      <BoxEpisodes
        key={podcast.id}
        callFunction={() => openPodcast(podcast.id)}
        image={podcast.cover}
        alt={podcast.description}
        index={podcast.episodeNumber}
        title={podcast.name}
        duration={convertToHours(podcast.duration)}
      />
    );
  });

  const detailsEpisode = informationPodcast.map((podcast) => {
    return (
      <BoxDetails
        image={podcast.cover}
        alt={podcast.description}
        index={podcast.episodeNumber}
        title={podcast.name}
        description={podcast.description}
        participants={separatePersons(podcast.participants)}
        audio={podcast.audio}
        next={() => getRandomPodcast(nextElement(arrayList,podcast.episodeNumber-1))}
        previous={() => getRandomPodcast(previousElement(arrayList,podcast.episodeNumber-1))}


        // next={() => getRandomPodcast(random(arrayList))}
        // previous={() => getRandomPodcast(random(arrayList))}
      />
    );
  });

  return (
    <Container>
      <Card>
        {isPlay !== true ? (
          <>
            <Header quantity={amountCount(amountEpisodes)} />
            <Content about={aboutPodlogic} list={listEpdisodes} />
          </>
        ) : (
          <div>
            <BackPage onClick={closeDetails}>X</BackPage>
            {detailsEpisode}
          </div>
        )}
      </Card>
    </Container>
  );
};

export default SinglePage;
