import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios'
const url="http://localhost:2000/api/products"

export const getProduct=createAsyncThunk('product/getProd', async()=>{
    let {data}= await axios.get(url)
    return data
})

export const addProduct=createAsyncThunk('product/addProd', async(product)=>{
    let {data}= await axios.post(url, product)
    return data
})

export const delProduct=createAsyncThunk('product/delProd', async(_id)=>{
    await axios.delete(`${url}/${_id}`)
    return _id
})

const initialState={
    product:[],
    filter:[]
}

const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
        sortBy:(state,action)=>{
            if (action.payload=="high") {
              state.product.sort((a,b)=>a.price-b.price)
            }
            else if(action.payload=="low"){
            state.product.sort((a,b)=>b.price-a.price)
            }
        },
        searchBy:(state,action)=>{
            state.product=state.filter.filter(a=>a.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.product=action.payload
            state.filter=action.payload
        }),
         builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.product.push(action.payload)
            state.filter.push(action.payload)
        }),
         builder.addCase(delProduct.fulfilled,(state,action)=>{
            state.product=state.filter.filter(a=>a._id!=action.payload)
        })

    }
})
export const {sortBy, searchBy} = productSlice.actions
export default productSlice.reducer