import React from 'react' 


const Item = ({producto}) => { 
    
    return ( 
        <div className='card'>
            <img className= 'card-img-top' src={producto.img} alt='producto.name' style={{width: 300}}/>
            <div className='card-body' >
                <h4 className='card-title'>{producto.name}</h4>
                <h4 className='card-text'>${producto.price},00</h4>
                <a className='btn'> Ver mas </a>
            </div>
        </div>
    )
}

export default Item