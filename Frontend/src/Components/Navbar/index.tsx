import { useGetmycars } from '@/src/Context/Carros';
import { useUser } from '@/src/Context/Login';
import { TUser } from '@/src/Types';
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
  const [user,setUser]=useState<TUser>();
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
          <Image src={'/logo_verzel.svg'} width={209} height={70} alt={'logo verzel'} priority/>            
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {user?(
            <Nav className="me-auto" navbar style={{display:'flex',justifyItems:'flex-end'}}>
              <NavItem>
                <NavLink href="/" disabled>
                  Bem vindo, 
                <b> {user.nome}</b>
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
                <NavLink href="/" onClick={logout}>
                  Sair
                </NavLink>
              </NavItem>
            </Nav>
          ):(
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/Cadastro">Cadastre-se</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">
                  Fa??a Login
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
