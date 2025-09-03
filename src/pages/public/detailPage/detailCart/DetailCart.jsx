import { generatePath, Link } from "react-router-dom";
import { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

import { chitiet1 } from "../../../../assets/index"
import { MdDeleteOutline } from "react-icons/md";
import  {Button} from "../../../../components/index";


const DetailCart = ()=>{
    const [quatity,setQuatity] = useState(1)
    const handelQuatity = (e)=>{
        e.target.innerText === "+" ? setQuatity(prev=>prev+1) : setQuatity(quatity != 0 ? prev=>prev-1 : 0)
        
        e.stopPropagation()
        e.preventDefault()
    }
    return (
        <div className="min-h-[400px] p-4 w-[84%] m-auto">
            <div className="flex items-center border-b pb-3">
                <h2 className="uppercase mr-2 text-[20px] font-medium">Chi tiết giỏ hàng</h2>
                <p>( bạn đang có <span className="font-bold">1</span> sản phẩm trong giỏ hàng )</p>
            </div>
            <div className="flex justify-between flex-wrap  mt-4">
                <ul className="flex-1 mr-3 mb-3">
                     <li className=' mt-1 min-w-[346px] h-[70px] pl-1 pr-1 border-b border-solid border-[#ddd] '>
                        <Link to={generatePath("/detailProduct/:id",{id:1})} className='flex items-center'>
                            <img src={chitiet1} className='w-[60px]' alt="" />
                            <div className='flex items-center justify-between w-full text-[13px] pl-1 pr-1'>
                                <div>
                                    <p className='text-[15px] font-medium'>Áo polos dành cho nam</p>
                                <div className='flex'>
                                         <p>size : <span className='font-medium'>M</span></p>
                                         <p className='ml-4'>Màu : <span className='font-medium' >Đỏ</span></p>
                                </div>
                                <div className=''>
                                     <p>Giá :<span className='text-[15px] font-medium'>120,000đ</span></p>
                                </div>
                                </div>
                               <div className="flex items-center">
                                     <div className="flex">
                                        {/* <div className="w-[40px] "> */}
                                            <div className="w-auto h-[30px] flex items-center justify-between  border border-solid border-[#ddd]">
                                                <button onClick={(e)=>handelQuatity(e)} className=" pl-2 pr-2 h-full border border-solid border-r-[#ccc] font-bold ">-</button>
                                                <span className="w-[20px] text-center font-bold">{quatity}</span>
                                                <button onClick={(e)=>handelQuatity(e)} className=" pl-[7px] pr-[7px] h-full border border-solid border-l-[#ccc] font-bold ">+</button>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                    <div onClick={(e)=>{e.stopPropagation(); e.preventDefault()}} className='p-2 hover:bg-red-300'>
                                                <MdDeleteOutline className='text-[22px] '/>
                                    </div>
                               </div>
                            </div>
                        </Link>
                     </li>
                </ul>
                <div className="flex-1 min-w-[262px] min-h-[200px]">
                    <div className=" bg-[#eee] p-3">
                        <p className="uppercase font-medium text-[16px]">Tóm tắt đơn hàng</p>
                        <p className="text-[14px]">Chưa bao gồm phí ship và mã giảm giá (nếu có)</p>
                        <div className="flex justify-between mt-2 pb-4 border-b border-[#ccc]">
                            <p className="font-medium">Tổng tiền</p>
                            <p className="text-[18px] font-bold text-blue-500">999,000đ</p>
                        </div>
                        <p className="text-[14px] mt-3">Có thể nhập mã giảm giá ở phần thanh toán</p>
                        <div className="flex flex-col">
                           {/* <Link to={"/orderProduct"}> */}
                                  <Button
                                    navigate = "/orderProduct"
                                    name = "Tiến hành đặt hàng"
                                    style = "uppercase border-[#ff0000] bg-[#ff0000] text-white w-full  p-1"
                                   />
                           {/* </Link> */}
                            {/* <Link to={"/product"}> */}
                                    <Button
                                    navigate = "/product"
                                    name = "Mua thêm sản phẩm"
                                    style = "uppercase border-black mt-3 p-1"
                                    />
                            {/* </Link> */}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mt-3">
                            <LiaShippingFastSolid className="text-[20px]"/>
                            <p className="uppercase ml-3">Giao hàng trong 24 giờ</p>
                        </div>
                         <div className="flex items-center mt-3">
                            <MdOutlineCurrencyExchange className="text-[20px]"/>
                            <p className="uppercase ml-3">đổi trả trong vòng 30 ngày</p>
                        </div>
                         <div className="flex items-center mt-3">
                            <MdOutlineSupportAgent className="text-[20px]"/>
                            <p className="uppercase ml-3">tổng đài hỗ trợ : 0151852968</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailCart