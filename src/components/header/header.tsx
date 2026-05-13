import { Container, Image, Infos, Profile } from "./styled";

type HeaderProps = {
  name: string;
  role: string;
  hour: string;
}

interface User {
  user: HeaderProps;
}

export function Header({user}: User) {
  return(
    <Container>
      <Profile>
        <Image>
            <img src="https://avatars.githubusercontent.com/eggplanetio" alt="Avatar" />
        </Image>
       
        <Infos>
          <strong>{user.name}</strong>
          <span>{user.role}</span>
        </Infos>
      </Profile>
      <p>{user.hour}</p>
    </Container>
  )
}