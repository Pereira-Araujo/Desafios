import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import areaCode from "../constants/areaCodes";
import costsDefault from "../constants/costsDefault";

const GlobalState = (props) => {
  const [callCost, setCallCost] = useState(undefined);
  const [origin, setOrigin] = useState(undefined);
  const [destination, setDestination] = useState(undefined);
  const [faleMaisPlan, setFaleMaisPlan] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false)

  const changeCosts = () => {
    if (origin === areaCode[0] && destination === areaCode[1]) setCallCost(costsDefault[0]);

    if (origin === areaCode[1] && destination === areaCode[0]) setCallCost(costsDefault[1]);

    if (origin === areaCode[0] && destination === areaCode[2]) setCallCost(costsDefault[2]);

    if (origin === areaCode[2] && destination === areaCode[0]) setCallCost(costsDefault[3]);

    if (origin === areaCode[0] && destination === areaCode[3]) setCallCost(costsDefault[4]);

    if (origin === areaCode[3] && destination === areaCode[0]) setCallCost(costsDefault[5]);
  };

  const showBox =()=>{
    if(origin &&
      destination &&
      faleMaisPlan &&
      minutes !== undefined){
      setIsVisible(true) 
    }else{
      setIsVisible(false) 
     }
    
    if(minutes === "" || null || undefined){
      setIsVisible(false) 
    }
  }

  useEffect(() => {
    changeCosts();
    showBox()
  });

  const data = [
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
  ];
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
