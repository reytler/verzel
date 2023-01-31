import { useCreateCar } from '@/src/Context/Carros';
import { CarroDTO } from '@/src/Types';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Button } from '../Button';
import Erro from '../Erro';
import { Input } from '../Input';
import { Title } from '../Title';
import { Wrapped } from './styles';

export default function FrmCar(){
    const {handleCreateCar} = useCreateCar();
    const INITIAL_STATE:CarroDTO = {
        nome:'',
        marca:'',
        modelo:'',
        ano:0,
        km:0,
        valor:0,
        foto:'',
    }
    const [carro, setCarro] = useState<CarroDTO>(INITIAL_STATE);

    function handleSubmit(e:any){
        e.preventDefault();
        handleCreateCar(carro);
    }

    function handleValues(key:string,value: any){
        if(key=='foto'){
            let reader = new FileReader();
            let file = value.target.files[0];
            reader.readAsDataURL(file);
            reader.onloadend = ()=>{
                var base = reader.result?.toString()
                var string = base?.replace(/^data:image\/[a-z]+;base64,/,"");
                //@ts-ignore
                setCarro(prev=>({
                    ...prev,
                    [key]:string,
                }))
            }
            return
        }
        setCarro(prev=>({
            ...prev,
            [key]:value,
        }))        
    }

    return(
        <Wrapped>
           <Title>Cadastrar Veículos</Title>   
           <Erro/>  
            <Form onSubmit={e=>handleSubmit(e)}>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Nome" 
                        required
                        onBlur={e=>handleValues('nome',e.target.value)}
                        className="cadcar"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Marca" 
                        required
                        onBlur={e=>handleValues('marca',e.target.value)}
                        className="cadcar"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Modelo" 
                        required
                        onBlur={e=>handleValues('modelo',e.target.value)}
                        className="cadcar"
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Ano Fabricação (Ex.: 2012)" 
                        required
                        onBlur={e=>handleValues('ano',e.target.value)}
                        className="cadcar"
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Km rodados (Sem ponto e vírgula)" 
                        required
                        onBlur={e=>handleValues('km',e.target.value)}
                        className="cadcar"
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Valor (Sem ponto e vírgula)" 
                        required
                        onBlur={e=>handleValues('valor',e.target.value)}
                        className="cadcar"
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="file" 
                        placeholder="Foto" 
                        required
                        onChange={e=>handleValues('foto',e)}
                        className="cadcar"
                        onKeyDown={e=>{if(e.keyCode == 13){e.preventDefault()}}}
                        accept="image/png, image/jpeg"
                    />                
                </FormGroup>
                <FormGroup style={{display:'flex', justifyContent:'flex-end'}}>                
                    <Button type="submit" value="Cadastrar"/>
                </FormGroup>
            </Form>        
        </Wrapped>
    )
}