import * as request from './requester';

const baseUrl = 'http://localhost:3030/auth';

export const register = async (data) => {
    console.log(data)
    const result = await request.post(`${baseUrl}/register`, data);
    console.log(result);
    return result;
}

export const login = async (data) => {
    const result = await request.post(`${baseUrl}/login`, data);
    return result;
}