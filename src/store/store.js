import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi';
import cartReducer from './CartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    // Ajouter le middleware d'API
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
