import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { SelectUser } from "./selector";
import { useSelector } from "react-redux";
import { getApiUserCurrent } from "../service/userApiService";
const userCartSlice = createSlice({
    name :"userCart",
    initialState:{
        products : [],
        total : 0,
        status:"idle"
    },
    reducers:{
        
        addProduct : (state,action)=>{
            const existingProduct  = state.products.find(product=>(
                product.id === action.payload.id &&
                product.size == action.payload.size &&
                product.color == action.payload.color 
            ))
            if(existingProduct){
                state.products.find(product=>product.id===action.payload.id).quantity += action.payload.quantity
                
            }
            else{
                state.products.push(action.payload)
            }
            state.total += (action.payload.price * action.payload.quantity)
            
        },
        updateProduct:(state,action)=>{
            if(action.payload.key==="reduce"){
                state.products.find(product=>(
                    product.id === action.payload.id &&
                    product.size == action.payload.size &&
                    product.color == action.payload.color 
                )).quantity -= 1
            }
             if(action.payload.key==="increase"){
                state.products.find(product=>(
                    product.id === action.payload.id &&
                    product.size == action.payload.size &&
                    product.color == action.payload.color 
                )).quantity += 1
            }
             state.total = state.products.reduce((init,product)=>{
                    return init + product.price* product.quantity
            },0)
        },
        removeProduct:(state,action)=>{
            state.products =  state.products.filter(product=>!(
                    product.id === action.payload.id &&
                    product.size === action.payload.size &&
                    product.color === action.payload.color 
                ))
            state.total = state.products.reduce((init,product)=>{
                    return init + product.price* product.quantity
            },0)
        },
        setCart:(state,action)=>{
            state.products = action.serverCart,
             state.total = action.serverCart.reduce((init,product)=>{
                    return init + product.price* product.quantity
            },0)
        },
        clearCart:(state,action)=>{
            state.products = [],
            state.total = 0
        },

    },
    extraReducers : (builder)=>{
        builder
         .addCase(fetchCart.pending,(state,action)=>{
            state.status = "loading"
         })
         .addCase(fetchCart.fulfilled,(state,action)=>{
            state.status = "idle"
            state.products = action.payload
            state.total = state.products.reduce((init,product)=>{
                    return init + product.price* product.quantity
            },0)
         })
    }

})
export const fetchCart = createAsyncThunk("userCart/fetchCart", async(token)=>{
     
     console.log("in fetchCart")
     try{
        const dataCurrentUser = await getApiUserCurrent(token)
        console.log("dataCurrentUser",dataCurrentUser)
        const CartUser = dataCurrentUser.data.cart.map(item=>({
                    id :item._id,
                    slug :item.product.slug,
                    name : item.product.title,
                    img : item.product?.options?.[0].images?.[0],
                    size : item.size,
                    color : item.color,
                    price : item.price,
                    quantity : item.quantity
        }))
        console.log(CartUser)
        return CartUser
     }
     catch(err){
        console.error("Lỗi giỏ hàng User : ", err)
        return []
     }
     

})


export default userCartSlice