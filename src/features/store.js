import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './favoritSlice'

const store = configureStore({
    reducer:{
        favorites:favoriteReducer
    }
})
export default store