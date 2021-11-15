import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "../../../global/GlobalStateContext";

import Button from "@mui/material/Button";
import { Container, Input } from "./styles";
import axios from "axios";
import { Base_Url } from "../../../constants/links/index";

const EditForm = () => {
  const {
    upCode,
    setUpCode,
    upCategory,
    setUpCategory,
    upName,
    setUpName,
    upProvider,
    setUpProvider,
    upCost,
    setUpCost,

    idCode,
    product,
  } = useContext(GlobalStateContext);

  const [productName, setProductName] = useState("");

  const getName = (id) => {
    const objProduct = product.filter((item) => item.id === id);
    setProductName(objProduct[0]?.product_name);
  };

  const editProduct = (id) => {
    const objProduct = product.filter((item) => item.id === id);

    const body = {
      product_code: upCode.length > 0 ? upCode : objProduct[0]?.product_code,
      product_category:
        upCategory.length > 0 ? upCategory : objProduct[0]?.product_category,
      product_name: upName.length > 0 ? upName : objProduct[0]?.product_name,
      product_provider:
        upProvider.length > 0 ? upProvider : objProduct[0]?.product_provider,
      product_cost: upCost.length > 0 ? upCost : objProduct[0]?.product_cost,
    };

    axios
      .put(`${Base_Url}${id}`, body)
      .then((resp) => {
        alert("Sucesso");
        window.location.reload(1);
      })
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  useEffect(() => {
    getName(idCode);
  });

  return (
    <Container>
      <h1>{productName}</h1>
      <Input
        required
        label="Código"
        variant="outlined"
        value={upCode}
        onChange={(e) => setUpCode(e.target.value)}
      />
      <Input
        required
        label="Categoria "
        variant="outlined"
        value={upCategory}
        onChange={(e) => setUpCategory(e.target.value)}
      />
      <Input
        required
        label="Nome"
        variant="outlined"
        value={upName}
        onChange={(e) => setUpName(e.target.value)}
      />
      <Input
        required
        label="Fornecedor"
        variant="outlined"
        value={upProvider}
        onChange={(e) => setUpProvider(e.target.value)}
      />
      <Input
        required
        label="Valor "
        variant="outlined"
        value={upCost}
        onChange={(e) => setUpCost(e.target.value)}
      />

      <Button variant="contained" onClick={() => editProduct(idCode)}>
        Editar
      </Button>
    </Container>
  );
};

export default EditForm;
