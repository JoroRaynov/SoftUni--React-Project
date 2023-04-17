import * as request from './requester';

const baseUrl = 'http://localhost:3030/auth';

export const register = async (data) => {
    const result = await request.post(`${baseUrl}/register`, data);
    return result;
}

export const login = async (data) => {
    const result = await request.post(`${baseUrl}/login`, data);
    return result;
}

// export const getUserById = async(id) => {
//     const result = await request.get(`${baseUrl}/userProfile`, id);
//     return result;

// }