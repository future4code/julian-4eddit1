import React, { useState, useEffect } from "react";
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { useParams } from "react-router-dom";
import { useRequestDataGetDetail, useDataComments } from "../../CustomHooks/useRequestDataGet";
import CardComentario from './CardComentario';
import InputComentar from './InputComentar';
import { ContainerPosts, CardPost, Title, TituloPost, TextPost, BottomPost, Votos, Comentarios } from '../styled';
import { comentar } from '../../CustomHooks/useRequestDataPost';


const PagePost = () => {
  const pathParams = useParams();
  const [texto, setTexto] = useState('');

  const onChangeTexto = (ev) => {
    setTexto(ev.target.value);
  };

  const post = useRequestDataGetDetail(
    `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}`,
    []
  );
  const comments = useDataComments(
    `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}`,
    []
  );
  const enviarComentario = () => {
    const body = {
      text: texto
    };
    comentar(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}/comment`, body);
    setTexto('');
  };

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
      <InputComentar
        onChange={onChangeTexto}
        onClick={enviarComentario}
      />
      {comments.map((comentario) => {
        return (
          <CardComentario
            commentId={comentario.id}
            key={comentario.id}
            username={comentario.username}
            text={comentario.text}
            votesCount={comentario.votesCount}
            userVoteDirection={comentario.userVoteDirection}
          />
        )
      })}
    </ContainerPosts>
  );
};

export default PagePost;
