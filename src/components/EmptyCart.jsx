import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => { 
    
    return ( 
        <div className='emptycart-container'>
            <div className='emptycart-msg'>
                <h1>Tu carrito esta vacio... </h1>
                <Link to = '/' className='btn btn-dark'>Ir al inicio</Link>
            </div>                    
            <div className='emptycart-img'>
                <img src="./carro-vacio.png" alt="" />
            </div>      
        </div>
    )
}

export default EmptyCart