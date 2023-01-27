import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useContext, useState } from 'react';
import { Login } from '../services/loginService';

type TLoginContextType = {
    handleLogin: (user: string, pass:string)=>{}
    getUser: ()=>{}
    isLoged: ()=>boolean
    logout: ()=>void
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
    const {handleLogin} = context;
    return {handleLogin}
}

export function useUser(){
    const context = useContext(LoginContext);
    const {getUser, isLoged, logout} = context;
    return {getUser,isLoged, logout}
}