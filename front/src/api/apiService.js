import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true
})

export default class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    // static registrarToken(token){
    //     if(token) {
    //         httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //     }
    // }

    post(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, objeto);
    }

    get(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl, objeto);
    }

    delete(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl, objeto);
    }

}

