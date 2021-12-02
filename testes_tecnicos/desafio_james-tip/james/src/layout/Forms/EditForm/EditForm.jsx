import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "../../../global/GlobalStateContext";

import Button from "@mui/material/Button";
import { Container, Input } from "./styles";

import { getProductName, patchProduct } from "../../../services/Api/endpoints";

const EditForm = () => {
  const {
    editFormData,setEditFormData,
    idCode,
    product,
  } = useContext(GlobalStateContext);

  const [productName, setProductName] = useState("");

  const getName = (id) =>setProductName(getProductName(id,product))
  

  const editProduct = (id)=>{
    const objProduct = product.filter((item) => item.id === id);

    const body = {
			product_code: editFormData.code.length > 0 ? editFormData.code : objProduct[0]?.product_code,
			product_category: editFormData.category.length> 0 ? editFormData.category : objProduct[0]?.product_category,
			product_name: editFormData.productName.length > 0 ?editFormData.productName : objProduct[0]?.product_name,
			product_provider: editFormData.provider.length >0 ? editFormData.provider: objProduct[0]?.product_provider,
			product_cost: editFormData.cost.length > 0 ? editFormData.cost: objProduct[0]?.product_cost
		};

  return patchProduct(id,body)

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

      <Button variant="contained" onClick={() => editProduct(idCode)}>
        Editar
      </Button>
    </Container>
  );
};

export default EditForm;
