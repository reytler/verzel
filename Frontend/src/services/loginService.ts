import { api } from "./api";
import { coRotaCriarUsuario, coRotaLogin } from "../functions/constantes";
import { UserDTO } from "../Types";

export async function Login(user:string , pass: string){
    const res = await api.post(coRotaLogin,{
        Usuario: user,
        Senha: pass
    })
    return res    
}

export async function createUser(user:UserDTO){
    const res = await api.post(coRotaCriarUsuario,user)
    return res
}