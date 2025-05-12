import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


const url = "http://localhost:5000/api/bilet3"

export const getAllProduct = createAsyncThunk(
    'product/getProduct',
    async () => {
        let { data } = await axios.get(url)
        return data
    }
)

const initialState = {
    allProduct: [],
    filterProd: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        sortby: (state, action) => {
            if (action.payload == "high") {
                state.allProduct = state.allProduct.sort((a, b) => a.price - b.price)
            }
            else if (action.payload == "low") {
                state.allProduct = state.allProduct.sort((a, b) => b.price - a.price)
            }
        },
        searchProd: (state, action) => {
            state.allProduct = state.filterProd.filter(p => p.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.allProduct = action.payload
            state.filterProd = action.payload
        })
    }
})
export const { sortby,searchProd } = productSlice.actions
export default productSlice.reducer