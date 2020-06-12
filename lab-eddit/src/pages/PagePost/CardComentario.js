import React from 'react';
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { CardComentarios, Title, TextPost, BottomPost, Votos} from '../styled';

const CardComentario = (props) =>{
    return(
    <CardComentarios>
        <Title>
            <p>{props.username}</p>
        </Title>
        <TextPost>{props.text}</TextPost>
        <BottomPost>
        <Votos>
            <UpIcon/>{props.votesCount}<DownIcon />
        </Votos>
        </BottomPost>
    </CardComentarios>
)}

export default CardComentario