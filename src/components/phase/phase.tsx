import { Container } from "./styled";

type Phrases = {
  title: string;
  description: string;
  link_one: string;
  link_two: string;
}

interface PhraseProps {
  phrases: Phrases
}

export function Phrase ({phrases}:PhraseProps) {
  return (
    <Container>
      <h4>{phrases.title}</h4>
      <p>{phrases.description}</p>

      <a href=""> {phrases.link_one}</a>
      <a href="">{phrases.link_two}</a>
    </Container>
  )
}