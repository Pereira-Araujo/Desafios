import {
  CardModal,
  BoxModal,
  PhotoModal,
  BoxText,
  BoxTopics,
  Information,
  Line,
  ModalButton,
  TextAlignLeft

} from "./style";

function Modal(props) {
  return (
    <CardModal>
      <BoxModal>
        <PhotoModal src={props.modalPhoto} alt={props.modalDescription} />

        <BoxText>
          <h2>{props.modalName}</h2>
          <Line />
          <BoxTopics>
            <div>
              <p>Username:</p>
              <TextAlignLeft>{props.modalUsername}</TextAlignLeft>
            </div>
            <div>
              <p>Seguindo:</p>
              <Information>{props.modalFollowing}</Information>
            </div>
          </BoxTopics>
          <BoxTopics>
            <div>
              <p>Cadastrado(a):</p>
              <TextAlignLeft>{props.modalDate}</TextAlignLeft>
            </div>
            <div>
              <p>Seguidores:</p>
              <Information>{props.modalFollowers}</Information>
            </div>
          </BoxTopics>
          <BoxTopics>
            <div>
              <p>URL:</p>
              <a href={props.modalLink} target={"_blank"} rel={"noreferrer"}>
                {props.modalUrl}
              </a>
            </div>
            
          </BoxTopics>
          <ModalButton>
              <button onClick={props.callFunction}>FECHAR</button>
          </ModalButton>
        </BoxText>
      </BoxModal>
    </CardModal>
  );
}

export default Modal;
