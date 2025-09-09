import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import storage from 'redux-persist/lib/storage'; // mặc định dùng localStorage

const persistConfigCart = {
  key: 'cart',        // key lưu trong storage
  storage,            // nơi lưu (localStorage)
};
const persistConfigUser = {
  key: 'user',        // key lưu trong storage
  storage,            // nơi lưu (localStorage)
};
const persistedCartReducer = persistReducer(persistConfigCart, cartSlice.reducer);
const persistedUsertReducer = persistReducer(persistConfigUser, authSlice.reducer);

const store = configureStore({
    reducer :{
      auth : persistedUsertReducer,
      cart : persistedCartReducer
    },
     middleware: (getDefaultMiddleware) =>  //redux-persist khi chạy sẽ dispatch một số action đặc biệt như:==>cần để hết warning
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST']
            },
        }),

})
export const persistor = persistStore(store);
export default store