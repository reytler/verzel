import axios from 'axios';
import { parseCookies } from 'nookies';
import { coEnderecoApi } from '../functions/constantes';

export function getAPIClient(ctx?: any){
    const api = axios.create({
        baseURL: coEnderecoApi,
    });

    api.interceptors.response.use(config => {
        const { 'Verzel.Token': token } = parseCookies(ctx);
        if (token) {
            api.defaults.headers['Authorization'] = token;
            config.headers['Authorization'] = token;
        }

        return config;
    });

    return api;
}