"use client"
//*Components Next
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Layout from "../../../layouts/main/Layout"
import Hero from "../../../components/Hero"
import TableAll from "../../../components/Table"

const homePage: NextPage = () => {

const [dataHook , setDataHook] = useState('');

  useEffect(() => {
    fetch('/api/taks')
    .then (res => res.json())
    .then ( data => setDataHook(data))  
  }, [])


  return(
    <>
          <Layout>
            <Hero/>
            <TableAll AllTaks = {dataHook} />
          </Layout>
        
    </>
  )
}
export default homePage