import { Container, Infos, Profile } from "./styled";

interface User {
  name: string;
  role: string;
  hour: string;
}

interface UserProps {
  user: User;
}

export function Header ({user}:UserProps){
  return (
    <Container>
      <Profile>
        <img src='' alt="avatar" />
        <Infos>
          <strong>{user.name}</strong>
          <span>{user.role}</span>
        </Infos>
      </Profile>
      <p>{user.hour}</p>
    </Container>
  )
}