import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IGithupState {
    favourities: string[]
}

const initialState: IGithupState = {
    favourities: []
}
const githupSlice = createSlice({
    name: "githup",
    initialState,
    reducers: {
        addFavourites: (state , action: PayloadAction<string>): IGithupState => {
            return {
                ...state,
                favourities: [...state.favourities , action.payload]
            }
        },
        removeFavorities: (state , action: PayloadAction<string>): IGithupState => {
            return {
                ...state,
                favourities: state.favourities.filter(favourity=> favourity !== action.payload)      
            }
        }
    }
});

export const {addFavourites , removeFavorities} = githupSlice.actions;
export default githupSlice.reducer;