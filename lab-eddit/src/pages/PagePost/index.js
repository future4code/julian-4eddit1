import React from 'react';
import styled from 'styled-components';
import UpIcon from '@material-ui/icons/ArrowUpwardOutlined';
import DownIcon from '@material-ui/icons/ArrowDownward';
import { TextField, Button } from '@material-ui/core';

const ContainerPost = styled.div`
    height: 94vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    padding: 20px;
`;
const CardPost = styled.div`
    height: 20%;
    width: 65%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
`;
const Title = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextPost = styled.div`
    width: 100%;
    height: 55%;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BottomPost = styled.div`
    width: 100%;
    height: 20%;
    border-top: 1px solid black;
    display: flex;
    flex-direction: rows;
    align-items: center;
    justify-content: space-between;
`;
const Votos = styled.div`
`;
const Comentarios = styled.div`

`;
const CardEscreverComentarios = styled.div`
    height: 15%;
    width: 65%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 15px;
`;
const CardComentarios = styled.div`
    height: 15%;
    width: 65%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
`;
const PagePost = () => {
  return (
      <ContainerPost>
        <CardPost>
        <Title><p>Nome de usuário</p></Title>
        <TextPost>"Texto do post"</TextPost>
        <BottomPost>
            <Votos>
                <UpIcon/>0<DownIcon/>
            </Votos>
            <Comentarios>
                0 Comentários
            </Comentarios>
        </BottomPost>
        </CardPost>
        <CardEscreverComentarios>
            <TextField multiline rowsMax={3} placeholder="Escreva aqui seu Comentário">Escreva seu comentario</TextField>
            <Button variant="contained" >Comentar</Button>
        </CardEscreverComentarios>
        <CardComentarios>
            <Title><p>Nome de usuário</p></Title>
            <TextPost>"Comentário do post"</TextPost>
            <BottomPost>
                <Votos>
                    <UpIcon/>0<DownIcon/>
                </Votos>
            </BottomPost>
        </CardComentarios>
        <CardComentarios>
            <Title><p>Nome de usuário</p></Title>
            <TextPost>"Comentário do post"</TextPost>
            <BottomPost>
                <Votos>
                    <UpIcon/>0<DownIcon/>
                </Votos>
            </BottomPost>
        </CardComentarios>
      </ContainerPost>

  );
}

export default PagePost;