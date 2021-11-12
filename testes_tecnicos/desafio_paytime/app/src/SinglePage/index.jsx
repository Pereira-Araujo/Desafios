import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../Constanst/url";
import getBrazilianDate from "../Hooks/useDate";
import useValue from "../Hooks/useValue";
import Modal from "@material-ui/core/Modal";
import SearchBar from "../Components/SearchBar/index";
import Footer from "../Components/Footer/index";
import Card from "../Components/Card/index";
import ModalComponent from "../Components/Modal/index";
import LogoHeader from "../assets/logo_small.svg";
import Magnifier from "../assets/magnifier.svg";
import BigLogo from "../assets/logo_big.svg";
import { Box, BoxSearch, BoxResults, ModalContainer,LogoImageCentral } from "./style";

function SinglePage() {
  let userName;
  let arrayModalUser;

  const [inputFind, onChangeInputFind] = useValue("");
  const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [modalUser, setModalUser] = useState([]);

  const [open, setOpen] = useState(false);

  const getOpenModal = (name) => {
    userName = name;
    axios
      .get(`${BASE_URL}users/${userName}`)
      .then((response) => {
        arrayModalUser = [response.data];
        setModalUser(arrayModalUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const modalBody = (
    <ModalContainer>
      {modalUser.map((person) => {
        return (
          <>
            <ModalComponent
              modalPhoto={person.avatar_url}
              modalDescription={"imagem do usuário do GitHub"}
              modalName={person.name}
              modalUsername={person.login}
              modalFollowing={person.following}
              modalDate={getBrazilianDate(person.created_at)}
              modalFollowers={person.followers}
              modalUrl={person.html_url}
              modalLink={person.html_url}
              callFunction={closeModal}
            />
          </>
        );
      })}
    </ModalContainer>
  );

  const backInicial = () => {
    setIsSearch(false);
  };

  const changePages = (event) => {
    event.preventDefault();
    if (!isSearch && inputFind !== "") {
      setIsSearch(true);
      getUsers();
    }
    if (isSearch) {
      getUsers();
    }
  };

  const getUsers = () => {
    axios
      .get(`${BASE_URL}search/users?q=${inputFind}`)
      .then((response) => {
        setUsers(response.data.items);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (inputFind.length === 0) {
      setIsSearch(false);
    }
  }, [inputFind.length]);

  return (
    <>
      <SearchBar
        callFunction={changePages}
        clickLogo={backInicial}
        headerLogo={LogoHeader}
        headerDescription={"Logo: The Git Search "}
        placeholder={"Pesquisar"}
        buttonImage={Magnifier}
        value={inputFind}
        onChange={onChangeInputFind}
      />
      {!isSearch ? (
        <Box>
          <LogoImageCentral src={BigLogo} alt={"Logo: The Git Search"} />
        </Box>
      ) : (
        <BoxSearch>
          <BoxResults>
            {users.map((person) => {
              return (
                <Card
                  key={person.login}
                  cardImage={person.avatar_url}
                  cardDescription={"imagem do usuário do GitHub"}
                  cardName={person.login}
                  cardGithubLink={person.html_url}
                  cardLink={person.html_url}
                  cardScore={person.score}
                  callFunction={() => {
                    getOpenModal(person.login);
                  }}
                />
              );
            })}

            <Modal open={open}>{modalBody}</Modal>
          </BoxResults>
        </BoxSearch>
      )}

      <Footer />
    </>
  );
}

export default SinglePage;
