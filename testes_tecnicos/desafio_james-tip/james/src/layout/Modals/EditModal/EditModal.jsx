import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { lightGrey3 } from "../../../styles/colors";
import EditForm from "../../Forms/EditForm/EditForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: `2px solid ${lightGrey3}`,
  borderRadius:"2%",

  boxShadow: 24,
  p: 4,
  "@media (max-width:450px)": {
    width: "300px",
    height: "420px",
  },
  "@media (max-width:360px)": {
    width: "250px",
    height: "425px",

  },
};

const EditModal = ({ open, callFunction, id }) => {
  return (
    <Modal
      open={open}
      onClose={callFunction}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <EditForm id={id} />
      </Box>
    </Modal>
  );
};

export default EditModal;
