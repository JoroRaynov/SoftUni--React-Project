import * as request from '../services/requester'

const baseUrl = 'http://localhost:3030/ads'

export const getAll = async () => {
    const result = await request.get(`${baseUrl}/catalog`);
    return result;
}