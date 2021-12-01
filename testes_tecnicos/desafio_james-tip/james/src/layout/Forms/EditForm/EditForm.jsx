import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "../../../global/GlobalStateContext";

import Button from "@mui/material/Button";
import { Container, Input } from "./styles";

import { editProduct } from "../../../services/endpoints";

const EditForm = () => {
  const {
    editFormData,setEditFormData,
    idCode,
    product,
  } = useContext(GlobalStateContext);

  const [productName, setProductName] = useState("");

  const getName = (id) => {
    const objProduct = product.filter((item) => item.id === id);
    setProductName(objProduct[0]?.product_name);
  };


  const productEdit = (id)=>{
    const body = {
			product_code: editFormData.code,
			product_category: editFormData.category,
			product_name: editFormData.productName,
			product_provider: editFormData.provider,
			product_cost: editFormData.cost
		};

  return editProduct(id,body)

  }

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
        value={editFormData.code}
        onChange={(e) => setEditFormData({...editFormData, code:e.target.value})}
      />
      <Input
        required
        label="Categoria "
        variant="outlined"
        value={editFormData.category}
        onChange={(e) => setEditFormData({...editFormData, category:e.target.value})}
      />
      <Input
        required
        label="Nome"
        variant="outlined"
        value={editFormData.productName}
        onChange={(e) => setEditFormData({...editFormData, productName: e.target.value})}
      />
      <Input
        required
        label="Fornecedor"
        variant="outlined"
        value={editFormData.provider}
        onChange={(e) => setEditFormData({...editFormData,provider: e.target.value})}
      />
      <Input
        required
        label="Valor "
        variant="outlined"
        value={editFormData.cost}
        onChange={(e) => setEditFormData({...editFormData,cost: e.target.value})}
      />

      <Button variant="contained" onClick={() => productEdit(idCode)}>
        Editar
      </Button>
    </Container>
  );
};

export default EditForm;
