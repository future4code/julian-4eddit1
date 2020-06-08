import React from 'react'
import styled from 'styled-components'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton'

const ContainerPost = styled.div`
    border: 1px solid black;
    width: 90%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerTextPost = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
`
const ContainerFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;

`
const ContainerReaction = styled.div`
 display: flex;
`

const Post = ()=>{
    return(
        <ContainerPost>
            <h5>nome do usuario</h5>
            <ContainerTextPost>
                <p>texto post</p>
            </ContainerTextPost>
            <ContainerFooter>
                <ContainerReaction>
                    <IconButton>
                        <ArrowUpwardOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <p>0</p>
                    <IconButton>
                        <ArrowDownwardIcon fontSize="inherit" />
                    </IconButton>
                </ContainerReaction>
                <p>0 comentarios</p>
            </ContainerFooter>
        </ContainerPost>
    )
}
export default Post