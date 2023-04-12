import * as request from './requester';

const baseUrl = 'http:"//localhost:3000/auth';

export const register =  (data) => {
    return request.post(`${baseUrl}/register`, data);

}