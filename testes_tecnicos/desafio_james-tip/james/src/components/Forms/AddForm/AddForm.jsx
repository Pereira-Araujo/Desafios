import { useContext } from "react";
import Button from "@mui/material/Button";
import { Container, Input } from "./styles";
import GlobalStateContext from "../../../global/GlobalStateContext";
import axios from "axios";
import { Base_Url } from "../../../constants/links/index";

const AddForm = () => {
  const {
    code,
    setCode,
    category,
    setCategory,
    name,
    setName,
    provider,
    setProvider,
    cost,
    setCost,
    
  } = useContext(GlobalStateContext);


  const addProduct = () => {
    const body = {
      product_code: code,
      product_category: category,
      product_name: name,
      product_provider: provider,
      product_cost: cost,
    };
    axios
      .post(`${Base_Url}`, body)
      .then((resp) => {
        alert("Sucesso");
        window.location.reload(1)
      })
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  return (
    <Container>
      <h1>Novo Produto</h1>
      <Input
        required
        label="Código"
        variant="outlined"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Input
        required
        label="Categoria "
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Input
        required
        label="Nome "
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        label="Fornecedor"
        variant="outlined"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      />
      <Input
        required
        label="Valor "
        variant="outlined"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <Button variant="contained" onClick={addProduct}>
        Adicionar
      </Button>
    </Container>
  );
};

export default AddForm;
