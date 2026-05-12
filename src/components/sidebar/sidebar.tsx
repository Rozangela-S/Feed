import { PencilLineIcon } from "@phosphor-icons/react";
import { ButtonContainer, Container, Content, HeaderContent, Img, ImgProfile, Line } from "./styled";

export function Sidebar() {
  return (
    <>
    <Container>
          <div>
            <Img src="https://photo-works.net/images/europe-landscape-photo-edited.jpg" alt="" />
          </div>
          <Content>
            <HeaderContent>
              <ImgProfile src="https://github.com/wesbos.png" alt="avatar" />
              <h3>Leslie Alexander</h3>
              <p>Ui Designer</p>
            </HeaderContent>
            <Line></Line>
            <ButtonContainer>
              <PencilLineIcon size={18} weight="bold"/>
              Editar seu perfil 
            </ButtonContainer>
          </Content>
        </Container>
    </>
  )
}