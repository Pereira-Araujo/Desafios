import {
  SearchComponent,
  InputComponent,
  ButtonComponent,
  MagnifierComponent,
  InputBox,
  LogoSearch
} from "./style";
function SearchBar(props) {
  return (
    <SearchComponent onSubmit={props.callFunction}>
      <LogoSearch
        onClick={props.clickLogo}
        src={props.headerLogo}
        alt={props.headerDescription}
      />
      <InputBox>
        <InputComponent
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        <ButtonComponent type={"submit"}>
          <MagnifierComponent
            src={props.buttonImage}
            alt={props.buttonDescription}
          />
        </ButtonComponent>
      </InputBox>
    </SearchComponent>
  );
}

export default SearchBar;
