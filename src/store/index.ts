import { configureStore } from "@reduxjs/toolkit";
import cartReducuer from './cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducuer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store