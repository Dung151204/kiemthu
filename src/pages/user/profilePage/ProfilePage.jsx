import { useState } from "react"
import {avatar} from "../../../assets/index"

const ProfilePage = ()=>{
    const [name,setName] = useState("Duc Anh")
    const [email,setEmail] = useState("chucongducanh@hmail.com")
    const [phone,setPhone] = useState("0987654321")
    const [address,setAddress] = useState("Ha Noi")
    return (
        <div className="w-[50%] min-h-[500px] m-auto flex-col">
            <div>
                <h2 className="text-center pt-2 pb-2 text-[20px] text-blue-700 font-medium uppercase">Thông tin tài khoản</h2>
            </div>
            <div className="min-h-[300px] border-t-2 border-b-2 p-8">
                <img className="w-[70px] m-auto mb-5" src={avatar} alt="" />
                <div className="flex items-center flex-wrap mb-2">
                    <p className="w-[150px] font-medium">Tên người dùng :</p>
                    <input className="flex-1 p-1 pl-4 border rounded-md outline-blue-400" type="text" onChange={e=>setName(e.target.value)} value={name} />
                </div>
                 <div className="flex items-center flex-wrap mb-2">
                    <p className="w-[150px] font-medium">Email :</p>
                    <input className="flex-1 p-1 pl-4 border rounded-md outline-blue-400" type="text" onChange={e=>setEmail(e.target.value)} value={email} />
                </div>
                <div className="flex items-center flex-wrap mb-2">
                    <p className="w-[150px] font-medium">Số điện thoại :</p>
                    <input className="flex-1 p-1 pl-4 border rounded-md outline-blue-400" type="text" onChange={e=>setPhone(e.target.value)} value={phone} />
                </div>
                 <div className="flex items-center flex-wrap mb-2">
                    <p className="w-[150px] font-medium">Địa chỉ :</p>
                    <input className="flex-1 p-1 pl-4 border rounded-md outline-blue-400" type="text" onChange={e=>setAddress(e.target.value)} value={address} />
                </div>
               <div className="flex justify-center">
                    <button className="bg-blue-500 min-w-[180px] mt-2 rounded-lg text-white p-1 pl-4 pr-4 cursor-pointer hover:opacity-90">
                        Lưu thay đổi
                    </button>
               </div>
            </div>
        </div>
    )
}
export default ProfilePage