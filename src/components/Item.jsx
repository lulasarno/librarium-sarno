import React from 'react' 
import { Link } from 'react-router-dom'


const Item = ({producto}) => { 
    
    return ( 
        <div className='card'>
            <img className= 'card-img-top' src={producto.img} alt={producto.name} style={{width: 300}}/>
            <div className='card-body' >
                <p className='card-title'>{producto.name}</p>
                <p className= 'card-autor'>{producto.autor}</p>
                <p className='card-text'>${producto.price},00</p>
                <Link className='btn-mas' to={'/item/'+ producto.id}> VER MAS </Link>
            </div>
        </div>
    )
}

export default Item