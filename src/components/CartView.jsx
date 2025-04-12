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
                <span className='total'>Total: ${cartTotal()},00 </span>
                <div className='container-btn-fin'>
                    <Link className='btn btn-dark btn-fin' to='/' >Seguir comprando</Link> 
                    <button className='btn btn-danger btn-fin' onClick={clear}>Vaciar carrito</button>
                    <Link className='btn btn-dark btn-fin' to='/checkoutform'>Finalizar compra</Link> 
                </div>
            </div>
        </div>
    )
}

export default CartView