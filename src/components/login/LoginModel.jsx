import { IoCloseSharp } from "react-icons/io5";
import "./style.scss"
const LoginModel = ({setShowLogin,showLogin,setShowRegister})=>{
    return (
        <div onClick={()=>setShowLogin(false)} className=" bg-[#a19a9a56] absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center">
            <div onClick={(e)=>{e.stopPropagation()  }} className={ `${showLogin===true ? " show " : ""} modelLogin fixed shadow-xl rounded-lg w-[40%] min-h-[500px] bg-white m-auto mt-10 pl-3 pr-3`}>
                  <h2 className=" text-center p-4 text-[30px] font-bold text-blue-700 uppercase">Đăng Nhập</h2>
                  <div className=" flex flex-col">
                        <span className="mt-3 mb-2 font-medium">Email / Số điện thoại</span>
                        <input className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="text" placeholder="abc@gmail.com"/>
                  </div>
                  <div className="mt-3 pt-0 flex flex-col">
                        <span className="mb-2 font-medium">Mật khẩu</span>
                        <input className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="password" placeholder="Điền tại đây"/>
                  </div>
                  <div className="mt-[80px] flex justify-center">
                    <button className="bg-blue-600 w-[80%] m-auto text-white rounded-lg p-2">Đăng nhập</button>
                  </div>
                  <div className="flex justify-around mt-10">
                     <p>Quên mật khẩu</p>
                     <p>Bạn chưa có tài khoản ?
                        <span onClick={()=>{setShowRegister(true); setShowLogin(false) }} className="underline text-blue-400 cursor-pointer"> Đăng kí</span>
                     </p>
                  </div>
                <IoCloseSharp onClick={()=>setShowLogin(false)} className="absolute top-2 right-2 text-[24px] hover:bg-red-500 hover:cursor-pointer"/>
            </div>
        </div>
    )
}
export default LoginModel