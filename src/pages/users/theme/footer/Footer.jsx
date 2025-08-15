import "./style.scss"
import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="heading-footer flex flex-wrap justify-around">
                <div className="w-80 p-5">
                    <h2 className="text-[20px] font-normal uppercase">Gọi mua hàng (8:00-22:00)</h2>
                    <div className="flex items-center">
                        <FaPhone className="size-5 text-red-700 "/>
                        <p className="ml-2 text-[25px] font-medium">0987654321</p>
                    </div>
                    <p className="font-thin">tất cả các ngày trong tuần</p>
                </div>
                <div className="w-80 p-5 ">
                    <h2 className="text-[20px] font-normal uppercase">Theo dõi chúng tôi</h2>
                    <ul>
                        <li>
                            <Link  className="flex items-center mt-1 hover:underline" to="">
                                <FaFacebookSquare className="mr-2"/>
                                Facebook.com
                            </Link>
                        </li>
                         <li>
                            <Link className="flex items-center mt-1 hover:underline" to="">
                                <BsInstagram className="mr-2"/>
                                Instagram.com
                            </Link>
                        </li>
                         <li>
                            <Link className="flex items-center mt-1 hover:underline" to="">
                                <MdEmail className="mr-2"/>
                                shoptoranocs2@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-80 p-5 ">
                    <h2 className="text-[20px] font-normal uppercase">góp ý khiếu nại (8:30-17:00)</h2>
                    <div className="flex items-center">
                        <FaPhone className="size-5 text-red-700 "/>
                        <p className="ml-2 text-[25px] font-medium">0987654321</p>
                    </div>
                    <p className="font-thin">tất cả các ngày trong tuần</p>
                </div>
            </div>
            <div className="p-2 bg-[#f7f7f7]">
                <img src="/logo.png" alt="" className="w-40"/>
                <p className="mb-1 mt-2"><b className="mr-2">Địa chỉ :</b>175 Tây Sơn</p>
                <p className="mb-1"><b className="mr-2">Mã số doanh nghiệp :</b>toranoshop123</p>
                <p className="mb-2"><b className="mr-2">Email:</b>shoptorano@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer