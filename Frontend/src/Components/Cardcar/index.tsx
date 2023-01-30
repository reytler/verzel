import { useDeleteCar } from "@/src/Context/Carros";
import { useUser } from "@/src/Context/Login";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Edit } from "../btnEdit";

export default function Cardcar({carro, editCar}: any){
    const {handleDeleteCar} = useDeleteCar()

    const [logado,setLogado] = useState(false);
    const {isLoged} = useUser();

    useEffect(()=>{
        setLogado(isLoged())
    },[])

    return(
        <>
        <Card style={{width:'19rem', marginBottom:'15px'}}>
            <Image 
                alt="Foto carro"
                src={`data:image/png;base64,${carro.foto}`}
                width={300}
                height={200}
                priority
                style={{width:'18.9rem', borderRadius:'5px 5px 1px 1px'}}
            />
            <CardBody>
                <CardTitle tag={"h5"}>
                    {carro.nome}
                </CardTitle>
                <CardSubtitle className="mb2 text-muted" tag={"h6"}>
                    {carro.modelo} - {'Ano: '+carro.ano} - {'km: '+carro.km.toLocaleString()}
                </CardSubtitle>
                <CardSubtitle className="mb2 text-muted" tag={"h6"}>
                    {'Marca: '+carro.marca}
                </CardSubtitle>
                <CardText>
                    {carro.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </CardText>
                {logado?(
                    <CardFooter>
                        <Edit onClick={()=>editCar(carro)}>Editar</Edit> - <Edit onClick={()=>handleDeleteCar(carro.id)}>Deletar</Edit>
                    </CardFooter>
                ):('')}
            </CardBody>
        </Card>
        </>
    )
}