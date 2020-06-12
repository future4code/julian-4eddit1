import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const useRequestDataGet = (url, initialState) =>{
    const [data, setData] = useState(initialState)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get(url, {
            headers:{
                Authorization: token
            }
        }).then((response)=>{
            setData(response.data.posts)
        }).catch((error)=>{
            console.log(error)
        })
    },[url])

    return data
};

export const useRequestDataGetDetail = (url, initialState) =>{
    const [data, setData] = useState(initialState);
    const history = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token === null) {
            history.push("/");
        }
        axios.get(url, {
            headers:{
                Authorization: token
            }
        }).then((response)=>{
            console.log(response.data.post)
            setData(response.data.post)
        }).catch((error)=>{
            console.error(error)
        })
    },[url]);
    return data
}
export const useDataComments = (url, initialState) =>{
    const [data, setData] = useState(initialState);
    const history = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token === null) {
            history.push("/");
        }
        axios.get(url, {
            headers:{
                Authorization: token
            }
        }).then((response)=>{
            console.log(response.data.post.comments)
            setData(response.data.post.comments)
        }).catch((error)=>{
            console.error(error)
        })
    },[url]);
    return data
}