import { useState } from 'react'
import { Header } from './components/header/header';
import { Frases } from './components/frases/frases/frases';
import { Phrases, users } from './mock/User';
import { FeedBack } from './components/feed/feedback';
import { Message } from './components/message/message';


interface Messagetype {
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
    <div>
      <Header user={users}/>
      <Frases phrases={Phrases} />
      <FeedBack onSubmit={handleAddMessage}/>
      {messages.map(mgs => (
        <Message key={mgs.id} id={mgs.id} text={mgs.text} onDelete={handleDelete} hour={mgs.hour} />
      ))}

     
    </div>
  )
}

export default App
