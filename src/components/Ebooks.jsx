import React from 'react';
import { Link } from 'react-router-dom'

const Ebooks = () => { 

    return(
        <div>
            <div className='ebooks'>
                <h2>Ebooks</h2>
            </div>
            <div className='ebooks-container'>
                <div >
                    <p>Por el momento no contamos con ebooks disponibles</p>    
                </div>
                <div className='ebook-btn-container'>
                    <Link className= 'ebooks-btn' to="/">Ir al inicio</Link>
                </div>
            </div>
        </div>
    )
}
 
export default Ebooks