import { generatePath, Link } from "react-router-dom"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useEffect, useState } from "react"
import { Breadcrumb } from "../../../components/index"
import { getApiBlog } from "../../../service/blogApiService"
const NotificationPage = ()=>{
    const [dataNoti,setDataNoti] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        getApiBlog()
        .then((dt)=>{
            setDataNoti(dt.data)
            setIsLoading(false)
        })
    },[])
    return (
        <div>
            <Breadcrumb nameCurrent = "Thông báo"/>
           {
            isLoading ? 
                <div className=" mt-10 w-full mb-10"><AiOutlineLoading3Quarters className="animate-spin text-center m-auto text-[28px] text-blue-500"/></div>
                :
                <div className="gap-2 flex flex-wrap justify-center w-full pt-3 pb-6">
                {
                    dataNoti.map(noti=>(
                        
                        <Link key={noti._id} to={generatePath("/detailNotification/:id",{id:noti._id})} className=" w-[400px] h-[280px] overflow-hidden rounded-lg shadow-xl">
                            <img className="h-[90%] w-full" src={noti.image} alt="" />
                            <p className="text-center uppercase">{noti.title}</p>
                        </Link>
                
                    ))
                }
                </div>
            }
        </div>
    )
}

export default NotificationPage