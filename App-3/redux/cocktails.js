import { createSlice } from '@reduxjs/toolkit'

const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState: {
      cocktails: []
    },
    reducers: {
      addCocktailsIndex: (cocktailList, letter) => {
        cocktailList.forEach(cocktail => {
            state.cocktails.push({
                index: 'a',
                cocktail: cocktail,
                liked: false
            })
        })
      },
    }
})

export const { addCocktailsIndex } = cocktailSlice.actions

export default cocktailSlice.reducer