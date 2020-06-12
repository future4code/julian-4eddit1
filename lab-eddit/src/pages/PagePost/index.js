import React from "react";
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { useParams } from "react-router-dom";
import { useRequestDataGetDetail, useDataComments } from "../../CustomHooks/useRequestDataGet";
import CardComentario from './CardComentario';
import InputComentar from "./InputComentar";
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
      <InputComentar />
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
