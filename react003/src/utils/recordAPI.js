import axios from 'axios';
// const api = process.env.REACT_APP_RECORD_API_URL || 'https://5b05a3968be5840014ce463b.mockapi.io/api/v1/';
const api = 'https://5b05a3968be5840014ce463b.mockapi.io/api/v1/record';

export const getAll = () => {
    return axios.get(api)
}

export const addRecord = (body) => {
    return axios.post(api, body)
}

export const updataRecord = (id, body) => {
    return axios.put(`${api}/${id}`, body)
}

export const deleteRecord = (id) => {
    return axios.delete(`${api}/${id}`)
}
