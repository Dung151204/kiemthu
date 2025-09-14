import { memo, useEffect, useState, useTransition } from "react"

import Product  from "../itemProduct/Product.jsx"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ListProduct = (prop)=>{
    const [arrange,setArrange] = useState("1")
    useEffect(()=>{
        const dt = {
            ...prop.dataFilter,
            arrange : arrange
        }
        prop.handelFilterChange(dt)
    },[arrange])

    return (
        <div className="min-h-[700px]">
            <div className="w-ful h-[46px] p-8  flex items-center justify-between ">
                <div className="flex items-center">
                     <p className=" mr-2 hidden md:block">Bạn đang xem:</p>
                    <h2 className="font-medium text-blue-500 w-[73px]">{prop.name}</h2>
                </div>
                
                {/* lọc tăng/giảm theo giá */}
                <select value={arrange} name="" id="" onChange={e=>setArrange(e.target.value)} className="border w-auto border-black rounded-md pt-1 pb-1 pl-7 pr-7">
                    <option value="1">Phổ biến</option>
                    <option value="2">Giá giảm dần</option>
                    <option value="3">Giá tăng dần</option>
                </select>
            </div>
            {
                prop.loading? 
                <div className=" mt-10 w-full"><AiOutlineLoading3Quarters className="animate-spin text-center m-auto text-[28px] text-blue-500"/></div>
                 :
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {
                       prop.data?.map((product)=>(
                        <div key={product._id}  className=" w-[100%]">
                        
                                <Product
                                    id = {product._id}
                                    slug = {product.slug}
                                    name={product.title}
                                    price={product.price}
                                    img = {product?.options[0]?.images[0]}
                                    oldPrice = {product?.oldPrice}
                                />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
export default memo(ListProduct)