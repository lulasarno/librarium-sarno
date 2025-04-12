import React from 'react'; 
import { useCart } from '../context/CartContext';


const CartItem = ({compra}) => { 
    const {removeItem} = useCart() 

    return ( 
        <div>
            <div className='incart-item'> 
                <img src={compra.img} alt={compra.name} />
                <span>{compra.name}</span>
                <span>{compra.quantity} unidades</span> 
                <span>${compra.price},00</span>
                <span>Precio final: ${compra.quantity * compra.price},00</span>

                <button className='btn btn-danger' onClick={() => removeItem (compra.id)}>X</button>
            </div>        
        </div>
    )
}

export default CartItem