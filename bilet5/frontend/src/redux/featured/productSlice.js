import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url="http://localhost:5000/api/products"
export const getProducts=createAsyncThunk(
    'product/getProduct',
    async()=>{
    let {data}=await axios.get(url)
    return data
    }
)

export const addProduct =createAsyncThunk(
    'priduct/addproduct',
    async(product)=>{
        let {data}=await axios.post(url, product)
        return data

    }
)

export const deleteprod=createAsyncThunk(
    'product/deleteProduct',
    async(_id)=>{
        await axios.delete(`${url}/${_id}`)
        return _id
    }
)

const initialState={
    products:[]
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products=action.payload
        }),
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.products.push(action.payload)
        }),
        builder.addCase(deleteprod.fulfilled,(state,action)=>{
            state.products=state.products.filter(p=>p._id!=action.payload)
        })
    }
})

export default productSlice.reducer