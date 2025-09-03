import { generatePath, Link } from "react-router-dom"
import { IoMdReturnLeft } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { chitiet1 } from "../../../assets/index";
import { useState } from "react";
import { Button } from "../../../components/index";
const OrderPage = ()=>{
    const [quatity,setQuatity] = useState(1)
        const handelQuatity = (e)=>{
            e.target.innerText === "+" ? setQuatity(prev=>prev+1) : setQuatity(quatity != 0 ? prev=>prev-1 : 0)
            
            e.stopPropagation()
            e.preventDefault()
        }
    return (
        <div className="min-h-[400px] p-4 w-[84%] m-auto">
            <div className="flex">
                <div className="w-[50%] min-h-[300px] bg-white p-2">
                    <h2 className="text-[24px] font-bold   mb-2 ml-2 text-center text-blue-600">Thông tin đặt hàng</h2>
                    <form action="" className=" flex flex-wrap gap-2">
                       <input className="outline-none rounded-t-md border p-1 pl-3 flex-[1_0_5rem]" type="text" placeholder="Họ tên" />
                       <input className="outline-none rounded-t-md border p-1 pl-3 flex-[1_0_5rem]" type="text" placeholder="Email" />
                       <input className="outline-none rounded-t-md border p-1 pl-3 flex-[1_0_100%]" type="text" placeholder="Số điện thoại" />
                       <input className="outline-none rounded-t-md border p-1 pl-3 flex-[1_0_100%]" type="text" placeholder="Địa chỉ" />
                       <textarea className="outline-none rounded-t-md border p-1 pl-3 flex-[1_0_100%] h-[100px]" type="text" placeholder="Ghi chú" />
                    </form>
                    <div>
                       <div className="flex items-center mt-2 flex-wrap">
                         <p className="font-medium ">Hình thức thanh toán</p>
                         <p className="text-[13px] text-[#bbb] ml-2 font-medium">( Mặc định là trả sau khi nhận )</p>
                       </div>
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <p className="text-[13px] text-[#aaa] ml-2 font-medium">Thanh sau trước khi nhận hàng</p>
                        </div>
                       
                       
                    </div>
                </div>
                <div className=" min-h-[400px] flex-1">
                        <ul className="flex-1 mr-3 mb-3">
                            <li className=' mt-2 mb-3 min-w-[346px] min-h-[70px] pl-2 pr-1 border-b border-solid border-[#ddd] '>
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
                        <div className="pl-20 pr-20 flex flex-col">
                            <div className="flex justify-between">
                                <p className="w-[100px]">Tạm tính :</p>
                                <p className="font-medium text-blue-600 text-[18px]">300.000đ</p>
                            </div>
                             <div className="flex justify-between">
                                <p className="w-[100px]">Vận chuyển :</p>
                                <p className="font-medium text-blue-600 text-[18px]">20.000đ</p>
                            </div>
                             <div className="flex justify-between">
                                <p className="w-[100px]">Giảm giá :</p>
                                <p className="font-medium text-blue-600 text-[18px]"> - 0đ</p>
                            </div>
                             <div className="flex justify-between mt-2 border-t-[3px] pt-2">
                                <p className="w-[100px]">Tổng thanh toán :</p>
                                <p className="font-medium text-blue-600 text-[18px]">320.000đ</p>
                            </div>
                            <Button
                                name="Hoàn tất đặt hàng"
                                style = "p-1 pl-10 pr-10 border-[#ff0000] bg-[#ff0000] text-white mt-9"
                            />
                             <Link to={"/detailCart"}>
                                <p className="text-blue-600 font-medium mt-8 flex items-center">
                                    <IoMdReturnLeft/>
                                    <span className="ml-2 underline">Quay lại giỏ hàng</span>
                                </p>
                            </Link>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}
export default OrderPage