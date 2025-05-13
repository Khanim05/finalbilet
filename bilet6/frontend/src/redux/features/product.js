import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
  const url='http://localhost:5000/api/products'

export const getProduct=createAsyncThunk(
    'product/getProduct',
  async()=>{
    let {data}=await axios.get(url)
    return data
  }
)

export const addProduct=createAsyncThunk(
    'product/addProduct',
    async(product)=>{
        let {data}=await axios.post(url,product)
        return data
    }
)

export const deleteProduct=createAsyncThunk(
    'product/deleteproduct',
    async(_id)=>{
        await axios.delete(`${url}/${_id}`)
        return _id
    }
)
const initialState={
    product:[],
    filterProduct:[]
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        sortBy:(state,action)=>{
             if (action.payload=="high") {
                state.product.sort((a,b)=>a.price-b.price)
             }
             else if (action.payload=="low") {
                 state.product.sort((a,b)=>b.price-a.price)
             }
        },
        searchProduct:(state,action)=>{
            state.product=state.filterProduct.filter((p)=>p.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.product=action.payload
            state.filterProduct=action.payload
        }),
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.product.push(action.payload)
        }),
        builder.addCase(deleteProduct.fulfilled,(state,action)=>{
            state.product=state.product.filter(p=>p._id!=action.payload)
        })
    }
})
export const {sortBy,searchProduct}=productSlice.actions
export default productSlice.reducer
