import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import { InputComentarios } from '../styled';


const InputComentar = () => {
    const pathParams = useParams();    
    const [texto, setTexto] = useState();
    
    const onChangeTexto = (ev) =>{
        setTexto(ev.target.value);
    };

    const comentar = () =>{
        const body ={
            text: texto
        };
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}/comment`, body)
        .then(resposta => {
            console.log(resposta.data);
        }). catch(erro => {
            console.error(erro);
        });
    };
  return (
      <InputComentarios>
        <TextField
          multiline
          rowsMax={3}
          placeholder="Escreva aqui seu Comentário"
          onChange={onChangeTexto}
        >
          Escreva seu comentario
        </TextField>
        <Button variant="contained" onClick={comentar}>Comentar</Button>
      </InputComentarios>
  );
};

export default InputComentar;