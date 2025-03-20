import React, { useState } from 'react';

const ItemCounter = ({stock, onAdd}) => { 
    const [count, setCount]= useState(1)
   
    const add = () => { 
        if(count < stock){
            setCount (count + 1) 
        }
    }
    
    const substract = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    
    const addToCart = () => { 
        onAdd(count)
    }


    return ( 
        <div>
            <div className='btn-count'>
                <button className='btn-dark' onClick={substract}> - </button>
                <span className='btn-contador'> {count} </span>
                <button className='btn-dark' onClick={add}> + </button>
            </div>
            <div>
                <button className='btn-add-cart' disabled={stock === 0} onClick={addToCart}> Agregar al carrito</button>
            </div>
            
        </div> 
    )
}

export default ItemCounter