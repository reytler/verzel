import { api } from "./api";
import { coRotaLogin } from "../functions/constantes";

export async function Login(user:string , pass: string){
    try {
        const res = await api.post(coRotaLogin,{
            Usuario: user,
            Senha: pass
        })
        return res
    } catch (error) {
        console.log('Erro ao realizar login: ', error);
    }
}