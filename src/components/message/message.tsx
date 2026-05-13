import { Heart, Trash } from "@phosphor-icons/react"
import { Container, ContainerButton, Content, ContentHeader, HeaderProfile, Image } from "./styled"
import { useState } from "react"

interface Props {
  id: number
  text: string
  hour: string
  onDelete: (id: number) => void
}

export function Message ({id, text, hour, onDelete}:Props) {
  const [count, setCout] = useState(0)

  const handleCount = () => {
    setCout(prev => prev + 1 )
  }
  const handleDelete = () =>{
    onDelete(id)
  } 

  return (
    <Container>
      <div>
         <Image>
            <img src="https://avatars.githubusercontent.com/gustavoguanabara" alt="Avatar" />
          </Image>
          <Content>
            <ContentHeader>
              <HeaderProfile>
                <div>
                  <strong>Gustavo</strong>
                  <time>{hour}</time>
                </div>
                <button onClick={handleDelete} >
                  <Trash size={20}/>
                </button>
              </HeaderProfile>
              <p>{text}</p>
            </ContentHeader>
          </Content>
      </div>
    
       <ContainerButton>
          <button onClick={handleCount}>
            <Heart/>
            <span>{count}</span>
          </button>
          
        </ContainerButton>
    </Container>
  )
}