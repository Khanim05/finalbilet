import {createSlice} from '@reduxjs/toolkit'

const initialState={
    basketPrduct:[],
}

const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        updateBasket:(state,action)=>{
            let findProd=state.basketPrduct.find((p)=>p._id===action.payload._id)
            if (!findProd) {
                state.basketPrduct.push({...action.payload,count:1})
            }
            else{
                 findProd.count+=1
            }
           
        },
        increment:(state,action)=>{
            let findProd=state.basketPrduct.find(p=>p._id===action.payload._id)
            if (findProd) {
                findProd.count+=1
            }
        },
        decrement:(state,action)=>{
                let findProd=state.basketPrduct.find(p=>p._id===action.payload._id)
            if (findProd && findProd.count>1) {
                findProd.count-=1
            }
        },
        remove:(state,action)=>{
            state.basketPrduct=state.basketPrduct.filter(p=>p._id!=action.payload)
        }
    }
})
export const {updateBasket,increment,decrement,remove}=basketSlice.actions
export default basketSlice.reducer