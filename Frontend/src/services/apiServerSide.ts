import axios from 'axios';
import { parseCookies } from 'nookies';
import { coEnderecoApi } from '../functions/constantes';

export function getAPIClient(ctx?: any){
    const api = axios.create({
        baseURL: coEnderecoApi,
    });

    api.interceptors.request.use(config => {
        const { 'Verzel.Token': token } = parseCookies(ctx);
        const { 'Verzel.User': user } = parseCookies();
        var dados;
        if(user){
            dados = JSON.parse(user)
        }

        if (token) {
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            config.headers['Authorization'] = `Bearer ${token}`;
            api.defaults.headers['Iduser'] = dados.id;
            config.headers['Iduser'] = dados.id;
        }

        return config;
    });

    return api;
}