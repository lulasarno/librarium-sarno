import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'



const CartView = () => { 
    const {cart, cartTotal, clear} = useCart()
    return ( 
        <div className='cart-container'>
            <h2>Tu carrito</h2>

            <div>
                {cart.map((compra)=> <CartItem key={compra.id} compra={compra} /> )}
                <span>Total: ${cartTotal()},00 </span>
                
                <div>
                    <Link className='btn btn-dark' to='/' >Seguir comprando</Link> 
                    <Link className='btn btn-dark' to='/checkoutform'>Finalizar compra</Link> 
                </div>
                
                <div>
                    <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartView