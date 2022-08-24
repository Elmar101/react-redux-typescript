import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from '../features/counter/counter-slice';
import { UsersSlice } from "../features/rtk-query/users/users-slice";
import { eventSlice } from '../features/rtk-query/events/event-slice';

export type RootState = ReturnType<typeof store.getState>;
//ThunkDispatch<RootStateType , ExtraArgsType , ActionType>
export type AppDispatch = typeof store.dispatch;

//configureStore = combineReducer+createStore
export const store  = configureStore({
    reducer: {
        counter: CounterSlice,
        [UsersSlice.reducerPath]: UsersSlice.reducer,
        [eventSlice.reducerPath]: eventSlice.reducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(UsersSlice.middleware , eventSlice.middleware);
    }
});



