import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    buyitemprice: [],
    userdata: [],
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        addToCarthandler: (state, action) => {

            const find = state.cartItems.findIndex((item) => item.id === action.payload.id) //first time action.payload is empaty 
            // console.log(find, "find");
            if (find >= 0) {
                state.cartItems[find].quantity += 1;//find by index value
            } else {
                state.cartItems.push(action.payload)

            }
            window.alert('Item Added successefully')


        },
        Increment: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            })
        },
        decrement: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else {
                    return item
                }


            })
        },
        removehandler: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)

        },
        buyitem: (state, action) => {

            // console.log(action.payload.price, "23456734567")

            state.buyitemprice.push(action.payload.price)
            // console.log(state.buyitemprice[0],"price");
        },
        deliveritem: (state, action) => {
            // console.log(action.payload, "deliveritem");
        }
    },
})

// Action creators are generated for each case reducer function
export const { Increment, decrement, addToCarthandler, removehandler, buyitem,deliveritem } = counterSlice.actions

export default counterSlice.reducer