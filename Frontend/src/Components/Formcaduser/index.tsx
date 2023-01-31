import { useError } from '@/src/Context/Erros';
import { useLogin } from '@/src/Context/Login';
import { UserDTO } from '@/src/Types';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Button } from '../Button';
import Erro from '../Erro';
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
    const [senha,setSenha] = useState<string>('')
    const [confirmSenha,setConfirmSenha] = useState<string>('')
    const {handleCreateuser} = useLogin()
    const {setError,removeError} = useError()

    function handleSubmit(e:any){
        e.preventDefault();
        if(senha === confirmSenha){
            handleCreateuser(user);
            removeError('SENHA')
        }else{
            setError({field:'SENHA',message:'As senhas não conferem'})
        }
    }

    function handleValues(key:string,value: any){
        setUser(prev=>({
            ...prev,
            [key]:value,
        })) 
    }

    useEffect(()=>{
        if(senha === confirmSenha){
            removeError('SENHA')
            handleValues('Senha',senha)
        }else{
            setError({field:'SENHA',message:'As senhas não conferem'})
        }
    },[senha,confirmSenha])

    useEffect(()=>{
        console.log(user)
    },[user])

    return(
        <Wrapped>
            <Title>Seu cadastro</Title>
            <Erro/>
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
                        onChange={e=>setSenha(e.target.value)}
                        className="caduser"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password" 
                        placeholder="Confirmar senha" 
                        required
                        onChange={e=>setConfirmSenha(e.target.value)}
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