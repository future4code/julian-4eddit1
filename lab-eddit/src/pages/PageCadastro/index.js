import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from '../../imagens/labeddit2.png';
import { ContainerCadastro, ImgLogo, FormCadastro} from '../styled';

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
  const enviarEnter = (ev) => {
    if (ev.key === "Enter"){
      criarLogin();
    }
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
        <TextField label="Senha" type="password" onChange={onChangeSenha} onKeyDown={enviarEnter}/>
        <Button variant="outlined" onClick={criarLogin}>
          Cadastrar
        </Button>
      </FormCadastro>
    </ContainerCadastro>
  );
};

export default PageCadastro;
