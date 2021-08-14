import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);


  const data = { email, setEmail, password, setPassword,anchorEl,setAnchorEl };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
