import { useLogin } from '@/src/Context/Login';
import { UserDTO } from '@/src/Types';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Button } from '../Button';
import { Input } from '../Input';
import { Title } from '../Title';
import { Wrapped } from './styles';

export default function FrmUser(){
    const INITIAL_STATE:UserDTO = {
        Nome:'',
        Usuario:'',
        Senha:'',
        Role:'Admin'
    }

    const [user, setUser] = useState<UserDTO>(INITIAL_STATE);
    const [senhas,setSenhas] = useState<{}>()
    const {handleCreateuser} = useLogin()

    function handleSubmit(e:any){
        e.preventDefault();
        handleCreateuser(user);
    }

    function handleValues(key:string,value: any){
        setUser(prev=>({
            ...prev,
            [key]:value,
        })) 
    }

    function handleSenha(key:string,value:string){
        setSenhas(prev=>({
            ...prev,
            [key]:value
        }))
    }

    useEffect(()=>{

        if(senhas?.hasOwnProperty('senha1') && senhas?.hasOwnProperty('senha1')){
            //@ts-ignore
            if(senhas.senha1 === senhas.senha2){
                console.log('As senha conferem')
                //@ts-ignore
                handleValues('Senha',senhas.senha1)
            }else{
                console.log('As senhas não conferem')
            }
        }

        console.log('SENHAS:',senhas)
    },[senhas])

    useEffect(()=>{
        console.log('USER:',user)
    },[user])

    return(
        <Wrapped>
            <Title>Seu cadastro</Title>
            <Form className='form' onSubmit={e=>handleSubmit(e)}>
                <FormGroup>
                    <Input
                        type="text" 
                        placeholder="Nome Completo" 
                        required
                        onBlur={e=>handleValues('Nome',e.target.value)}
                        className="caduser"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="email" 
                        placeholder="Seu melhor e-mail" 
                        required
                        onBlur={e=>handleValues('Usuario',e.target.value)}
                        className="caduser"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password" 
                        placeholder="Sua senha" 
                        required
                        onBlur={e=>handleSenha('senha1',e.target.value)}
                        className="caduser"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password" 
                        placeholder="Confirmar senha" 
                        required
                        onBlur={e=>handleSenha('senha2',e.target.value)}
                        className="caduser"
                    />
                </FormGroup>
                <FormGroup style={{display:'flex', justifyContent:'flex-end'}}>                
                    <Button type="submit" value="Cadastrar"/>
                </FormGroup>
            </Form>
        </Wrapped>
    )
}