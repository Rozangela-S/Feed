import { PencilLine } from "@phosphor-icons/react";
import {
  Avatar,
  Container,
  Cover,
  EditButton,
  Profile,
} from "./styled";

export function Sidebar() {
  return (
    <Container>
      <Cover />

      <Profile>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/gustavoguanabara"
            alt="Avatar"
          />
        </Avatar>

        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </Profile>

      <footer>
        <EditButton>
          <PencilLine size={18} />
          Editar seu perfil
        </EditButton>
      </footer>
    </Container>
  );
}