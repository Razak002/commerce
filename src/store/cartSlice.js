
import { createSlice } from "@reduxjs/toolkit";// this hold all my products info 


//initial state of the cart is empty
const initialState = [];


//slice to  hold a object 
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        //action creators to add 

        add(state, action) {
            state.push(action.payload)
        },

        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        }

    }
});
//exporting the actions
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
