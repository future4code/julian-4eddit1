import axios from 'axios';

export const newPost = (url, body) => {
    const token = localStorage.getItem('token')
    axios.post(url, body, {
        headers: {
            Authorization: token
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
};
