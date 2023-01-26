import Image from "next/image";
import { Form, FormGroup } from "reactstrap";
import { Container, Inputpass, Inputuser, Titlefrm, Wrapper, Logo, Arealogo, Border, Button } from "./styles";

export default function FrmLogin() {
    return(
        <Wrapper>
            <Border>
                <Arealogo>
                    <Logo src={'./logo_verzel.svg'}/>
                </Arealogo>                
            </Border>
            <Container>
                <Titlefrm>Faça login na sua conta</Titlefrm>
                
                <Form>
                    <FormGroup>
                        <Inputuser type="text" placeholder="Usuario" required/>
                    </FormGroup>
                    <FormGroup>
                        <Inputpass type="password" placeholder="Senha" required/>
                    </FormGroup>
                    <FormGroup style={{display:'flex', justifyContent:'flex-end'}}>
                        <Button type="submit" value="Entrar"/>
                    </FormGroup>
                </Form>
            </Container>
        </Wrapper>
    )
}