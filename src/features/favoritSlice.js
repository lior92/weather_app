import {createSlice}from '@reduxjs/toolkit'

const initialState = {
    favorites:[]
}

const favoritesSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
           state.favorites = [...state.favorites,action.payload]
        },
        removeFavorite:(state,action)=>{
            state.favorites = state.favorites.slice(0, -1)
        }
    }
})

//actions
export const {addFavorite,removeFavorite}= favoritesSlice.actions

//reducer
export default favoritesSlice.reducer