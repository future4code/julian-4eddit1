import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContainerPageLogin = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const PageLogin = () =>{
    return (
    <ContainerPageLogin>
        <TextField type="email"label="Email"/>
        <TextField type="password"label="Password"/>
        <Button variant="outlined">Entrar</Button>
        <Button variant="outlined">Cadastrar</Button>
    </ContainerPageLogin>
    )
}

export default PageLogin