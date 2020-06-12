import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from '../../Imagens/labeddit2.png';

const ContainerCadastro = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45%;
`;
const ImgLogo = styled.img`
  width: 60%;
  margin-bottom: 10%;
`;
const FormCadastro = styled.form`
  height: 30%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
`;
const PageCadastro = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");
  const [user, setUser] = useState({});

  const onChangeUserName = (ev) => {
    setUserName(ev.target.value);
  };
  const onChangeEmail = (ev) => {
    setEmailValue(ev.target.value);
  };
  const onChangeSenha = (ev) => {
    setSenhaValue(ev.target.value);
  };
  const criarLogin = () => {
    history.push("/feed");
  };

  return (
    <ContainerCadastro>
      <ImgLogo src={logo}/>
      <FormCadastro>
        <TextField
          label="Nome de usuário"
          type="text"
          onChange={onChangeUserName}
        />
        <TextField label="Email" type="email" onChange={onChangeEmail} />
        <TextField label="Senha" type="password" onChange={onChangeSenha} />
        <Button variant="outlined" onClick={criarLogin}>
          Cadastrar
        </Button>
      </FormCadastro>
    </ContainerCadastro>
  );
};

export default PageCadastro;
