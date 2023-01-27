import Navbar from '@/src/Components/Navbar'
import { VerificarLogin } from '@/src/functions/verificarToken'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    VerificarLogin()
  },[])

  return (
    <>
      <Head>
        <title>Verzel Carros</title>
        <meta name="description" content="E-commerce de autos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
    </>
  )
}