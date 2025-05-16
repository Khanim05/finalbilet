import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = "http://localhost:4000/api/products"

export const getProduct = createAsyncThunk(
    'products/getProd',
    async () => {
        let { data } = await axios.get(url)
        return data
    })


    export const delProduct = createAsyncThunk(
    'products/delProd',
    async (_id) => {
        await axios.delete(`${url}/${_id}`)
        return _id
    })


    export const addProduct = createAsyncThunk(
    'products/addProd',
    async (product) => {
        let { data } = await axios.post(url, product)
        return data
    })


    const initialState={
        products:[],
        filterproducts:[]
    }

    const productSlice=createSlice({
        name:"product",
        initialState,
        reducers:{
            sort:(state,action)=>{
                if (action.payload=="high") {
                    state.products.sort((a,b)=>a.price-b.price)
                }
                else if(action.payload=="low"){
                    state.products.sort((a,b)=>b.price-a.price)
                }
            },
            search:(state,action)=>{
                state.products=state.filterproducts.filter((a)=>a.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(getProduct.fulfilled,(state,action)=>{
                state.products=action.payload
                state.filterproducts=action.payload
            }),
            builder.addCase(addProduct.fulfilled,(state,action)=>{
                state.products.push(action.payload)
                state.filterproducts.push(action.payload)

            }),
            builder.addCase(delProduct.fulfilled,(state,action)=>{
                state.products=state.products.filter(p=>p._id!=action.payload)
            })
        }
    })
 export const {sort,search}= productSlice.actions

 export default productSlice.reducer
