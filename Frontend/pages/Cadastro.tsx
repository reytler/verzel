import FrmUser from '@/src/Components/Formcaduser';
import Navbar from '@/src/Components/Navbar';
import Head from 'next/head';
import React from 'react';
import { Container } from 'reactstrap';

export default function Cadastro(){
    return(
        <>
            <Head>
                <title>Verzel Carros</title>
                <meta name="description" content="E-commerce de autos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <Container>
                <FrmUser/>
            </Container>
        </>
    )
}