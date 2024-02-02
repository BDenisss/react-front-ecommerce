import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Les articles dans le panier
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Ajouter un article au panier
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        // Supprimer un article du panier
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        // Vider le panier
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// Export des actions générées automatiquement
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export du réducteur
export default cartSlice.reducer;
