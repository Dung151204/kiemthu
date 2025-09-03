import { IoCloseSharp } from "react-icons/io5";
import "./style.scss"
const Register = ({setShowRegister,showRegister,setShowLogin})=>{
    return (
        <div onClick={()=>setShowRegister(false)} className=" bg-[#a19a9a56] absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center">
            <div onClick={(e)=>{e.stopPropagation()  }} className={ `${showRegister===true ? " show " : ""} modelLogin fixed shadow-xl rounded-lg min-w-[40%]  bg-white m-auto mt-10 pl-3 pr-3 pb-10`}>
                  <h2 className=" text-center p-4 text-[30px] font-bold text-blue-700 uppercase">Đăng KÝ</h2>
                  <div className=" flex">
                        <span className="mt-3 mb-2 font-medium min-w-[160px] ">Email :</span>
                        <input className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="text" placeholder="Email"/>
                  </div>
                  <div className=" flex">
                        <span className="mt-3 mb-2 font-medium min-w-[160px]">Số điện thoại :</span>
                        <input className="outline-blue-400 mt-2 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="text" placeholder="Số điện thoại"/>
                  </div>
                  <div className=" flex">
                        <span className="mt-3 mb-2 font-medium min-w-[160px]">Họ và tên :</span>
                        <input className="outline-blue-400 mt-2 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="text" placeholder="Họ và tên"/>
                  </div>
                  <div className="mt-3 pt-0 flex">
                        <span className="mb-2 font-medium min-w-[160px]">Mật khẩu :</span>
                        <input className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="password" placeholder="Mật khẩu"/>
                  </div>
                  <div className="mt-3 pt-0 flex">
                        <span className="mb-2 font-medium min-w-[160px]">Nhập lại mật khẩu :</span>
                        <input className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="password" placeholder="Nhập lại mật khẩu"/>
                  </div>
                  <div className="flex justify-center p-5 border-b border-solid border-[#ccc]">
                    <button className="bg-blue-600 w-[80%] m-auto text-white rounded-lg p-2">Đăng nhập</button>
                  </div>
                  <div className="flex justify-around mt-2">
                     <p>
                        Bạn đã có tài khoản ? 
                        <span onClick={()=>{setShowLogin(true); setShowRegister(false)}} className="cursor-pointer underline text-blue-400"> Đăng nhập</span>

                     </p>
                  </div>
                <IoCloseSharp onClick={()=>setShowRegister(false)} className="absolute top-2 right-2 text-[24px] hover:bg-red-500 hover:cursor-pointer"/>
            </div>
        </div>
    )
}
export default Register