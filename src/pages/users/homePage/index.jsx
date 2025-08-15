import 'swiper/css';
import { Link } from "react-router-dom"
import { useState } from "react"
import {slider1,slider2,slider3,slider4,fullset1,fullset2,fullset3} from "../../../assets/index.jsx"
import { Slider , Product } from "../../../components/index.jsx"
import { SwiperSlide } from 'swiper/react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi2";


const listSliderImg = [slider1,slider2,slider3,slider4]
const data  = [1,2,3,4,5,6,7,8]
const listOufit = [
    {
        id:1,
        name:"outfit trẻ trung",
        img: fullset1
    },
     {
        id:2,
        name:"outfit trưởng thành",
        img: fullset2
    },
     {
        id:1,
        name:"outfit đi chơi",
        img: fullset3
    },
]

const HomePage = ()=>{
    return (
        <div className="min-h-[300px] w-[100%]">
             <Slider
                className = 'w-full'
                // data={listSliderImg}
                time = {5000}
                autoPlay = {true}
                slidesPerView = {1}
             >
                { listSliderImg.map((dataitem,index)=>(
                        <SwiperSlide key={index}><img className="w-full" src={dataitem} alt="" /></SwiperSlide>
                    ))}
             </Slider>

             <div className="container w-[90%] min-h-[800px] m-auto ">
                   <div className="contentProduct pt-[20px]">
                       <h2 className="title tracking-widest uppercase w-full text-center underline text-[20px] mt-10">Top sản phẩm tuần</h2>
                       <div className='mt-5'>
                           <Slider
                                className = 'w-[80%] h-[416px] '
                                // data={listSliderImg}
                                time = {5000}
                                autoPlay = {true}
                                slidesPerView = {4}
                                spaceBetween={20}
                            >
                                { data.map((dataitem,index)=>(
                                        <SwiperSlide key={index}>
                                            <div className=" w-[240px]">
                                               <Product/>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Slider>
                       </div>
                   </div>
                   <div className='contentProduct relative'>
                       <h2 className="title tracking-widest uppercase w-full text-center underline text-[20px] mt-10 ">danh mục sản phẩm</h2>
                       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8'> 
                            {data.map(()=>(
                                <div className=" w-[100%]">
                                    <Product/>
                                </div>
                            ))}
                       </div>
                       <Link to={"/thong-tin-ca-nhan"} className='mt-8 absolute right-0 top-0 hover:cursor-pointer hover:text-[#c23564] hover:underline'>Xem thêm sản phẩm</Link>
                   </div>
                   <div className='containerProduct mb-10'>
                       <h2 className="title tracking-widest uppercase w-full text-center underline text-[20px] mt-10 mb-6">Outfit of the day</h2>
                       <div className='containerFullset grid grid-cols-3 gap-3'>
                            {listOufit.map((outfit)=>(
                                <div key={outfit.id} className='outfit-product min-h-[300px] w-[100%]   shadow-lg'>
                                    <img src={outfit.img} alt="" />
                                    <p className='uppercase mt-2 mb-2 ml-2'>{outfit.name}</p>
                                    <button className="border border-[#c23564] rounded bg-white text-[#c23564] p-2 pr-4 pl-4 mb-4 ml-2">Quan tâm</button>
                                </div>
                            ))}
                       </div>
                   </div>
                   <div className='supportProduct flex justify-between mb-[60px] mt-[60px]'>
                       <div className='flex items-center h-[70px] '>
                          <LiaShippingFastSolid className='text-[40px]'/>
                          <div className='ml-3'>
                            <p>Miễn phí vận chuyển</p>
                            <p>Áp dụng cho mọi đơn hàng từ 500k</p>
                          </div>
                       </div>
                       <div className='flex items-center h-[70px] '>
                          <BsBoxSeam className='text-[40px]'/>
                          <div className='ml-3'>
                            <p>Miễn phí vận chuyển</p>
                            <p>Áp dụng cho mọi đơn hàng từ 500k</p>
                          </div>
                       </div>
                        <div className='flex items-center h-[70px] '>
                          <MdOutlineSupportAgent className='text-[40px]'/>
                          <div className='ml-3'>
                            <p>Miễn phí vận chuyển</p>
                            <p>Áp dụng cho mọi đơn hàng từ 500k</p>
                          </div>
                       </div>
                        <div className='flex items-center h-[70px] '>
                          <HiOutlineCreditCard className='text-[40px]'/>
                          <div className='ml-3'>
                            <p>Miễn phí vận chuyển</p>
                            <p>Áp dụng cho mọi đơn hàng từ 500k</p>
                          </div>
                       </div>
                   </div>
             </div>

        </div>
    )
}

export default HomePage