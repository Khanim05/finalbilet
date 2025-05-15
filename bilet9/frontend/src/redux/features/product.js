import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = "http://localhost:3000/api/products"
export const getProduct = createAsyncThunk(
    'product/getProd',
    async () => {
        let { data } = await axios.get(url)
        return data
    }

)

export const delProduct = createAsyncThunk(
    'product/delProd',
    async (_id) => {
        await axios.delete(`${url}/${_id}`)
        return _id
    }

)


export const addProduct = createAsyncThunk(
    'product/addProd',
    async (product) => {
        let { data } = await axios.post(url,product)
        return data
    }
)


const initialState={
    products:[],
    filterProduct:[],
}

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        sortBy:(state,action)=>{
            if (action.payload=="high") {
                state.products.sort((a,b)=>a.price-b.price)
            }
            else if(action.payload=="low"){
                state.products.sort((a,b)=>b.price-a.price)
            }
        },
        search:(state,action)=>{
            state.products=state.filterProduct.filter((p)=>p.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.products=action.payload
            state.filterProduct=action.payload
        }),
         builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.products.push(action.payload)
            state.filterProduct.push(action.payload)
        }),
         builder.addCase(delProduct.fulfilled,(state,action)=>{
            state.products=state.products.filter(p=>p._id!=action.payload)
        })

    }
})

export const {sortBy,search}=productSlice.actions
export default productSlice.reducer

