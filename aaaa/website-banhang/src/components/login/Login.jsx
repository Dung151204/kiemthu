import { IoCloseSharp } from "react-icons/io5";
import "./style.scss"
import { loginApiUser,getAccessTokenApiUser } from "../../service/userApiService";
import { useEffect, useState } from "react";
import { validateForm } from "./validateForm";
import { useToast } from "../../components/toastMessage/ToastMessage";
import { useDispatch } from "react-redux";
import guestCartSlice from "../../redux/guestCartSlice"
import authSlice from "../../redux/authSlice";
import { fetchCart } from "../../redux/userCartSlice";


const LoginModel = ({setShowLogin,showLogin,setShowRegister})=>{
    const [email,setEmail] = useState("")
    const [password,setPassWord] = useState("")
    const [validate,setValidate] = useState({})
    const {showToast} = useToast()
    const dispatch = useDispatch()

    const handelLogin  = async ()=>{
        const validate = validateForm({email,password}," ")
        setValidate(validate)
        if (Object.keys(validate).length === 0) {
            try {
                const dataServer = await loginApiUser({ email, password });
                showToast("Đăng nhập thành công");

                dispatch(
                    authSlice.actions.loginSuccess({
                        accessToken: dataServer.data.accessToken,
                        dataUser: dataServer.data.user,
                        role: dataServer.data.user.role,
                    })
                );

                dispatch(fetchCart(dataServer.data.accessToken))

                setShowLogin(false);
            } catch (err) {
                console.error(err);
                showToast("Login thất bại", "error");
            }
        } else {
            showToast("Lỗi thông tin", "error");
        }
    }
    
    
    return (
        <div onClick={()=>setShowLogin(false)} className=" bg-[#a19a9a56] absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center">
            <div onClick={(e)=>{e.stopPropagation()  }} className={ `${showLogin===true ? " show " : ""} modelLogin fixed shadow-xl rounded-lg w-[40%] min-h-[500px] bg-white m-auto mt-10 pl-3 pr-3`}>
                  <h2 className=" text-center p-4 text-[30px] font-bold text-blue-700 uppercase">Đăng Nhập</h2>
                  <div className=" flex flex-col">
                        <span className="mt-3 mb-2 font-medium">Email / Số điện thoại</span>
                        <input value={email || ""} onChange={e=>setEmail(e.target.value)} className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="text" placeholder="abc@gmail.com"/>
                  </div>
                  <p className="text-[12px] text-red-500">{validate.email}</p>

                  <div className="mt-3 pt-0 flex flex-col">
                        <span className="mb-2 font-medium">Mật khẩu</span>
                        <input value={password || ""} onChange={e=>setPassWord(e.target.value)} className="outline-blue-400 pt-1 pb-1 pl-3 rounded-lg flex-1 border border-solid border-[#ccc]" type="password" placeholder="Điền tại đây"/>
                  </div>
                  <p className="text-[12px] text-red-500">{validate.password}</p>

                  <div className="mt-[80px] flex justify-center">
                    <button onClick={handelLogin} className="bg-blue-600 w-[80%] m-auto text-white rounded-lg p-2">Đăng nhập</button>
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