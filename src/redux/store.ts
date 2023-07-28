import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Filter';
import { cartReducer } from './Cart';
import { watchReducer } from './Watch';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        watch: watchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
