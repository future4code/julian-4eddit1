import React, { useState } from 'react';
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { CardComentarios, Title, TextPost, BottomPost, Votos} from '../styled';

const CardComentario = (props) =>{
    const [ count, setCount] = useState(props.userVoteDirection);
    console.log('count', count)

    return(
    <CardComentarios>
        <Title>
            <p>{props.username}</p>
        </Title>
        <TextPost>{props.text}</TextPost>
        <BottomPost>
        <Votos>
            <UpIcon onClick={() => setCount(count + 1)}/>{count <= 0 ? 0 : count}<DownIcon onClick={() => setCount(count - 1)}/>
        </Votos>
        </BottomPost>
    </CardComentarios>
)}

export default CardComentario