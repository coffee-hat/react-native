import { createSlice } from '@reduxjs/toolkit'

const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState: {
      cocktails: []
    },
    reducers: {
        addCocktailsIndex: (state, cocktailList, letter) => {
            cocktailList.payload.forEach(cocktail => {
                state.cocktails.push({
                    index: letter,
                    cocktail: cocktail,
                    liked: false
                })
            })
        },
        addFavori: (state, data) => {
            state.cocktails.forEach(drink => {
                if(drink.cocktail.idDrink == data.payload.id){
                    drink.liked = data.payload.liked
                }
            })
        }
    }
})

export const { addCocktailsIndex, addFavori } = cocktailSlice.actions

export default cocktailSlice.reducer