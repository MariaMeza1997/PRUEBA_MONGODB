"use client"
//* Next components
import type { NextPage } from 'next'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useEffect, useState } from 'react';


/**
 * @author Maria Meza
 * @name Table
 * @description Login
 */



const Login:NextPage = () => {

    const [user , setUser] = useState('');
    const [pass, setPass]= useState('');


    const handleSubmit = (e:any) => {
        e.preventDefault()
       
        console.log(pass)
         //*Unicamente prueba, la idea es conectarlo al back
         if(user == 'Admin' && pass == '130?'){
            console.log("ingresa")
			window.location.replace('/table')
        }else{
            alert('Todos los datos son necesarios, te agredecemos que ingreses la información correcta')
        }
	}

	return (

      
		<div>

        <div className='login'>

            <div className='container'>
                <div className='login__information'>

                    <div className='login__information__input'>

                            <form onSubmit={handleSubmit} >
                                

                                    <div className='form__information__input__form' >

                                        <div className="login__information__input__form__input">
                                            <input placeholder="Usuario" name="user"    onChange={(e) => setUser(e.target.value)} />
                                               
                                        </div>

                                        <div className="login__information__input__form__input">
                                            <input placeholder="Contraseña" name="password" type='password'  onChange={(e) => setPass(e.target.value)}/>
                                               
                                        </div>

                                        <button className="form__information__input__send_botton" type="submit">

                                            <div className="licorne_link">

                                                <div className="licorne_link__text">INGRESAR</div>

                                                <div className="licorne_link__icon">

                                                    <div className="licorne_link__icon__line"></div>

                                                    <div className="licorne_link__icon__circle">
                                                        <div className="licorne_link__icon__circle__arrow"></div>
                                                    </div>
                                                    
                                                </div>

                                            </div>

                                        </button>

                                    </div>

                                
                            </form>
                        

                    </div>

                   
                </div>

            </div>

        </div>

    </div>

	)

}

export default  Login