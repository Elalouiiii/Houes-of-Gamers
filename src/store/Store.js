import {configureStore} from '@reduxjs/toolkit'
import  shopSlice  from './features/ShopSlice'

export default configureStore({
  reducer: {
    cart:shopSlice,
  },
})