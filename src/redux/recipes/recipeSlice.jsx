import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipeMainPage: []
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
})

export const recipeReducer = recipeSlice.reducer;