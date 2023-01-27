import React from 'react';
import { LoginProvider } from './Login';
interface GlobalProps {
    children?: React.ReactNode;
}

const GlobalContext: React.FC = ({ children}: GlobalProps)=>{
    return(
        <LoginProvider>
            {children}
        </LoginProvider>
    )
}

export default GlobalContext;