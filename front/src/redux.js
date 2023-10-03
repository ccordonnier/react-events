import { configureStore, createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
    name: "alerts",
    initialState: [],
    reducers: {
        addAlert: (state, action) => {
            const newAlert = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
                type: action.payload.type
            }
            state.push(newAlert);
        },
        removeAlert: (state, action) => {
            return state.filter((alert)=>alert.id !== action.payload.id);
        },
    },
});

export const store = configureStore({
    reducer: {
        alerts: alertsSlice.reducer
    }
});