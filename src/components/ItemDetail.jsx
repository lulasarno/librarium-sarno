import React from 'react';
import ItemCounter from './ItemCounter';


const ItemDetail = ({product}) => { 
    const onAdd = (quantity) => { 
        alert(`Agregaste ${quantity} unidades`)
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
                        <ItemCounter stock={product.stock} onAdd={onAdd}/>  
                    </div>                    
                </div>


                                    
                              
            </div>

        </div>
    )
}

export default ItemDetail