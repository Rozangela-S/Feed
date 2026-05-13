import { Container } from "./styled";

type FrasesProps =  {
  title: string;
  description: string;
  link1: string
  link2: string;
}

interface Phrases {
  phrases: FrasesProps
}
export function Frases ({phrases}: Phrases){
  return (
    <Container>
      <p>{phrases.title}</p>
      <p>{phrases.description}</p>

      <a href=""> {phrases.link1}</a>
      <a href="">{phrases.link2}</a>
    </Container>
  )
}