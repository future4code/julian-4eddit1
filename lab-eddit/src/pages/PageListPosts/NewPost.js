import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'

const ContainerPost = styled.div`
    width: 90%;
    border: 1px solid black;
    display:flex;
    flex-direction: column;
`;

const NewPost = ()=>{
    const history =  useHistory()

    return(
        <ContainerPost>
        <TextField 
            multiline
            rows={4}
            label="Escreva algo!!"
        />
        <Button>Postar</Button>
    </ContainerPost>
    )
}

export default NewPost