import * as request from '../services/requester'

const baseUrl = 'http://localhost:3030/ads'

export const getAll = async () => {
    const result = await request.get(`${baseUrl}/catalog`);
    return result;
}

export const getOne = async (id) => {
    const result = await request.get(`${baseUrl}/catalog/${id}`);
    return result;
}

export const getAllUserAds = async (id) => {
    const result = await request.get(`${baseUrl}/catalog?where=_ownerId%3D%22${id}%22`);
    return result;
}
export const create = async (data, token) => {
    console.log('CREATE')
    const result = await request.post(`${baseUrl}/catalog`, data);
    const tok = localStorage.getItem('auth');
    console.log(tok)
    return result;
}