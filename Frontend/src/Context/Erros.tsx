import { createContext, useContext, useState } from 'react';

type Terror = {
    field: string;
    message: string;
}

type TerrosContext = {
    setError: (erro:Terror)=>void
    removeError: (field:string)=>void
    handleLoading: (value:boolean)=>void
    errors: Terror[]
    loading: boolean
}

export const ErrosContext = createContext({} as TerrosContext);

export function ErrosProvider({children}:any){

    const [errors,setErrors] = useState<Array<Terror>>([]);
    const [loading,setLoading] = useState(false);

    function setError(erro: Terror){
        const exists = errors.find((err)=> err.field === erro.field);

        if(exists){
            return;
        }

        setErrors(prev=>[
            ...prev,
            erro
        ]);
    }
    
    function removeError(field: string){
        setErrors(prev=>prev.filter(
            (error)=>error.field !== field
        ))
    }

    function handleLoading(value:boolean){
        setLoading(value)
    }

    return(
        <ErrosContext.Provider
            value={{
                setError,
                removeError,
                handleLoading,
                loading,
                errors
            }}
        >
            {children}
        </ErrosContext.Provider>
    )
}

export function useError(){
    const context = useContext(ErrosContext);
    const {setError, removeError, errors, handleLoading,loading} = context;
    return {setError, removeError,errors, handleLoading,loading}
}