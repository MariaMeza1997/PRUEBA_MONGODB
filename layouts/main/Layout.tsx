//* Next Components
import Head from 'next/head'
import dynamic from 'next/dynamic'

//* Interfaces
import { LayoutProps } from '../../interfaces/layout'

//* React Hooks
import { useState } from 'react'

//* Component
const Footer = dynamic(() => import('./Footer'), { ssr: false, })


/**
 * @author Maria Meza
 * @name Layout
 * @param { JSX.Element | JSX.Element[] } children
*/
const Layout = ({ children }: LayoutProps) => {

	
	
	return (

		<>

			<Head>
				<title>Crud clientes, aplicacion Next y MongoDB</title>
				<meta name="description" content="Crud clientes, aplicacion Next y MongoDB" />
				<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
				
			</Head>
		
			
			{children}
			
			
		
			<Footer />
		</>

	)
}

export default Layout