import React from 'react';
import styled from 'styled-components';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const ContainerPost = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const CardPost = styled.div`
    height: 20%;
    width: 60%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    width: 100%;
    height: 25%;
    border: 1px solid red;
`;
const TextPost = styled.div`
    width: 100%;
    height: 55%;
    border: 1px solid yellow;
`;
const BottomPost = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    border: 1px solid green;
`;
const Votos = styled.div`
`;
const Comentarios = styled.div`

`;
const CardComentarios = styled.div`
    height: 20%;
    width: 60%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PagePost = () => {
  return (
      <ContainerPost>
        <CardPost>
        <Title><p>Nome de usuário</p></Title>
        <TextPost>texto do post</TextPost>
        <BottomPost>
            <Votos>
                <ArrowUpwardOutlinedIcon/>0<ArrowDownwardIcon/>
            </Votos>
            <Comentarios>
                0 Comentários
            </Comentarios>
        </BottomPost>
        </CardPost>
        <CardComentarios>

        </CardComentarios>
      </ContainerPost>

  );
}

export default PagePost;