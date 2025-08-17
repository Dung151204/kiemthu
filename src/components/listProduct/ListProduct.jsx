import { memo, useEffect, useState, useTransition } from "react"

import Product  from "../itemProduct/Product.jsx"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ListProduct = (prop)=>{
    
     
    return (
        <div className="min-h-[700px]">
            <div className="w-ful h-[46px] p-8  flex items-center justify-between ">
                <div className="flex items-center">
                     <p className=" mr-2">Bạn đang xem:</p>
                    <h2 className="font-medium text-blue-500">{prop.name}</h2>
                </div>
                <select name="" id="" className="border border-black rounded-md pt-1 pb-1 pl-9 pr-9">
                    <option value="">Phổ biến</option>
                    <option value="">Bán chạy</option>
                    <option value="">Giá giảm dần</option>
                    <option value="">Giá tăng dần</option>
                </select>
            </div>
            {
                prop.loading? <div className=" mt-10 w-full"><AiOutlineLoading3Quarters className="animate-spin text-center m-auto text-[28px] text-blue-500"/></div> :
                <div className="grid grid-cols-4 gap-2">
                    {
                    prop.data?.products?.map((product)=>(
                        <div key={product.id}  className=" w-[100%]">
                                <Product
                                    name={product.name}
                                    price={product.price}
                                        img = {product.image}
                                        oldPrice = {product.oldPrice}
                                />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
export default memo(ListProduct)