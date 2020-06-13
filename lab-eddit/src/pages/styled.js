import styled from "styled-components";


//PAGE LOGIN
export const ContainerPageLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45%;
`;
export const ImgLogo = styled.img`
  width: 60%;
  margin-bottom: 10%;
`;
export const FormLogin = styled.form`
  height: 30%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
`;
//PAGE CADASTRO
export const ContainerCadastro = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 45%;
`;
export const FormCadastro = styled.form`
height: 30%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
background: white;
`;
//PAGE POST
export const ContainerPosts = styled.div`
  width: 87vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  padding: 20px;
`;
export const CardPost = styled.div`
  height: 25%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;
export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  color: white;
  text-transform: capitalize;
`;
export const TituloPost = styled.h4`
  margin: 2px;
`;
export const TextPost = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const BottomPost = styled.div`
  width: 100%;
  height: 20%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: space-between;
`;
export const Votos = styled.div``;
export const Comentarios = styled.div``;
export const InputComentarios = styled.div`
  height: 20%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 15px;
`;
export const CardComentarios = styled.div`
  height: 25%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

//PAGE LIST POST
export const ContainerPageListPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1%;
`;
export const ContainerPost = styled.div`
    width: 90%;
    border: 1px solid black;
    display:flex;
    flex-direction: column;
`;
export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const CaixaPost = styled.div`
  border: 1px solid black;
  width: 90%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
`;
export const ContainerTextPost = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;
export const ContainerReaction = styled.div`
  display: flex;
`;

