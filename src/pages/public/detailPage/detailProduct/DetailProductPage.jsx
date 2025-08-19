import "./style.scss"
import { SwiperSlide } from "swiper/react"
import { useState } from "react"
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import  Slider  from "../../../../components/slider/Slider.jsx"
import {Button} from "../../../../components/index.jsx"
import {sanpham,chitiet1,chitiet2,chitiet3,chitiet4,chitiet5,chitiet6,chitiet7,chitiet8} from "../../../../assets/index"

const product = [chitiet1,chitiet2,chitiet3,chitiet4,chitiet5,chitiet6,chitiet7,chitiet8]
const sizes = ["S","M","L","XL","XXL"]
const colors = ["Xanh sky","Trắng","Đen","Xanh rêu",]

const DetailProductPage = ()=>{
    const [currentImg,setCurrentImg] = useState(sanpham)
    const [size,setSize] = useState("")
    const [color,setColor] = useState("")
    const [quatity,setQuatity] = useState(1)
    return (
        <div>
            <div className="min-h-[500px] flex flex-col md:flex-row border-b border-[#ccc] border-solid">
                <div className="pb-10  flex flex-col items-center w-full md:w-[40%] h-full  border-r border-[#ccc]">
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
                                        <img onClick={()=>setCurrentImg(dataitem)} className="w-[55px] h-[55px] hover:cursor-pointer" src={dataitem} alt="" />
                                    </SwiperSlide>
                                ))}
                        </Slider>
                    </div>
                </div>
                <div className="ml-2">
                    <div className="ml-[15px] mr-[15px]">
                        <h2 className="text-[26px] font-medium">Áo T shirt trơn in logo ngực FSTS001</h2>
                        <div className="flex justify-between text-[13px]">
                            <div>
                                <span>Mã sản phẩm :</span>
                                <span className="font-medium"> FSTS00112CT00SB_GR-XL</span>
                            </div>
                            <div>
                                <span className="ml-3">Tình trạng :</span>
                                <span className="font-medium" > Còn hàng</span>
                            </div>
                            <div>
                                <span className="ml-3">Thương hiệu : </span>
                                <span className="font-medium"> TORANO </span>
                            </div>

                        </div>
                        {/* Giá */}
                        <div className="flex justify-between pt-[15px] pb-[15px] bg-[#fafafa] mt-5 mb-9">
                            <p className="font-medium w-[120px] m-auto ">Giá :</p>
                            <div className="w-full flex justify-start items-center ">
                                <p className="mr-[15px] text-[20px] text-[#ff0000] font-semibold">149,000đ</p>
                                <p className="mr-[15px] text-[16px] line-through">200,000đ</p>
                                <p className="text-[10px] text-white bg-[#ff0000] rounded-xl pl-1 pr-1">-26%</p>
                            </div>
                        </div>
                        {/* Màu sắc */}
                        <div className="flex justify-between  mb-8">
                            <p className="font-medium w-[120px] m-auto">Màu sắc :</p>
                            <div className="w-full  ">
                                <ul className="mr-0 flex flex-wrap max-w-[400px]">
                                {
                                    colors.map((itemColor,index)=>(
                                        <li 
                                        key={index}
                                        onClick={()=>setColor(itemColor)}
                                        className={`hover:cursor-pointer min-w-[50px] text-center p-1 pr-2 pl-2 mr-2 mb-2 border-2 border-solid border-[#bbb] ${itemColor === color ? "border-[#ff0000] text-[#ff0000]":""}`}
                                        >
                                            {itemColor}
                                        </li>
                                    ))
                                }
                                
                                </ul>
                            </div>
                        </div>
                        {/* Kích thước  */}
                        <div className="flex justify-between mb-8">
                            <p className="font-medium w-[120px] m-auto">Kích thước :</p>
                            <div className="w-full">
                                <ul className="mr-0 flex flex-wrap">
                                {
                                    sizes.map((itemSize,index)=>(
                                        <li 
                                        key={index}
                                        onClick={()=>setSize(itemSize)}
                                        className={`hover:cursor-pointer min-w-[46px] text-center p-1 pr-2 pl-2 mr-2 border-2 border-solid border-[#bbb] ${itemSize === size ? "border-[#ff0000] text-[#ff0000]":""}`}
                                        >
                                            {itemSize}
                                        </li>
                                    ))
                                }
                                
                                </ul>
                            </div>
                        </div>
                        {/* Số lượng */}
                        <div className="flex  mb-4">
                            <p className="font-medium w-[120px] m-auto">Số lượng :</p>
                            <div className="w-full ">
                                <div className="w-[150px] h-[30px] flex items-center  border border-solid border-[#ddd]">
                                    <button onClick={()=>setQuatity(quatity != 0 ? prev=>prev-1 : 0)} className=" pl-4 pr-4 h-full border border-solid border-r-[#ccc] font-bold ">-</button>
                                    <span className="pl-5 pr-5 text-center font-bold w-full">{quatity}</span>
                                    <button onClick={()=>setQuatity(prev=>prev+1)} className=" pl-4 pr-4 h-full border border-solid border-l-[#ccc] font-bold ">+</button>
                                
                                </div>
                            </div>
                        </div>
                        {/* Thêm vào giỏ hàng */}
                        <div className="flex flex-wrap w-full  justify-between mb-1 lg:mt-10">
                            <Button 
                                name ="Thêm vào giò hàng"
                                style = "p-2 pl-4 pr-4 min-w-[240px] text-[#ff0000] mt-3"
                            />
                            <Button 
                                name ="Mua ngay"
                                style = "p-2 pl-4 pr-4 bg-[#e70505] text-white min-w-[240px] mt-3"
                            />
                        </div>
                        <div className="">
                            <Button 
                                name ="Nhận ưu đãi tại đây"
                                style = "p-2 bg-[#333333] text-white mt-2 md:w-full border-[#333333]"
                            />
                        </div>
                        <div className="mt-5 flex">
                            <p>Chia sẻ :</p>
                            <div className="text-[20px] flex ml-2">
                                <FaFacebookSquare className="text-blue-700 mr-1"/>
                                <FaFacebookMessenger className="text-blue-500 mr-1"/>
                                <FaTwitter className="text-blue-400 mr-1"/>
                                <FaPinterest className="text-red-500 mr-1"/>
                                <FaLink className="text-blue-600"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] min-h-[100px] m-auto  pt-4">
                <div>
                    <h2 className="text-[16px] font-medium">Chi tiêt sản phẩm :</h2>
                    <p>𝐀𝐓𝐈𝐍𝐎 “𝐀 𝐒𝐞𝐧𝐬𝐞 𝐎𝐟 𝐄𝐥𝐞𝐠𝐚𝐧𝐜𝐞”

                        𝐂𝐡𝐢 𝐓𝐢𝐞̂́𝐭 𝐒𝐚̉𝐧 𝐏𝐡𝐚̂̉𝐦:

                        - Form Regular-Fit thoải mái, trẻ trung vừa phải phù hợp với mọi dáng người
                        - ATINO sử dụng vải lụa 100D với thành phần 100% polyester không sợ bị nhăn, dễ dàng làm sạch và có độ bền màu vô cùng cao
                        - Màu sắc: Đen, Trắng, Be.
                        - Size: M, L, XL, XXL

                        𝐇𝐮̛𝐨̛́𝐧𝐠 𝐃𝐚̂̃𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐕𝐚̀ 𝐁𝐚̉𝐨 𝐐𝐮𝐚̉𝐧:

                        - Giặt máy ở chế độ nhẹ, nhiệt độ thường. Giặt với sản phẩm cùng màu
                        - Không ngâm lâu trong xà phòng
                        - Không sử dụng hóa chất tẩy
                        - Phơi mặt trái của áo và phơi trong bóng râm
                        - Hạn chế sấy áo. Là áo ở nhiệt độ thường.

                        𝐀𝐓𝐈𝐍𝐎 𝐂𝐚𝐦 𝐊𝐞̂́𝐭:

                        - Chất lượng dịch vụ trước và sau bán hàng được ưu tiên hàng đầu
                        - ATINO hoàn toàn chịu trách nhiệm nếu sản phẩm đến tay khách hàng không như kỳ vọng
                        - Chính Sách Bảo Hành sản phẩm 14 ngày
                        - Miễn Phí Đổi Trả lên đến 30 ngày
                        - 100% hình ảnh do Team ATINO thực hiện
                        - Chất lượng sản phẩm được chứng nhận theo Quy chuẩn Quốc gia
                        - Sản phẩm bao gồm đầy đủ tem, nhãn, mác, bao bì
                        - Sản phẩm Made in Viet Nam. Chính hãng ATINO.

                        𝐂𝐡𝐢́𝐧𝐡 𝐒𝐚́𝐜𝐡 Đ𝐨̂̉𝐢 𝐓𝐫𝐚̉ 𝐒𝐚̉𝐧 𝐏𝐡𝐚̂̉𝐦:
                        - Thời gian đổi trả hàng: 30 ngày được tính từ ngày nhận hàng
                        - Sản phẩm mới còn nguyên tem nhãn mác, bao bì sản phẩm
                        - Sản phẩm không bị dơ bẩn, chưa giặt, chưa qua sử dụng, chưa qua sửa chữa
                        - Đổi sang sản phẩm mới hoặc đơn hàng mới có giá trị lớn hơn hoặc bằng giá trị đơn hàng đã mua
                        - Sản phẩm giao nhầm hoặc bị lỗi do vận chuyển và do nhà sản xuất
                        - Sản phẩm quần lót, tất, phụ kiện và sản phẩm tặng kèm không được thực hiện chính sách đổi hàng.

                        𝐋𝐮̛𝐮 𝐘́: Nếu bạn gặp bất cứ vấn đề gì về sản phẩm, xin đừng vội đánh giá, hãy liên hệ lại ngay với ATINO để được hỗ trợ một cách chu đáo nhất! ATINO xin cảm ơn.
                    </p>
                </div>
                <div>
                    <p className="text-[18px] font-medium">Đánh giá sản phẩm</p>
                    <div className=" border-t border-solid border-[#ccc] min-h-[100px]">
                       <div className="flex items-start">
                            <p className="w-[170px]  mt-2  text-center">0/5</p>
                            <div className="flex flex-wrap">
                                <div className="w-[100px]  mt-2 border border-solid border-black text-center mr-2">Tất cả</div>
                                <div className="w-[100px]  mt-2 border border-solid border-black text-center flex items-center justify-center mr-2">5 <FaStar className="text-yellow-400 ml-1"/></div>
                                <div className="w-[100px]  mt-2 border border-solid border-black text-center flex items-center justify-center mr-2">4 <FaStar className="text-yellow-400 ml-1"/></div>
                                <div className="w-[100px]  mt-2 border border-solid border-black text-center flex items-center justify-center mr-2">3 <FaStar className="text-yellow-400 ml-1"/></div>
                                <div className="w-[100px]  mt-2 border border-solid border-black text-center flex items-center justify-center mr-2">2 <FaStar className="text-yellow-400 ml-1"/></div>
                                <div className="w-[100px]  mt-2 border border-solid border-black text-center flex items-center justify-center mr-2">1 <FaStar className="text-yellow-400 ml-1"/></div>
                                
                            </div>
                       </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default DetailProductPage