import Router, { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';
import { createCar, getMycars } from '../services/carrosService';
import { TCarro } from '../Types';

type TCarrosContextType = {
    handleGetmycars: ()=>void,
    mycars: Array<TCarro>,
    handleCreateCar: (carro:TCarro)=>void
}

export const CarrosContext = createContext({} as TCarrosContextType);

export function CarrosProvider({children}:any){

    const [mycars,setMycars] = useState<Array<TCarro>>([]);
    const {pathname} = useRouter()

    async function handleGetmycars(){
        if(pathname != '/admin/Homeadmin'){
            Router.push('/admin/Homeadmin')
        }
        try {
            const res = await getMycars();
            setMycars(res?.data)
        } catch (error) {
            
        }
    }

    async function handleCreateCar(carro:TCarro){
        try {
            const res = await createCar(carro)
            if(res?.status === 201){
                Router.push('/admin/Homeadmin')
            }
        } catch (error) {
            
        }
    }

    return(
        <CarrosContext.Provider
            value={{
                handleGetmycars,
                handleCreateCar,
                mycars
            }}
        >
            {children}
        </CarrosContext.Provider>
    )
}

export function useGetmycars(){
    const context = useContext(CarrosContext);
    const {handleGetmycars, mycars} = context;
    return {handleGetmycars, mycars}
}

export function useCreateCar(){
    const context = useContext(CarrosContext);
    const {handleCreateCar} = context;
    return {handleCreateCar}
}