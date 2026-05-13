import { Content, Tags } from "./styled";

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
    <Content>
      <p>{phrases.title}</p>
      <p>{phrases.description}</p>

      <Tags>
        <a href=""> {phrases.link1}</a>
        <a href="">{phrases.link2}</a>
      </Tags>

    </Content>
  )
}
