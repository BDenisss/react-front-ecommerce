import React, { createContext, useReducer} from "react";

export const CartContext = createContext();



function cartReducer(state, action) {
    console.log('Action:', action); // Log l'action actuelle
    console.log('Current State:', state); // Log l'état actuel avant la mise à jour

    switch (action.type) {
        case 'ADD_TO_CART':
            const newStateAdd = { ...state, items: [...state.items, action.payload] };
            console.log('New State:', newStateAdd); // Log le nouvel état pour ADD_TO_CART
            return newStateAdd;
        case 'REMOVE_FROM_CART':
            const newStateRemove = { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
            console.log('New State:', newStateRemove); // Log le nouvel état pour REMOVE_FROM_CART
            return newStateRemove;
        case 'CLEAR_CART':
            console.log('New State:', { ...state, items: [] }); // Log le nouvel état pour CLEAR_CART
            return { ...state, items: [] };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });
    const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
    const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });
    const value = { state, addToCart, removeFromCart, clearCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
