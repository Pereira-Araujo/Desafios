import React, { useEffect, useState } from "react";
import BASE_URL from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";

const GlobalState = (props) => {
  const [amountEpisodes, setAmountEpisodes] = useState([]);
  const [aboutPodlogic, setAboutPodlogic] = useState("");

  const getInformation = () => {
    axios.get(`${BASE_URL}details.json`).then((response) => {
      setAboutPodlogic(response.data.description);
      setAmountEpisodes(response.data.episodes);
    });
  };

  useEffect(() => {
    getInformation();
  }, []);

  const dataPodlogic = [
    amountEpisodes,
    aboutPodlogic,
    setAmountEpisodes,
    setAboutPodlogic,
  ];
  return (
    <GlobalStateContext.Provider value={dataPodlogic}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
