import { parseCookies } from 'nookies';

export default function VerificarToken(ctx:any) {
    const { 'Verzel.Token': token } = parseCookies(ctx);
    if(!token){
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
            props: {},
        };
    }
}