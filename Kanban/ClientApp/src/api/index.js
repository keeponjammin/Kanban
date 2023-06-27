import axios from 'axios'

export const BASE_URL = 'https://localhost:44443/';

export const ENDPOINTS = {
    users: 'api/Users',
    boards: 'api/Boards',
    sections: 'api/Sections',
    cards: 'api/Cards',
};

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        postById: id => axios.post(url + id),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
};