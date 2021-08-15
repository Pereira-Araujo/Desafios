import { useState,useEffect } from "react";
import axios from 'axios'
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [clients, setClients] = useState([])

  const getClients = () => {
    axios.get('./users.json').then((resp) => {
      setClients(resp.data.data)
    });
  };

  useEffect(() => {
    getClients()
  })
 

  const data = {
    email,
    setEmail,
    password,
    setPassword,
    anchorEl,
    setAnchorEl,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    clients,
     setClients
    
   
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
