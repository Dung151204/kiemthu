import { Link } from "react-router-dom"
import { vanchuyen,baomat,doitra,tamnhin } from "../../../assets/index"
const NotificationPage = ()=>{
    return (
        <div className="p-10 flex flex-wrap justify-around w-full">
            
             <Link to={"/"} className=" w-[400px] h-[280px] overflow-hidden rounded-lg shadow-xl">
                <img className="h-[90%] w-full" src={baomat} alt="" />
                <p className="text-center uppercase">chính sách bảo mật</p>
            </Link>
              <Link to={"/"} className=" w-[400px] h-[280px] overflow-hidden rounded-lg shadow-xl">
                <img className="h-[90%] w-full" src={vanchuyen} alt="" />
                <p className="text-center uppercase">chính sách vận chuyển</p>
            </Link>
              <Link to={"/"} className=" w-[400px] h-[280px] overflow-hidden rounded-lg shadow-xl">
                <img className="h-[90%] w-full" src={doitra} alt="" />
                <p className="text-center uppercase">chính sách đổi trả</p>
            </Link>
            <Link to={"/"} className=" w-[400px] h-[280px] overflow-hidden rounded-lg shadow-xl mt-10">
                <img className="h-[90%] w-full" src={tamnhin} alt="" />
                <p className="text-center uppercase">Tầm nhìn của Torano</p>
            </Link>
             
        </div>
    )
}

export default NotificationPage