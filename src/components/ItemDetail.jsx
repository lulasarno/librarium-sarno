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
                <h1> Detalle del producto: {product.name}  de {product.autor}</h1>
            </div>
            
            <div className='detail-container'>
                <div>
                    <div>
                        <img src={product.img} alt={product.name} />
                    </div>  
                </div>
                
                <div>
                    <div className='description-container'>
                        <p>{product.description}</p>
                        <p>Stock: {product.stock} unidades</p>
                        <p>Precio: ${product.price},00</p>
                    </div>              
                        
                    <div className='counter-container'>
                        {purchase ? 
                        <div style={{display: 'flex'}}>
                            <Link className='btn-ir' to='/cart'>Ir al carrito</Link> 
                            <Link className='btn-ir' to='/'>Seguir comprando</Link> 
                        </div>
                        : <ItemCounter stock={product.stock} onAdd={onAdd}/> }
                    </div>                    
                </div>


                                    
                              
            </div>

        </div>
    )
}

export default ItemDetail