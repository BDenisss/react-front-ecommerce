import React, { createContext, useContext, useReducer} from "react";

export const CartContext = createContext();



function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        case 'CLEAR_CART':
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
