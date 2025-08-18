import  Slider  from "../../../../components/slider/Slider.jsx"
import "./style.scss"
import {sanpham,chitiet1,chitiet2,chitiet3,chitiet4,chitiet5,chitiet6,chitiet7,chitiet8} from "../../../../assets/index"
import { SwiperSlide } from "swiper/react"
import { useState } from "react"

const product = [
    chitiet1,chitiet2,chitiet3,chitiet4,chitiet5,chitiet6,chitiet7,chitiet8
]
const DetailProductPage = ()=>{
    const [currentImg,setCurrentImg] = useState(sanpham)
    return (
        <div className="min-h-[200px] flex ">
            <div className="pb-10 flex flex-col items-center w-[40%] h-full bg-green-300">
                {/* <img src={currentImg} className="w-[80%] h-[500px] mb-5" alt="" /> */}
                <div
                    className="imgProduct bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${currentImg})` }}
                ></div>
                <div className="w-full slider-detail">
                        <Slider
                            className = 'w-[60%] h-auto'
                            time = {5000}
                            autoPlay = {false}
                            slidesPerView = {6}
                            spaceBetween={0}
                            pagination={false}
                        >
                        { product.map((dataitem,index)=>(
                                <SwiperSlide key={index}>
                                    <img onClick={()=>setCurrentImg(dataitem)} className="w-[55px] h-[55px] " src={dataitem} alt="" />
                                </SwiperSlide>
                            ))}
                    </Slider>
                 </div>
            </div>
            <div>
                infomation
            </div>
        </div>
    )
}
export default DetailProductPage