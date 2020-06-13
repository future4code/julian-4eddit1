import React, { useState } from 'react';
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { CardComentarios, Title, TextPost, BottomPost, Votos } from '../styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CardComentario = (props) => {
    const [count, setCount] = useState(props.userVoteDirection);
    const pathParams = useParams();
    const token = localStorage.getItem('token');

    const direcaoVotos = () => {
        const body = {
            direction: count + 1
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}/comment/${props.commentId}/vote`, body, {
                headers: {
                    Authorization: token
                }
            }).then(resposta => {
                console.log(resposta.data);
            }).catch(error => {
                console.error(error);
            })
            
    };
        return (
            <CardComentarios>
                <Title>
                    <p>{props.username}</p>
                </Title>
                <TextPost>{props.text}</TextPost>
                <BottomPost>
                    <Votos>
                        <UpIcon onClick={direcaoVotos} />{props.votesCount}<DownIcon  />
                    </Votos>
                </BottomPost>
            </CardComentarios>
        )
    }

    export default CardComentario