import Cardcar from '@/src/Components/Cardcar'
import Erro from '@/src/Components/Erro'
import { Button, Wrapped } from '@/src/Components/FormSearch'
import { Input } from '@/src/Components/Input'
import Navbar from '@/src/Components/Navbar'
import { useGetAllcars } from '@/src/Context/Carros'
import { VerificarLogin } from '@/src/functions/verificarToken'
import useScreen from '@/src/Hooks/useScreen'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Container, Form, FormGroup } from 'reactstrap'

export default function Home() {
  const {allcars,handleGetAllcars} = useGetAllcars()
  const [nome,setNome] = useState('');
  const [marca,setMarca] = useState('');

  const width = useScreen()
  
  useEffect(()=>{
    VerificarLogin()
    handleGetAllcars()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleSubmit(e:any){
    e.preventDefault()
    handleGetAllcars(nome,marca)
  }

  return (
    <>
      <Head>
        <title>Verzel Carros</title>
        <meta name="description" content="E-commerce de autos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>

      <Wrapped>
        {/*@ts-ignore*/}
        <Form className={width > 425 ? 'form':'formcolumn'} onSubmit={e=>handleSubmit(e)}>
          <FormGroup>
            <Input
              type='text'
              placeholder='Busque por marca'
              className='input'
              onChange={e=>setMarca(e.target.value)}
            />            
          </FormGroup>
          <FormGroup>
            <span className='ou'>Ou</span>          
          </FormGroup>
          <FormGroup>
            <Input
              type='text'
              placeholder='Busque por nome'
              className='input'
              onChange={e=>setNome(e.target.value)}
            />
          </FormGroup>
          <FormGroup>                
            <Button type="submit" value="Buscar"/>
          </FormGroup>
        </Form>
      </Wrapped>
      <Erro/>
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