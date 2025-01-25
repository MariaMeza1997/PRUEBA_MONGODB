"use client"

//*Components Next
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React , {useEffect, useState} from 'react';
import  axios  from 'axios'


//*Components
const Hero = dynamic(() => import ('../components/Hero'))
const Table = dynamic(() => import ('../components/Table'))
import Layout from '../layouts/main/Layout'



const Component: NextPage = () => {
    const connection = axios.get("/api/taks")
    .then(function (connection) {
        // manejar respuesta exitosa
        console.log(connection);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
	return (
        <>
       	

            <Layout>
                <Hero/>
                <Table/>
            </Layout>
        </>



	)
}

export default Component
