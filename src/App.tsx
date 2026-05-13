import { useState } from 'react'
import { Container, Wrapper } from './styles';
import { Sidebar } from './components/sidebar/sidebar';
import { Post } from './components/post/post';


export interface Messagetype {
  id: number;
  text: string;
  hour: string;
}

function App() {
  const [messages, setMessages] = useState<Messagetype[]>([])

  const handleDelete = (id: number) => {
    setMessages(prev => prev.filter(p => p.id !== id))
  }

  const handleAddMessage = (text: string) => {
    setMessages(prev => [
      ...prev, {
        id: Date.now(),
        text,
        hour: new Date().toLocaleDateString("pt-BR", {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      }
    ])
  }
  return (
    <Container>
      <Wrapper>
        <Sidebar/>

        <main>
          <Post
          onSubmit={handleAddMessage}
          onDelete={handleDelete}
          comments={messages}
          />
        </main>
      </Wrapper>
    </Container>
  )
}

export default App
