import React from 'react';
import { useSelector } from 'react-redux';


const Cart = () => {

    const cart = useSelector((state) => state.cart);
    console.log(cart);

    
    return (
        <div>
            <h1>Panier</h1>
        {/* Contenu de la page panier ici */}
        </div>
    );
};

export default Cart;
