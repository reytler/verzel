import Cardcar from "@/src/Components/Cardcar";
import Layoutadmin from "@/src/Components/Layouts/Admin";
import { Title } from "@/src/Components/Title";
import FrmCarEdit from "@/src/Components/FormCarEdit";
import { useGetmycars } from "@/src/Context/Carros";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { CarroDTO } from "@/src/Types";

export default function Homeadmin(){

    const {handleGetmycars,mycars} = useGetmycars()
    const [edit,setEdit] = useState(false)
    const [carEdit,setCarEdit] = useState<CarroDTO>()
    
    function editCar(carro:CarroDTO){
        setCarEdit(carro)
        setEdit(true)
    }

    useEffect(()=>{
        handleGetmycars();
    },[])

    useEffect(()=>{
        setEdit(false);
    },[mycars])

    return(
        <Layoutadmin>
            {edit?(''):(
                <Title>Meus Veículos</Title>
            )}
            <Container style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
                {edit?
                    (<FrmCarEdit car={carEdit}/>)
                :
                    mycars.length > 0?
                        mycars.map((carro)=>(<Cardcar key={carro.id} carro={carro} editCar={editCar}/>))
                    :('Você não tem carros cadastrados')
                }
            </Container>       
        </Layoutadmin>
    )
}