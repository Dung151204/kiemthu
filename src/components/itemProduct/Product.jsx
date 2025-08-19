import { memo } from "react"
import { FaStar } from "react-icons/fa";
import { generatePath, Link } from "react-router-dom";
import Button from "../button/Button";

const Product = (prop)=>{
    return(
        <Link to={generatePath("/detailProduct/:id",{id:1})} className="hover:bg-blue-50 w-full h-full bg-white flex flex-col shadow-lg pb-1">
            <img 
               src="https://res.cloudinary.com/dpn2spmzo/image/upload/v1726758145/clothing-store/fcnrkgfwpr2psczxri37.jpg" 
               alt="" 
               className="w-full"
            />
           <div className="pl-2 pr-2 relative flex-1  ">
                <p className="mt-2">{prop.name}</p>
                <div className="flex justify-start items-end">
                    <h2 className="text-[15px] line-through opacity-70">{prop.oldPrice}</h2>
                     <h2 className="ml-2 text-[17px] font-semibold">{prop.price}</h2>
                </div>
                <div className="flex mt-2 items-center justify-between">
                   <p className="flex">
                        <FaStar className="text-yellow-400 text-[10px]"/>
                        <FaStar className="text-yellow-400 text-[10px]"/>
                        <FaStar className="text-yellow-400 text-[10px]"/>
                        <FaStar className="text-yellow-400  text-[10px]"/>
                        <FaStar className="text-[#ccc] text-[10px]"/>
                   </p>
                   <p className="text-[14px]">Đã bán 125</p>
                </div>
                <Button 
                    name = "Thêm vào giỏ"
                    style = "p-1 pr-3 pl-3 float-right mt-3 mb-3 text-[#ff0000] hover:bg-[#ff0000] hover:text-white"
                />
           </div>

        </Link>
    )
}

export default memo(Product)