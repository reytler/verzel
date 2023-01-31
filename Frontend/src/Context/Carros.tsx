import Router, { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';
import { createCar, deleteCar, getAllcars, getMycars, updateCar } from '../services/carrosService';
import { CarroDTO } from '../Types';

type TCarrosContextType = {
    handleGetmycars: ()=>void
    handleGetAllcars: (nome?:string, marca?:string)=>void
    mycars: Array<CarroDTO>
    allcars: Array<CarroDTO>
    handleCreateCar: (carro:CarroDTO)=>void
    handleUpdateCar: (carro:CarroDTO)=>void
    handleDeleteCar: (id:number)=>void
}

export const CarrosContext = createContext({} as TCarrosContextType);

export function CarrosProvider({children}:any){

    const [mycars,setMycars] = useState<Array<CarroDTO>>([]);
    const [allcars,setAllcars] = useState<Array<CarroDTO>>([]);
    const {pathname} = useRouter()

    async function handleGetmycars(){
        if(pathname != '/admin/Homeadmin'){
            Router.push('/admin/Homeadmin')
        }
        try {
            const res = await getMycars();
            //@ts-ignore
            const {data} = res
            setMycars(data.sort((a:any,b:any)=>{return a.valor - b.valor}))
        } catch (error) {
            
        }
    }

    async function handleGetAllcars(nome='',marca=''){
        try {
            const res = await getAllcars(nome,marca);
            //@ts-ignore
            const {data} = res
            setAllcars(data.sort((a:any,b:any)=>{return a.valor - b.valor}))
        } catch (error) {
            
        }
    }

    async function handleCreateCar(carro:CarroDTO){
        try {
            const res = await createCar(carro)
            if(res?.status === 201){
                Router.push('/admin/Homeadmin')
            }
        } catch (error) {
            
        }
    }

    async function handleUpdateCar(carro:CarroDTO){
        try {
            const res = await updateCar(carro)
            if(res?.status === 200){
                handleGetmycars()
            }
        } catch (error) {
            
        }
    }

    async function handleDeleteCar(id:number){
        try {
            const res = await deleteCar(id)
            if(res?.status === 200){
                handleGetmycars()
            }
        } catch (error) {
            
        }
    }

    return(
        <CarrosContext.Provider
            value={{
                handleGetmycars,
                handleCreateCar,
                handleUpdateCar,
                handleDeleteCar,
                handleGetAllcars,
                allcars,
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

export function useGetAllcars(){
    const context = useContext(CarrosContext);
    const {handleGetAllcars, allcars} = context;
    return {handleGetAllcars, allcars}
}

export function useCreateCar(){
    const context = useContext(CarrosContext);
    const {handleCreateCar} = context;
    return {handleCreateCar}
}

export function useUpdateCar(){
    const context = useContext(CarrosContext);
    const {handleUpdateCar} = context;
    return {handleUpdateCar}
}

export function useDeleteCar(){
    const context = useContext(CarrosContext);
    const {handleDeleteCar} = context;
    return {handleDeleteCar}
}