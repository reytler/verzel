import { useCreateCar } from '@/src/Context/Carros';
import { TCarro } from '@/src/Types';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Button } from '../Button';
import { Input } from '../Input';
import { Title } from '../Title';
import { Wrapped } from './styles';

export default function FrmCar(){
    const {handleCreateCar} = useCreateCar();
    const INITIAL_STATE:TCarro = {
        Nome:'',
        Marca:'',
        Modelo:'',
        Valor:0,
        Foto:''
    }
    const [carro, setCarro] = useState<TCarro>(INITIAL_STATE);

    function handleSubmit(e:any){
        e.preventDefault();
        handleCreateCar(carro);
    }

    function handleValues(key:string,value: any){
        setCarro(prev=>({
            ...prev,
            [key]:value,
        }))
    }

    return(
        <Wrapped>
           <Title>Cadastrar Veículos</Title>     
            <Form onSubmit={e=>handleSubmit(e)}>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Nome" 
                        required
                        onBlur={e=>handleValues('Nome',e.target.value)}
                        className="cadcar"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Marca" 
                        required
                        onBlur={e=>handleValues('Marca',e.target.value)}
                        className="cadcar"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Modelo" 
                        required
                        onBlur={e=>handleValues('Modelo',e.target.value)}
                        className="cadcar"
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Valor" 
                        required
                        onBlur={e=>handleValues('Valor',e.target.value)}
                        className="cadcar"
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Foto" 
                        required
                        onBlur={e=>handleValues('Foto',e.target.value)}
                        className="cadcar"
                        onKeyDown={e=>{if(e.keyCode == 13){e.preventDefault()}}}
                    />                
                </FormGroup>
                <FormGroup style={{display:'flex', justifyContent:'flex-end'}}>                
                    <Button type="submit" value="Cadastrar"/>
                </FormGroup>
            </Form>        
        </Wrapped>
    )
}