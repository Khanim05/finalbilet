import { createSlice } from "@reduxjs/toolkit";
const initialState={
    basket:[],
}

const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addBasket:(state,action)=>{
            let findProd=state.basket.find(p=>p._id===action.payload._id)
            if (!findProd) {
                state.basket.push({...action.payload, count:1})
            }
            else{
                findProd.count +=1
            }
        },
        incremenet:(state,action)=>{
            let findProd=state.basket.find(p=>p._id===action.payload)
            if (findProd) {
                findProd.count+=1
            }
        },
          decrement:(state,action)=>{
            let findProd=state.basket.find(p=>p._id===action.payload)
            if (findProd&& findProd.count>1) {
                findProd.count-=1
            }
        },
        remove:(state,action)=>{
            state.basket=state.basket.filter(p=>p._id!=action.payload)
        }

    }
})
export const {addBasket,incremenet,decrement,remove}=basketSlice.actions
export default basketSlice.reducer