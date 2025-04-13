import React from 'react'; 
import { useCart } from '../context/CartContext';

const CartItem = ({compra}) => { 
    const {removeItem} = useCart() 

    return ( 
        <div>

            <div className='incart-container'> 
                <div className='btn-x'>
                    <button className='btn btn-danger' onClick={() => removeItem (compra.id)}>X</button>
                </div>
                <div>
                   <img src={compra.img} alt={compra.name} /> 
                </div>
                <div className='incart-items'>
                    <b>{compra.name}</b>
                    <span>{compra.quantity} unidades</span> 
                    <span>${compra.price.toLocaleString('es-AR')},00</span>
                    <b>
                        Precio final: ${ (compra.quantity * compra.price).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
                    </b>

                </div>
            </div>        
        </div>
    )
}

export default CartItem