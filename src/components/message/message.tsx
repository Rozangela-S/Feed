import { Heart, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import {
  Avatar,
  Container,
  Content,
  LikeButton,
  MessageBox,
} from "./styled";

interface Props {
  id: number;
  text: string;
  hour: string;
  onDelete: (id: number) => void;
}

export function Message({ id, text, hour, onDelete }: Props) {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <Container>
      <Avatar>
        <img
          src="https://avatars.githubusercontent.com/gustavoguanabara"
          alt="Avatar"
        />
      </Avatar>

      <Content>
        <MessageBox>
          <header>
            <div>
              <strong>Gustavo Guanabara</strong>
              <time>{hour}</time>
            </div>

            <button onClick={handleDelete} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{text}</p>
        </MessageBox>

        <LikeButton onClick={handleCount}>
          <Heart size={20} />
          Aplaudir
          <span>{count}</span>
        </LikeButton>
      </Content>
    </Container>
  );
}