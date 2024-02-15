import { configureStore } from '@reduxjs/toolkit'
import cocktailSlice from './cocktails'

export const store = configureStore({
    reducer: {
        cocktail: cocktailSlice
    },
})