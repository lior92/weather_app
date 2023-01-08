import {createSlice}from '@reduxjs/toolkit'

const initialState = {
    favorites:[],
    saved_cites:[]
}

const favoritesSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
            // console.log(  action.payload.Link)
            state.favorites = [...state.favorites,action.payload]
        },
        removeFavorite:(state,action)=>{
            state.favorites = state.favorites.slice(0, -1)
        },
        saveCity:(state,action)=>{
             state.saved_cites  = [...state.saved_cites,action.payload]
        },
        removeCity:(state,action)=>{
            state.saved_cites =  state.saved_cites.filter(city=>city!=action.payload)
        }
    }
})

//actions
export const {addFavorite,removeFavorite,saveCity,removeCity}= favoritesSlice.actions

//reducer
export default favoritesSlice.reducer