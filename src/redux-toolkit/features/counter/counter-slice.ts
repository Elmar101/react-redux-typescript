import {createSlice , PayloadAction} from "@reduxjs/toolkit";

interface ICounterSlice {
    value: number;
};

const initialState: ICounterSlice = {
    value: 0
};

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament(state: ICounterSlice): void{
            state.value++;
        },
        amountIncreament(state: ICounterSlice , action: PayloadAction<number>){
            state.value = state.value + action.payload;
        }
    }
});

export const {increament , amountIncreament} = CounterSlice.actions;
export default CounterSlice.reducer;