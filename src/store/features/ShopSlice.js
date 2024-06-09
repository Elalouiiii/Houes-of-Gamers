import { createSlice } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';

export const shopSlice = createSlice({
  name: 'cart',
  initialState: {
    shopCart: []
  },
  reducers: {
    addProduct: (state, action) => {
      const productExixt = state.shopCart.findIndex((item) => item.id == action.payload.id)
      let data = action.payload;
      if (productExixt == -1) {
        state.shopCart.push({ ...data, quantity: 1 })
        toast.success("Product Add!");
      } else {
        toast.info("Product Increment");
        let quantity = Number(state.shopCart[productExixt].quantity)
        state.shopCart[productExixt] = { ...data, quantity: quantity + 1 }
      }
      
    },
    decrement: (state, action) => {
      const productIndex = state.shopCart.findIndex((item) => item.id == action.payload.id)
      let data = action.payload;
      if (state.shopCart[productIndex].quantity  == 1) {
        state.shopCart = state.shopCart.filter((item) => item.id != data.id)
        toast.warning("Product deleted")
      }else{
        let quantity=state.shopCart[productIndex].quantity
        state.shopCart[productIndex]= {...data,quantity:quantity-1}
        toast.info("Product decremented!")
      }
    },
    deletOneCart: (state, action)=> {
      state.shopCart  = state.shopCart.filter((item)=> item.id !== action.payload.id)
      toast.warning("Product deleted")

    },
    clear:(state) => {
     state.shopCart = [];
     toast.error("All Product Deleted ! ! !")

    },
  
    
  }
})

export const { addProduct, decrement, deletOneCart, clear} = shopSlice.actions
export default shopSlice.reducer 