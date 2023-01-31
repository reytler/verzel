import { useEffect, useState } from "react";

export default function useScreen(){
    const [width,setWidth] = useState<number>(426);  

    useEffect(()=>{
        if(window !== undefined){
            window.addEventListener('resize',()=>setWidth(screen.width))
        }        
    },[])

    return width
}