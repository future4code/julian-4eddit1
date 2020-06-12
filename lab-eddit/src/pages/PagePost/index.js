import React from "react";
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useRequestDataGetDetail, useDataComments } from "../../CustomHooks/useRequestDataGet";
import CardComentario from './CardComentario';
import { ContainerPosts, CardPost, Title, TituloPost, TextPost, BottomPost, Votos, InputComentarios, Comentarios} from '../styled';

const PagePost = () => {
  const pathParams = useParams();
  const post = useRequestDataGetDetail(
    `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}`,
    []
  );
  const comments = useDataComments(
    `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}`,
    []
  );

  return (
    <ContainerPosts>
      <CardPost>
        <Title>
          <p>{post.username}</p>
        </Title>
        <TextPost>
            <TituloPost>{post.title}</TituloPost>
            <p>{post.text}</p>
        </TextPost>
        <BottomPost>
          <Votos>
            <UpIcon />
            {post.votesCount}
            <DownIcon />
          </Votos>
          <Comentarios>{post.commentsCount} Comentários</Comentarios>
        </BottomPost>
      </CardPost>
      <InputComentarios>
        <TextField
          multiline
          rowsMax={3}
          placeholder="Escreva aqui seu Comentário"
        >
          Escreva seu comentario
        </TextField>
        <Button variant="contained">Comentar</Button>
      </InputComentarios>
        {comments.map((comentario) =>{
            return(
                <CardComentario
                    key={comentario.id}
                    username={comentario.username}
                    text={comentario.text}
                    votesCount={comentario.votesCount}
                />
            )
        })}
    </ContainerPosts>
  );
};

export default PagePost;
