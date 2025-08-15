import { memo } from "react"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = (prop)=>{
    return(
        <Link to={"/"} className="w-full h-full bg-white flex flex-col shadow-lg pb-1">
            <img 
               src="https://res.cloudinary.com/dpn2spmzo/image/upload/v1726758145/clothing-store/fcnrkgfwpr2psczxri37.jpg" 
               alt="" 
               className="w-full"
            />
           <div className="pl-2 pr-2 relative flex-1  ">
                <p className="mt-2">Áo sơ mi dành cho nam</p>
                <p className="flex justify-start items-end">
                    <p className="text-[15px] line-through opacity-70">299.000đ</p>
                     <h2 className="ml-2 text-[17px] font-semibold">189.000đ</h2>
                </p>
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
                <button className="border border-[#c23564] rounded bg-white text-[#c23564] p-1 pr-3 pl-3 float-right mt-3 mb-3 w-full md:w-[130px] hover:opacity-80">Thêm vào giỏ</button>
           </div>

        </Link>
    )
}

export default memo(Product)