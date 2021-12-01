import axios from "axios";

import { useContext, useState } from "react";
import GlobalStateContext from "../../../global/GlobalStateContext";
import PostCard from "../../Posts/PostCard/PostCard";
import { Base_Url } from "../../../constants/links/index";
import EditModal from "../../Modals/EditModal/EditModal";

export const ContainerPost = ({ posts }) => {
  const { idCode, setIdCode } = useContext(GlobalStateContext);
  const [open, setOpen] = useState(false);

  const removeProduct = (id) => {
    axios
      .delete(`${Base_Url}${id}`)
      .then((resp) => {
        alert("Produto excluido com sucesso!");
        window.location.reload(1);
      })
      .catch((error) => {
        alert("algo errado");
      });
  };

  const openModal = (id) => {
    setIdCode(id);
    setOpen(true);
  };
  return (
    <>
      <EditModal
        open={open}
        thisId={idCode}
        callFunction={() => setOpen(false)}
      />

      {posts.map((post) => {
        return (
          <PostCard
            callRemove={() => removeProduct(post.id)}
            callEdit={() => openModal(post.id)}
            key={post.id}
            name={post.product_name.toUpperCase()}
            code={post.product_code.toUpperCase()}
            category={post.product_category.toUpperCase()}
            provider={post.product_provider.toUpperCase()}
            cost={post.product_cost.toUpperCase()}
          />
        );
      })}
    </>
  );
};
export default ContainerPost;
