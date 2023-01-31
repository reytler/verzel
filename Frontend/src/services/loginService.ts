import { api } from "./api";
import { coRotaCriarUsuario, coRotaLogin } from "../functions/constantes";
import { UserDTO } from "../Types";

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

export async function createUser(user:UserDTO){
    try {
        const res = await api.post(coRotaCriarUsuario,user)
        return res
    } catch (error) {
        console.log('Erro ao criar o usuário: ', error);
    }
}