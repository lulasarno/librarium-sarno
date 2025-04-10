import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => { 
    return ( 
        <div className='emptycart-container'>
            <div>
                <div className='emptycart-msg'>
                    <h1>Tu carrito esta vacio </h1>
                </div>
                <div>
                    <img src="/public/carro-vacio.png" alt="" />
                </div>                
            </div>
            <div>
                <Link to = '/' className='btn btn-dark'>Ir al inicio</Link>
            </div>

            
        </div>
    )
}

export default EmptyCart