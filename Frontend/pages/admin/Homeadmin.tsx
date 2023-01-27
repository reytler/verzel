import Layoutadmin from "@/src/Components/Layouts/Admin";
import { Title } from "@/src/Components/Title";
import { getMycars } from "@/src/services/carrosService";
import React, { useEffect } from "react";

export default function Homeadmin(){
    useEffect(()=>{
        getMycars();
    },[])

    return(
        <Layoutadmin>
            <Title>Meus Veículos</Title>       
        </Layoutadmin>
    )
}