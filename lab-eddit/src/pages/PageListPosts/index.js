import React, {useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import Post from '../PageListPosts/post';
import NewPost from '../PageListPosts/NewPost';
import {useRequestDataGet} from '../../CustomHooks/useRequestDataGet';
import { ContainerPageListPosts } from '../styled';

const PageListPosts = ()=>{
    const posts = useRequestDataGet('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', [])
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token === null) {
            history.push("/");
        }
    },[]);
    
    
    return (
    <ContainerPageListPosts>
        <NewPost/>
        {posts.map((post)=>{
            return(
                <Post 
                key={post.id}
                idPost={post.id} 
                nomeUser={post.username} 
                textPost={post.text} 
                titlePost={post.title}
                votesCount={post.votesCount}
                commentsCount = {post.commentsCount}
                />
            )
        })}
    </ContainerPageListPosts>
    )
}

export default PageListPosts