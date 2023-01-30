import Cardcar from '@/src/Components/Cardcar'
import Navbar from '@/src/Components/Navbar'
import { useGetAllcars } from '@/src/Context/Carros'
import { VerificarLogin } from '@/src/functions/verificarToken'
import Head from 'next/head'
import { useEffect } from 'react'
import { Container } from 'reactstrap'

export default function Home() {
  const {allcars,handleGetAllcars} = useGetAllcars()
  useEffect(()=>{
    VerificarLogin()
    handleGetAllcars()
  },[])

  return (
    <>
      <Head>
        <title>Verzel Carros</title>
        <meta name="description" content="E-commerce de autos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Container style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {
          allcars.length > 0?
          allcars.map((carro)=>(<Cardcar key={carro.id} carro={carro}/>))
          :('Você não tem carros cadastrados')
        }
      </Container>
    </>
  )
}