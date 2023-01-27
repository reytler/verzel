import { useLogin } from "@/src/Context/Login";
import { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import { Input } from "../Input";
import { Container, Titlefrm, Wrapper, Logo, Arealogo, Border, Button } from "./styles";

export default function FrmLogin() {
    const {handleLogin} = useLogin();
    const [email,setEmail] = useState<string>('');
    const [senha,setSenha] = useState<string>('');

    function formHandle(e: { preventDefault: () => void; }){
        e.preventDefault();
        handleLogin(email,senha)
    }
    
    return(
        <Wrapper>
            <Border>
                <Arealogo>
                    <Logo src={'./logo_verzel.svg'}/>
                </Arealogo>                
            </Border>
            <Container>
                <Titlefrm>Faça login na sua conta</Titlefrm>
                
                <Form onSubmit={formHandle}>
                    <FormGroup>
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            required
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            className="login"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            required
                            value={senha}
                            onChange={e=>setSenha(e.target.value)}
                            className="login"
                        />
                    </FormGroup>
                    <FormGroup style={{display:'flex', justifyContent:'flex-end'}}>
                        <Button type="submit" value="Entrar"/>
                    </FormGroup>
                </Form>
            </Container>
        </Wrapper>
    )
}