import {VerificarToken} from "@/src/functions/verificarToken";
import { useEffect } from "react";
import Menu from "../Navbar";

export default function Layoutadmin({children}:any){
    useEffect(()=>{
        VerificarToken();
    },[])
    return(
        <>
            <Menu/>
            {children}
        </>
    )
}