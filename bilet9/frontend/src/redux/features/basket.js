import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let findprod = state.basket.find(p => p._id === action.payload._id)
            if (!findprod) {
                state.basket.push({ ...action.payload, count: 1 })
            }
            else {
                findprod.count += 1
            }
        },
        increment: (state, action) => {
            let findprod = state.basket.find(p => p._id === action.payload._id)
            if (findprod) {
                findprod.count+=1
            }
        },
          decrement: (state, action) => {
            let findprod = state.basket.find(p => p._id === action.payload._id)
            if (findprod && findprod.count>1) {
                findprod.count-=1
            }
        },

        remove:(state,action)=>{
            state.basket=state.basket.filter(p=>p._id!=action.payload)
        }
    }
})

export const {addBasket,increment,decrement,remove}=basketSlice.actions

export default basketSlice.reducer