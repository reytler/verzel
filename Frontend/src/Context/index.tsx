import React from 'react';
import { CarrosProvider } from './Carros';
import { LoginProvider } from './Login';
interface GlobalProps {
    children?: React.ReactNode;
}

const GlobalContext: React.FC = ({ children}: GlobalProps)=>{
    return(
        
        <LoginProvider>
            <CarrosProvider>            
                {children}
            </CarrosProvider>
        </LoginProvider>
    )
}

export default GlobalContext;