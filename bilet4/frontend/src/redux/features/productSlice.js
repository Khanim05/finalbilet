import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const url="http://localhost:5000/api/products"

export const getProduct=createAsyncThunk(
    'product/getproduct',
    async()=>{
        let {data}=await axios.get(url)
        return data
    }
)

export const deleteProduct=createAsyncThunk(
    'product/delete',
    async(_id)=>{
        await axios.delete(`${url}/${_id}`)
        return _id
    }
)
export const addProduct=createAsyncThunk(
    'product/addProd',
    async(product)=>{
        let {data}=await axios.post(url, product)
        return data
    }
)
const initialState={
    products:[],
}

const ProductSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.products=action.payload
           
        }),
        builder.addCase(deleteProduct.fulfilled,(state,action)=>{
            state.products=state.products.filter(p=>p._id!=action.payload)
        }),
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.products.push(action.payload)
        })
    }


})

export default ProductSlice.reducer
