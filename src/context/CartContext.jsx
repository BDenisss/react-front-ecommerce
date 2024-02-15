import React, { createContext, useReducer} from "react";

export const CartContext = createContext();



function cartReducer(state, action) {
    console.log('Action:', action); // Log l'action actuelle
    console.log('Current State:', state); // Log l'état actuel avant la mise à jour

    switch (action.type) {

        case 'ADD_TO_CART':
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const newItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity + 1 }; 
                    }
                    return item;
                });
                return { ...state, items: newItems };
            } else {
                return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }; 
            }
        
case 'REMOVE_FROM_CART':
    const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);
    if (indexToRemove >= 0 && state.items[indexToRemove].quantity > 1) {
        const newItems = state.items.map((item, index) => {
            if (index === indexToRemove) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        return { ...state, items: newItems };
    } else {
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        return { ...state, items: filteredItems };
    }

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
