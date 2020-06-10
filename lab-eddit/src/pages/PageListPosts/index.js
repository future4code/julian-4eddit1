import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Post from '../PageListPosts/post'
import NewPost from '../PageListPosts/NewPost'

const ContainerPageListPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1%;
`

const PageListPosts = ()=>{
    return (
    <ContainerPageListPosts>
        <NewPost/>
        <Post/>
        <Post/>
        <Post/>
    </ContainerPageListPosts>
    )
}

export default PageListPosts