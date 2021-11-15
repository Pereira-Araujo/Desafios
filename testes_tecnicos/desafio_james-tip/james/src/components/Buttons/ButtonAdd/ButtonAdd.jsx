import {useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/AddCircleOutlineOutlined";
import { Container } from "./styles";
import GlobalStateContext from "../../../global/GlobalStateContext";
import AddModal from "../../Modals/AddModal/AddModal";

function ButtonAdd() {
  const { open, setOpen } = useContext(GlobalStateContext);

  return (
    <>
      <AddModal open={open} callFunction={() => setOpen(false)} />
      <Container>
        <IconButton
          onClick={() => setOpen(true)}
          color="primary"
          aria-label="Add"
        >
          <Add fontSize="large" />
        </IconButton>
      </Container>
    </>
  );
}

export default ButtonAdd;
