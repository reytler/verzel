import FrmLogin from '@/src/Components/FormLogin'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Verzel</title>
        <meta name="description" content="E-commerce de autos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FrmLogin/>
    </>
  )
}