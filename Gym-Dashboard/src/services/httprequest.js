import axios from 'axios';

class BaseService {
    constructor(controller) {
        if (controller) {
            this.baseUrl = `${window.apiUrl}/${controller}`;
        } else {
            this.baseUrl = `${window.apiUrl}`;
        }
    }

    get(route, config) {
        return axios.get(`${this.baseUrl}/${route}`, config);
    }

    delete(route, config) {
        return axios.delete(`${this.baseUrl}/${route}`, config);
    }

    post(route, input, config) {
        return axios.post(`${this.baseUrl}/${route}`, input, config);
    }

    put(route, input, config) {
        return axios.put(`${this.baseUrl}/${route}`, input, config);
    }

    patch(route, input, config) {
        return axios.patch(`${this.baseUrl}/${route}`, input, config);
    }
}

export default BaseService;
