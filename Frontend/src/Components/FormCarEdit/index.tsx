import { useUpdateCar } from '@/src/Context/Carros';
import { CarroDTO } from '@/src/Types';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Button } from '../Button';
import { Input } from '../Input';
import { Title } from '../Title';
import { Wrapped } from './styles';

export default function FrmCar({car}:any){
    const {handleUpdateCar} = useUpdateCar();
    
    const [carro, setCarro] = useState<CarroDTO>(car);

    function handleSubmit(e:any){
        e.preventDefault();
        handleUpdateCar(carro);
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

    useEffect(()=>{
        console.log('CARRO: ',carro)
    },[carro])
    return(
        <Wrapped>
                       
            <Title>Editar Veículo: {carro.nome}</Title>     
            <Form onSubmit={e=>handleSubmit(e)}>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Nome" 
                        required
                        onBlur={e=>handleValues('nome',e.target.value)}
                        className="cadcar"
                        defaultValue={carro.nome}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Marca" 
                        required
                        onBlur={e=>handleValues('marca',e.target.value)}
                        className="cadcar"
                        defaultValue={carro.marca}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Modelo" 
                        required
                        onBlur={e=>handleValues('modelo',e.target.value)}
                        className="cadcar"
                        defaultValue={carro.modelo}
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Ano" 
                        required
                        onBlur={e=>handleValues('ano',e.target.value)}
                        className="cadcar"
                        defaultValue={carro.ano}
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Km" 
                        required
                        onBlur={e=>handleValues('km',e.target.value)}
                        className="cadcar"
                        defaultValue={carro.km}
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Valor" 
                        required
                        onBlur={e=>handleValues('valor',e.target.value)}
                        className="cadcar"
                        defaultValue={carro.valor}
                    />                
                </FormGroup>
                <FormGroup>
                    <Input
                        type="file" 
                        placeholder="Foto" 
                        // required
                        onChange={e=>handleValues('foto',e)}
                        className="cadcar"
                        onKeyDown={e=>{if(e.keyCode == 13){e.preventDefault()}}}
                    />                
                </FormGroup>
                <FormGroup style={{display:'flex', justifyContent:'flex-end'}}>                
                    <Button type="submit" value="Alterar dados"/>
                </FormGroup>
            </Form> 
        </Wrapped>
    )
}