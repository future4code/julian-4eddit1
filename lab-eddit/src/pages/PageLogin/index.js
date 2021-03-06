import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from '../../imagens/labeddit2.png';
import { ContainerPageLogin, ImgLogo, FormLogin} from '../styled';

const PageLogin = () => {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");
  const [user, setUser] = useState([]);

  const onChangeEmail = (ev) => {
    setEmailValue(ev.target.value);
  };
  const onChangeSenha = (ev) => {
    setSenhaValue(ev.target.value);
  };

  const fazerLogin = async () => {
    const body = {
      email: emailValue,
      password: senhaValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
        body
      )
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        setUser(resposta.data.user);
        history.push("/feed");
      })
      .catch((error) => {
        alert("Você não possui login com a gente :(");
      });
  };

  const fazerCadastro = () => {
    history.push("/cadaster");
  };
  const enviarEnter = (ev) => {
    if (ev.key === "Enter"){
      fazerLogin();
    }
  };

  return (
    <ContainerPageLogin>
      <ImgLogo src={logo}/>
      <FormLogin>
        <TextField type="email" label="Email" onChange={onChangeEmail}/>
        <TextField type="password" label="Password" onChange={onChangeSenha} onKeyDown={enviarEnter}/>
        <Button variant="outlined" onClick={fazerLogin}>Entrar</Button>
        <Button variant="outlined" onClick={fazerCadastro}>
          Cadastrar
        </Button>
      </FormLogin>
    </ContainerPageLogin>
  );
};

export default PageLogin;
