import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        buyitem: (state, action) => {
            console.log(action, "......>action");

        }
    },
})

// Action creators are generated for each case reducer function
export const { buyitem } = counterSlice.actions

export default counterSlice.reducer