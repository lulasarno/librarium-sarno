import React, { useContext, useState } from 'react';
import ItemCounter from './ItemCounter';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
    const {addToCart} = useContext(CartContext)
    const [purchase, setPurchase] = useState(false)
    const onAdd = (quantity) => {
      addToCart(product, quantity)
        setPurchase(true)
    }

    return ( 
        <div> 
            <div className='product-name'>
                <h1>{product.name} </h1>
            </div>
            <div className='detail-container'>
                <div>
                    <img src={product.img} alt={product.name} />
                </div>  
                <div>
                    <div className='description-container'>
                        <p>Autor: {product.autor}</p>
                        <p>{product.description}</p> 
                        <p>Stock: {product.stock} unidades</p>
                        <b>Precio: ${product.price},00</b>
                    </div>               
                    <div className='counter-container'>
                        {purchase ? 
                        <div style={{display: 'flex'}}>
                            <Link className='btn btn-dark btn-ir' to='/cart'>Ir al carrito</Link> 
                            <Link className='btn btn-dark btn-ir ' to='/'>Seguir comprando</Link> 
                        </div>
                        : <ItemCounter stock={product.stock} onAdd={onAdd}/> }
                    </div>                    
                </div>             
            </div>
        </div>
    )
}

export default ItemDetail