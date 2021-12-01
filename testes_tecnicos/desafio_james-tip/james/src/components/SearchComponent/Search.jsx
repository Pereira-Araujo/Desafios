import "./styles";

import { SearchInput } from "./styles";

const Search = ({ callFunction, searchValue }) => {
  return (
    <>
      <SearchInput
        onChange={callFunction}
        value={searchValue}
        placeholder={"Pesquisar código, nome, tipo, produtor ou valor..."}
      />
    </>
  );
};
export default Search;
