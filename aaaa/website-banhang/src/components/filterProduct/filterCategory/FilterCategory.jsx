import { memo, useState } from "react"
import { IoIosArrowForward } from "react-icons/io";
import "./style.scss"



const FilterCategory = (prop)=>{
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className={`container-filter ${ isOpen ? `show`:``}`}>
            <button onClick={()=>setIsOpen(!isOpen)}  className="flex items-center justify-start w-full p-2">
                <IoIosArrowForward className={`arrowFilter ${isOpen ? `arrowRote` : ``}`}/>
                <p className="ml-2">{prop.name}</p>
            </button>
            { prop.children}
        </div>
    )
}

export default memo(FilterCategory)