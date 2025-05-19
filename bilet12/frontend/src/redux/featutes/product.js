import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const url="http://localhost:3000/api/product"

export const getProduct=createAsyncThunk(
    'product/getProduct',
    async()=>{
        let {data}=await axios.get(url)
        return data
    }
)

export const delProduct=createAsyncThunk(
    'product/delProduct',
    async(_id)=>{
        await axios.delete(`${url}/${_id}`)
        return _id
    }
)

export const addProduct=createAsyncThunk(
    'product/addProduct',
    async(product)=>{
        let {data}=await axios.post(url,product)
        return data
    }
)

const initialState={
    Allproduct:[],
    filteredProduct:[]
}

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.Allproduct=action.payload
            state.filteredProduct=action.payload
        }),
        builder.addCase(delProduct.fulfilled,(state,action)=>{
            state.Allproduct=state.Allproduct.filter(p=>p._id!=action.payload)
        }),
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.Allproduct.push(action.payload)
        })
    }
})

export default productSlice.reducer


