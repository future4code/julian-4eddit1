import React from 'react';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components'

const Form = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PageCadastro = () => {
  return (
    <Form>
     <TextField label="Nome de usuário" type="text" />
     <TextField label="Email" type="email" />
     <TextField label="Senha" type="password" />
     <Button variant="contained">Cadastrar</Button>
    </Form>
  );
}

export default PageCadastro;
