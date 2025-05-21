import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const url="http://localhost:3000/api/products"

export const getProduct=createAsyncThunk('product/getProduct', async ()=>{
    let {data}=await axios.get(url)
    return data
})

export const delProduct=createAsyncThunk('product/delProduct', async (_id)=>{
   await axios.get(`${url}/${_id}`)
    return _id
})

export const addProduct=createAsyncThunk('product/addProduct', async (product)=>{
    let {data}=await axios.post(url,product)
    return data
})

let initialState={
    allProduct:[],
    filtered:[]
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        sortBy:(state,action)=>{
            if (action.payload=="high") {
                state.allProduct.sort((a,b)=>a.price-b.price)
        }
        else if(action.payload=="low"){
            state.allProduct.sort((a,b)=>b.price-a.price)
        }
    },
    searchBy:(state,action)=>{
        state.allProduct=state.filtered.filter(a=>a.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
    }
},
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.allProduct=action.payload
            state.filtered=action.payload
        }),
         builder.addCase(delProduct.fulfilled,(state,action)=>{
            state.allProduct=state.allProduct.filter(p=>p._id!=action.payload._id)
        }),
         builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.allProduct.push(action.payload)
        })
    }
})

export const {sortBy,searchBy}= productSlice.actions
export default productSlice.reducer