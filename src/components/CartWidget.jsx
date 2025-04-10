import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    
    
    return(
        <div className="carrito-container"> 
            <span>
                <img src="/public/carrito-de-compras.png" alt="" className="carrito-logo"/>
            </span>
            { cartQuantity() > 0 && <span>{cartQuantity()}</span>}
        </div>
    )
} 

export default CartWidget