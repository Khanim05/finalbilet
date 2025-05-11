import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const url='http://localhost:3000/api/products'

export const getAllProducts=createAsyncThunk(
    'product/getProduct',
    async()=>{
        let {data}=await axios.get(url)
        return data
    }
)

export const deleteProducts=createAsyncThunk(
    'product/deleteProduct',
    async(_id)=>{
        await axios.delete(`${url}/${_id}`)
        return _id
    }
)

export const addProduct=createAsyncThunk(
    'product/addProduct',
    async(product)=>{
        let {data}=await axios.post(url,product)
        console.log(data)
        return data
    }
        
)

const initialState={
    allProducts:[],
    filterProducts:[],
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        sortBy:(state,action)=>{
            if(action.payload=="high"){
                state.allProducts=state.allProducts.sort((a,b)=>a.price-b.price);
            }
            else if(action.payload=="low"){
                state.allProducts=state.allProducts.sort((a,b)=>b.price-a.price)
            }
        },
        sortSearch:(state,action)=>{
            state.allProducts=state.filterProducts.filter((p)=>
                p.name.toLowerCase().includes(action.payload.toLowerCase().trim()))
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.filterProducts=action.payload
        }),
        builder.addCase(deleteProducts.fulfilled,(state,action)=>{
            state.allProducts=state.allProducts.filter(p=>p._id!=action.payload)
        }),
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            state.allProducts.push(action.payload)
        })
    }

})
export const {sortBy,sortSearch}=productSlice.actions
export default productSlice.reducer