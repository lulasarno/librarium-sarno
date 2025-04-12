import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase'; 
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
    const [orderId, setOrderId] = useState('');
    const { cart, cartTotal, clear } = useCart();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const finalizarCompra = (dataDelForm) => {
        console.log(dataDelForm, 'data form');
        const order = {
            comprador: {
                name: dataDelForm.name,
                lastname: dataDelForm.lastname,
                address: dataDelForm.address,
                email: dataDelForm.email,
            },
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        };
        const ventas = collection(db, 'orders');
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id);
                clear();
            })
            .catch((error) => console.log("Error al guardar la orden:", error));
    };

    return (
        <>
            {orderId ? (
                <div>
                    <h2>Compra realizada!</h2>
                    <h4>Su id es: {orderId}</h4>
                    <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
                </div>
            ) : (
                <div>
                    <div>
                        <h1 className='form-tittle'>Complete sus datos</h1>
                    </div>
                    
                    <form  onSubmit={handleSubmit(finalizarCompra)}>
                        <div className='form-container'>
                            <div className='form-item'>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    {...register("name", { required: true, minLength: 3 })}
                                />
                                {errors?.name?.type === "required" && <span style={{ color: 'red' }}>Completar el campo</span>}
                                {errors?.name?.type === "minLength" && <span style={{ color: 'red' }}>Mínimo 3 caracteres</span>}
                            </div>
                            <div className='form-item'>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="lastname"
                                    placeholder="Apellido"
                                    {...register("lastname", { required: true, minLength: 2 })}
                                />
                                    {errors?.lastname?.type === "required" && <span style={{ color: 'red' }}>Completar el campo</span>}
                                    {errors?.lastname?.type === "minLength" && <span style={{ color: 'red' }}>Mínimo 2 caracteres</span>}
                                </div>
                                <div className='form-item'>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        placeholder="Dirección"
                                    {...register("address", { required: true, minLength: 10, maxLength: 35 })}
                                />
                                {errors?.address?.type === "required" && <span style={{ color: 'red' }}>Completar el campo</span>}
                                {errors?.address?.type === "minLength" && <span style={{ color: 'red' }}>Mínimo 10 caracteres</span>}
                                {errors?.address?.type === "maxLength" && <span style={{ color: 'red' }}>La dirección es demasiado larga</span>}
                            </div>
                            <div className='form-item'>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    {...register("email", { required: true })}
                                />
                                {errors?.email?.type === "required" && <span style={{ color: 'red' }}>Completar el campo</span>}
                            </div>
                            <div className='form-item'>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="second-email"
                                    placeholder="Repita su correo"
                                {...register("secondemail", {
                                    required: true,
                                    validate: {
                                        equalsMails: mail2 => mail2 === getValues().email
                                    }
                                })}
                                />
                                {errors?.secondemail?.type === "required" && <span style={{ color: 'red' }}>Completar el campo</span>}
                                {errors?.secondemail?.type === "equalsMails" && <span style={{ color: 'red' }}>Los mails no coinciden</span>}
                            </div>
                            <br/>
                            <button className="btn btn-dark" type="submit" disabled={!cart.length}>
                                Enviar
                            </button>
                        </div>
                        <div>
                           <img src="/public/MiercolesdeAbril.png" alt="" /> 
                        </div>
                    </form>                     
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
