import { Messagetype } from "../../App";
import { Phrases, users } from "../../mock/User";
import { FeedBack } from "../feed/feedback";
import { Frases } from "../frases/frases/frases";
import { Header } from "../header/header";
import { Message } from "../message/message";
import {
  Container,
} from "./styled";

interface PostProps {
  comments: Messagetype[];
  onSubmit: (text: string) => void;
  onDelete: (id: number) => void;
}

export function Post({ comments, onSubmit, onDelete }: PostProps) {
  return (
    <Container>
      <Header
        user={users}
      />

      <Frases phrases={Phrases} />
       
      <FeedBack onSubmit={onSubmit} />

      <div>
        {comments.map((comment) => (
          <Message
            key={comment.id}
            id={comment.id}
            text={comment.text}
            hour={comment.hour}
            onDelete={onDelete}
          />
        ))}
      </div>
    </Container>
  );
}