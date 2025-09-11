import { createSlice ,createAsyncThunk, asyncThunkCreator} from "@reduxjs/toolkit";
import { SelectUser } from "./selector";
import { useSelector ,useDispatch } from "react-redux";
import { getApiUserCurrent,addToCartUserApi,removeToCartUserApi } from "../service/userApiService";
import { useToast } from "../components/toastMessage/ToastMessage";

const userCartSlice = createSlice({
    name :"userCart",
    initialState:{
        products : [],
        total : 0,
        status:"idle"
    },
    reducers:{
        
        // addProduct : (state,action)=>{
        //     const existingProduct  = state.products.find(product=>(
        //         product.id === action.payload.id &&
        //         product.size == action.payload.size &&
        //         product.color == action.payload.color 
        //     ))
        //     if(existingProduct){
        //         state.products.find(product=>product.id===action.payload.id).quantity += action.payload.quantity
                
        //     }
        //     else{
        //         state.products.push(action.payload)
        //     }
        //     state.total += (action.payload.price * action.payload.quantity)
            
        // },
        // updateProduct:(state,action)=>{
        //     if(action.payload.key==="reduce"){
        //         state.products.find(product=>(
        //             product.id === action.payload.id &&
        //             product.size == action.payload.size &&
        //             product.color == action.payload.color 
        //         )).quantity -= 1
        //     }
        //      if(action.payload.key==="increase"){
        //         state.products.find(product=>(
        //             product.id === action.payload.id &&
        //             product.size == action.payload.size &&
        //             product.color == action.payload.color 
        //         )).quantity += 1
        //     }
        //      state.total = state.products.reduce((init,product)=>{
        //             return init + product.price* product.quantity
        //     },0)
        // },
        // removeProduct:(state,action)=>{
        //     state.products =  state.products.filter(product=>!(
        //             product.id === action.payload.id &&
        //             product.size === action.payload.size &&
        //             product.color === action.payload.color 
        //         ))
        //     state.total = state.products.reduce((init,product)=>{
        //             return init + product.price* product.quantity
        //     },0)
        // },
        // setCart:(state,action)=>{
        //     state.products = action.serverCart,
        //      state.total = action.serverCart.reduce((init,product)=>{
        //             return init + product.price* product.quantity
        //     },0)
        // },
        // clearCart:(state,action)=>{
        //     state.products = [],
        //     state.total = 0
        // },

    },
    extraReducers : (builder)=>{
        builder
         .addCase(fetchCart.pending,(state,action)=>{
            // state.status = "loading"
         })
         .addCase(fetchCart.fulfilled,(state,action)=>{
            state.status = "idle"
            state.products = action.payload
            state.total = state.products.reduce((init,product)=>{
                    return init + product.price* product.quantity
            },0)
         })
         .addCase(addCartUser.pending,(state,action)=>{
                 state.status = "loading"
         })
          .addCase(addCartUser.fulfilled,(state,action)=>{
             state.status = "idle"
            // if(action.payload.status === "other"){
                // state.status = "idle"
                // state.products = action.payload.CartUser
                // state.total = state.products.reduce((init,product)=>{
                //         return init + product.price* product.quantity
                // },0)
            // }
            // else{
                // state.products.find(product=>product.id===action.payload.id).quantity += action.payload.quantity
            // }
         })
          .addCase(removeCartUser.pending,(state,action)=>{
               state.status = "loading"
         })
         .addCase(removeCartUser.fulfilled,(state,action)=>{
               state.status = "idle"
                state.products =  state.products.filter(product=>!(
                    product.id === action.payload.id &&
                    product.size === action.payload.size &&
                    product.color === action.payload.color 
                ))
                state.total = state.products.reduce((init,product)=>{
                        return init + product.price* product.quantity
                },0)
         })
         
    }

})
export const fetchCart = createAsyncThunk("userCart/fetchCart", async(token,thunkAPI)=>{
     
    //  console.log("in fetchCart")
     try{
        const dataCurrentUser = await getApiUserCurrent(token)  //Lấy thông tin của user đăng đăng nhập 
        // console.log("fetch dataCurrentUser",dataCurrentUser)
        const CartUser = dataCurrentUser.data.cart.map(item=>({
                    id :item.product._id,
                    slug :item.product.slug,
                    name : item.product.title,
                    img : item.product?.options?.[0].images?.[0],
                    size : item.size,
                    color : item.color,
                    price : item.price,
                    quantity : item.quantity
        }))
        // console.log("CartUser",CartUser)
        return CartUser
     }
     catch(err){
        console.error("Lỗi giỏ hàng User : ", err)
         return thunkAPI.rejectWithValue("Không thể tải giỏ hàng");
     }
})

export const addCartUser = createAsyncThunk("userCart/addCartUser",async({value,token},thunkAPI)=>{
   
    try{
        const dataCurrentUser = await addToCartUserApi(value,token)  // khi thêm thành công trả về toàn bộ infor user (bao gồm giỏ hàng)
        console.log("dataCurrentUser",dataCurrentUser)
        if(dataCurrentUser?.data?.acknowledged){ //trùng sp có trong giỏ
           thunkAPI.dispatch( fetchCart(token))
            // console.log("sp trung")
            // console.log("value add : ",value)
            // return {
            //     "id": value.id,
            //     "status":"duplicate",  // trùng 
            //     "quantity" : value.quantity
            // }
        }
        else{
            // console.log("sp k trung")
            // console.log("value add : ",value)
            // console.log("dataCurrentUser",dataCurrentUser)
           
            // const cartUser = dataCurrentUser.data.cart.map(item=>({
            //             id :item._id,   //ok
            //             slug :item.product.slug, 
            //             name : item.product.title,  
            //             img : item.product?.options?.[0].images?.[0],
            //             size : item.size,     //ok
            //             color : item.color,   //ok
            //             price : item.price,  //ok
            //             quantity : item.quantity  //ok
            // }))
            thunkAPI.dispatch( fetchCart(token))
            // console.log("cartUser",cartUser)
            // return {
            //     "cartUser":cartUser,
            //     "status":"other"
            // }
        }
    }
    catch(err){

         console.error("Lỗi thêm vào giỏ hàng User : ", err)
        return []
    }

})

export const removeCartUser = createAsyncThunk("userCart/removeCartUser",async({value,token},thunkAPI)=>{
      try{
          const dataRespone = await removeToCartUserApi(value,token)
        //   console.log("dataResponeRemove", dataRespone)
        //   thunkAPI.dispatch(fetchCart(token))
          return value
      }
      catch(err){
         console.error("Xóa sản phẩm thất bại")
      }
})

export const updateCartUser = createAsyncThunk("userCart/removeCartUser",async({value,token},thunkAPI)=>{

})

export default userCartSlice