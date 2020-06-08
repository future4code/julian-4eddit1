import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Post from '../PageListPosts/post'

const ContainerPageListPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1%;
`
const ContainerPost = styled.div`
    width: 90%;
    border: 1px solid black;
    display:flex;
    flex-direction: column;
`

const PageListPosts = ()=>{
    return (
    <ContainerPageListPosts>
        <ContainerPost>
            <TextField 
                multiline
                rows={4}
                label="Escreva algo!!"
            />
            <Button>Postar</Button>
        </ContainerPost>
        <Post/>
        <Post/>
        <Post/>
    </ContainerPageListPosts>
    )
}

export default PageListPosts