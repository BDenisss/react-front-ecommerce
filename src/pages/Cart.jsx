import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./Cart.css"

const Cart = () => {
    const { state , addToCart, removeFromCart, clearCart} = useContext(CartContext);


    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const handleRemoveFromCart = (item) => {
        removeFromCart(item.id); 
    };

    const handleClearCart = () => {
        clearCart();
    };

    const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);


    return (
        <div className='Cart-page'>
            <div className='header-cart-page'>
                <h1>Votre panier</h1>
                <button onClick={handleClearCart}>Tout supprimer</button>
            </div>
            {state.items.length > 0 ? (
                <ul>
                    {state.items.map((item) => (
                        <div className='cart-wrapper'>
                            <div className='cart-item'>
                                <div className='cart-title'>
                                    <img src={item.image} alt={item.title} />
                                    <li key={item.id}>{item.title}</li>
                                </div>

                                <div className='cart-quantity'>
                                    <button onClick={() => handleRemoveFromCart(item)}>-</button>
                                    <p>Quantité: {item.quantity}</p>
                                    <button onClick={() => handleAddToCart(item)}>+</button>
                                </div>

                                <div className='cart-price'>
                                    <p>Prix: {item.price * item.quantity}€  ({item.price}€/unité)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='cart-total-price'>
                        <p>Il y a un total de {totalItems} dans votre panier !</p>
                        <p>Prix total: {totalPrice.toFixed(2)}€</p>
                    </div>
                </ul>
            ) : (
                <p>Votre panier est vide.</p>
            )}
        </div>
    );
};

export default Cart;
