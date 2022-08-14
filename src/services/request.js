import axios from 'axios';

export const post = (url, data, headers) => {
    return new Promise((resolve, reject) => {
        const config = {
            method: 'post',
            url,
            headers: { 
                'Content-Type': 'application/json',
                ...headers
            },
            data : JSON.stringify({ ...data })
        };
        
        axios(config)
        .then(function (response) {
            return resolve(response.data);
        })
        .catch(function (error) {
            return reject(error);
        });
    });
}

export const get = (url, headers) => {
    return new Promise((resolve, reject) => {
        const config = {
            method: 'get',
            url,
            headers: { 
                'Content-Type': 'application/json',
                ...headers
            }
        };
        
        axios(config)
        .then(function (response) {
            return resolve(response.data);
        })
        .catch(function (error) {
            return reject(error);
        });
    });
}