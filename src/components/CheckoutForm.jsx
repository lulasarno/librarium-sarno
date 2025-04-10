import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';

const CheckoutForm = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        lastname: '',
        email: '',
        address: ''
    }); 
    const [validateMail, setValidateMail] = useState('');
    const [orderId, setOrderId] = useState('');
    const { cart, cartTotal, clear } = useCart();

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const finalizarCompra = (e) => {
        e.preventDefault();

        
        if (!buyer.name || !buyer.lastname || !buyer.email || !buyer.address) {
            alert('Completar todos los campos');
        } else if (buyer.email !== validateMail) {
            alert('Los mails no coinciden');
        } else {
            let order = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp(),
            };

            const ventas = collection(db, 'orders');
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id);
                    clear();
                    
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <>
            {orderId ? (
                <div>
                    <h2>Compra realizada!</h2>
                    <h4>Su id es: {orderId}</h4>
                </div>
            ) : (
                <div>
                    <h1>Complete sus datos</h1>
                    <form onSubmit={finalizarCompra}>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={buyer.name}
                            onChange={buyerData}
                        />
                        <input
                            className="form-control"
                            type="text"
                            name="lastname"
                            placeholder="Apellido"
                            value={buyer.lastname}
                            onChange={buyerData}
                        />
                        <input
                            className="form-control"
                            type="text"
                            name="address"
                            placeholder="Direccion"
                            value={buyer.address}
                            onChange={buyerData}
                        />
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Correo"
                            value={buyer.email}
                            onChange={buyerData}
                        />
                        <input
                            className="form-control"
                            type="email"
                            name="second-email"
                            placeholder="Repita su correo"
                            value={validateMail}
                            onChange={(e) => setValidateMail(e.target.value)}
                        />
                        <button className="btn btn-dark" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
