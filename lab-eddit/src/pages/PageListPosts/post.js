import React from 'react';
import styled from 'styled-components';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';

const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ContainerPost = styled.div`
  border: 1px solid black;
  width: 90%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
`;
const ContainerTextPost = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;
const ContainerReaction = styled.div`
  display: flex;
`;

const Post = (props)=>{

    const history = useHistory()

    const handlePagePost = ()=>{
        history.push(`${props.idPost}`)
    }
    
    return(
        <ContainerPost>
            <h5>{props.nomeUser}</h5>
            <ContainerTextPost onClick={handlePagePost}>
                <h4>{props.titlePost}</h4>
                <p>{props.textPost}</p>
            </ContainerTextPost>
            <ContainerFooter>
                <ContainerReaction>
                    <IconButton>
                        <ArrowUpwardOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <p>{props.votesCount}</p>
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