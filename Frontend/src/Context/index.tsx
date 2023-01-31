import React from 'react';
import { CarrosProvider } from './Carros';
import { ErrosProvider } from './Erros';
import { LoginProvider } from './Login';
interface GlobalProps {
    children?: React.ReactNode;
}

const GlobalContext: React.FC = ({ children}: GlobalProps)=>{
    return(
        <ErrosProvider>
            <LoginProvider>
                <CarrosProvider>            
                    {children}
                </CarrosProvider>
            </LoginProvider>
        </ErrosProvider>
    )
}

export default GlobalContext;