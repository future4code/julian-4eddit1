import React, { useState, useEffect } from "react";
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { useParams } from "react-router-dom";
import CardComentario from './CardComentario';
import InputComentar from './InputComentar';
import { ContainerPosts, CardPost, Title, TituloPost, TextPost, BottomPost, Votos, Comentarios } from '../styled';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const PagePost = () => {
  const pathParams = useParams();
  const [texto, setTexto] = useState('');
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory();
  const token = localStorage.getItem('token');

  useEffect(()=>{
    if (token === null) {
        history.push("/");
    }
    atualizar()
}, [history])

  const onChangeTexto = (ev) => {
    setTexto(ev.target.value);
  };

  const atualizar = ()=>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}`, {
        headers:{
            Authorization: token
        }
    }).then((response)=>{
        console.log(response.data.post)
        setPost(response.data.post)
        setComments(response.data.post.comments)
    }).catch((error)=>{
        console.error(error)
    })
  }
  

  const enviarComentario = () => {
    const body = {
      text: texto
    };
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}/comment`, body, {
      headers: {
          Authorization: token
      }
    }).then(resposta => {
        console.log(resposta.data);
        atualizar()
    }).catch(error => {
        console.error(error);
    });
    
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
