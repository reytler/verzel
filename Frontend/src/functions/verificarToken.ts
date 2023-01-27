import Router from 'next/router';
import { parseCookies } from 'nookies';

export function VerificarToken() {
    const { 'Verzel.Token': token } = parseCookies();
    if(!token){
        Router.push('/login');
    }else{
        Router.push('/admin/Homeadmin')
    }
}

export function VerificarLogin() {
    const { 'Verzel.Token': token } = parseCookies();
    if(token){
        Router.push('/admin/Homeadmin')
    }
}
