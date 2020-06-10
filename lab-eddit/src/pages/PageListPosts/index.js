import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Post from '../PageListPosts/post'
import NewPost from '../PageListPosts/NewPost'
import axios from 'axios'

const ContainerPageListPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1%;
`

const PageListPosts = ()=>{
    const token = localStorage.getItem('token')
    const [posts, setPosts] = useState([])
    const history = useHistory()
    
    useEffect(()=>{
        if (token === null) {
            history.push("/");
        }

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then((response)=>{
            console.log(response.data.posts)
            setPosts(response.data.posts)
        })

    },[])

    return (
    <ContainerPageListPosts>
        <NewPost/>
        {posts.map((post)=>{
            return(
                <div>
                    <p>{post.name}</p>
                    <Post/>
                </div>
                
            )
        })}
        
    </ContainerPageListPosts>
    )
}

export default PageListPosts