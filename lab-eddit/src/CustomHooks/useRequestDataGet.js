import {useState, useEffect} from 'react'
import axios from 'axios'

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
}