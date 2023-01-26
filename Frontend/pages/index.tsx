import Navbar from '@/src/Components/Navbar'
import VerificarToken from '@/src/functions/verificarToken';
import Head from 'next/head'

export default function Home() {
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

export async function getServerSideProps(ctx:any) {
  return VerificarToken(ctx);
}