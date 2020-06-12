import React, {useState} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {newPost} from '../../CustomHooks/useRequestDataPost'

const ContainerPost = styled.div`
    width: 90%;
    border: 1px solid black;
    display:flex;
    flex-direction: column;
`

const NewPost = ()=>{
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onChangeTitle = (event)=>{
        setTitle(event.target.value)
    }
    const onChangeText = (event)=>{
        setText(event.target.value)
    }

    const enviar = ()=>{
        const body ={
            text: text,
            title: title
        }
        newPost('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body)
        setText('')
        setTitle('')
    }

    return(
        <ContainerPost>
        <TextField label="titulo" value={title} onChange={onChangeTitle}/>
        <TextField 
            multiline
            rows={4}
            label="Escreva algo!!"
            value={text}
            onChange={onChangeText}
        />
        <Button onClick={enviar}>Postar</Button>
    </ContainerPost>
    )
}

export default NewPost