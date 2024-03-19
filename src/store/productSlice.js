import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    status:'idle'
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builders) => {
        builders.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status='idle'        
        })
        builders.addCase(getProducts.pending, (state, action) => {
            state.status = 'loading';        
        })
        builders.addCase(getProducts.rejected, (state, action) => {
            state.status = 'error';        
        })
    }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();
//         dispatch(fetchProducts(result))
//     }
// }