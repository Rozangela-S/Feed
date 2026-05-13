import { useState } from "react";
import { Container } from "./styled";

interface Feed {
  onSubmit: (text: string) => void
}

export function FeedBack({onSubmit}: Feed) {
  const [text, setTex] = useState('')

  const handleSubmit = () => {
    if(!text) return 
    onSubmit(text)
    setTex('')
  } 

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  } 
  return (
    <Container>
      <p>Deixe um feedback</p>

      <textarea
        placeholder="Deixe um comentário"
        value={text}
        onChange={(e) => setTex(e.target.value)}
        onKeyDown={handleKeyDown}
       
      />
      <button onClick={handleSubmit}>Publicar</button>
       
    </Container>
  )
}
