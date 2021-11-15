import RemoveIcon from "@mui/icons-material/CancelRounded";
import EditIcon from "@mui/icons-material/EditRounded";
import {
  Container,
  Post,
  LightText,
  LightTextMargin,
  Price,
  Actions,
} from "./styles";
import NumberFormat from "react-number-format";
import { upperCase } from "../../../services/upperCase";

const PostCard = ({
  key,
  name,
  code,
  category,
  provider,
  cost,
  callRemove,
  callEdit,
}) => {
  return (
    <Container>
      <Actions>
        <RemoveIcon onClick={callRemove} color="error" />
        <EditIcon onClick={callEdit} color="primary" />
      </Actions>
      <Post>
        <LightTextMargin>Cód.: {code}</LightTextMargin>
        <h3>{upperCase(name)}</h3>
        <LightText>Categoria: {upperCase(category)}</LightText>
        <LightText>Produtor: {upperCase(provider)}</LightText>
        <Price>
          <NumberFormat
            value={cost}
            displayType="text"
            thousandSeparator={true}
            prefix="R$"
          />
        </Price>
      </Post>
    </Container>
  );
};
export default PostCard;
