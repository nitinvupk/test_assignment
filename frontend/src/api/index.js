import axios from 'axios';

const api = (method, url, data) => {
    return axios({ method: method, url: `http://localhost:8000${url}`, data: data})
        .then((res) => { return res; })
        .catch((err) => { throw err; });
}

export const getData = () => {
    return api('get', `/tasks`)
        .then((res) => { return res.data; })
        .catch((err) => { throw err; });
}

export const updateData = (data) => {
    return api('post', `/tasks`, data)
        .then((res) => {
            console.log('res: ', res);
            return res.data;
        })
        .catch((err) => {
            console.log('err: ', err);
            throw err;
        });
}