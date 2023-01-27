import { useGetmycars } from '@/src/Context/Carros';
import { useUser } from '@/src/Context/Login';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Reload } from '../reloadMeuscarros';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser]=useState({});
  const {handleGetmycars} = useGetmycars()

  const toggle = () => setIsOpen(!isOpen);

  const {getUser,isLoged,logout} = useUser();

  useEffect(()=>{
    if(isLoged()){
      setUser(
        getUser()
      )
    }
  },[isLoged,getUser]) 

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">
            {isLoged()?(
              <Image src={'../logo_verzel.svg'} width={209} height={70} alt={'logo verzel'}/>
            ):(
              <Image src={'./logo_verzel.svg'} width={209} height={70} alt={'logo verzel'}/>
            )}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {isLoged()?(
            <Nav className="me-auto" navbar style={{display:'flex',justifyItems:'flex-end'}}>
              <NavItem>
                <NavLink href="/" disabled>
                  Bem vindo, 
                <b> Reytler Souza</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Reload onClick={()=>{handleGetmycars()}}>
                    Meus Carros
                  </Reload>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/Cadcar">
                  Cadastrar carro
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" onClick={logout}>
                  Sair
                </NavLink>
              </NavItem>
            </Nav>
          ):(
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/cadastro">Cadastre-se</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">
                  Faça Login
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
