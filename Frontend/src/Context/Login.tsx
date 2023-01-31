import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useContext, useState } from 'react';
import { createUser, Login } from '../services/loginService';
import { TUser, UserDTO } from '../Types';

type TLoginContextType = {
    handleLogin: (user: string, pass:string)=>{}
    getUser: ()=>TUser
    isLoged: ()=>boolean
    logout: ()=>void
    handleCreateuser: (user:UserDTO)=>void
}

export const LoginContext = createContext({} as TLoginContextType);

async function handleLogin(user: string, pass: string){
    try {
        const res = await Login(user,pass);
        if(res?.status == 200){
            const {user,token} = res.data

            setCookie(null,'Verzel.Token',token,{
                maxAge: 8 * 60 * 60,
                path: '/'
            })

            setCookie(null,'Verzel.User',JSON.stringify(user),{
                maxAge: 8 * 60 * 60,
                path: '/'
            })

            Router.push('/admin/Homeadmin');

        }
    } catch (error) {
        
    }
}

async function handleCreateuser(user:UserDTO){
    try {
        const res = await createUser(user)
        if(res?.status == 201){
            Router.push('/login');
        }
    } catch (error) {
        console.log('Erro ao criar usuário: ',error)
    }
}

function getUser(){
    const { 'Verzel.User': user } = parseCookies();

    if(user){
        let dadosuser = JSON.parse(user)
        return dadosuser
    }
}

function isLoged(){
    const { 'Verzel.Token': token } = parseCookies();
    if(token){
        return true
    }

    return false
}

function logout(){
    destroyCookie(undefined, 'Verzel.User', { path: '/' });
    destroyCookie(undefined, 'Verzel.Token', { path: '/' });
}

export function LoginProvider({children}:any){

    return(
        <LoginContext.Provider
            value={{
                handleLogin,
                handleCreateuser,
                getUser,
                isLoged,
                logout
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin(){
    const context = useContext(LoginContext);
    const {handleLogin, handleCreateuser} = context;
    return {handleLogin, handleCreateuser}
}

export function useUser(){
    const context = useContext(LoginContext);
    const {getUser, isLoged, logout} = context;
    return {getUser,isLoged, logout}
}