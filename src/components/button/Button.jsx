import { memo } from "react"

 const Button = (prop)=>{
    return (
          <button 
                type="button"
                onClick={(e)=>{
                     e.preventDefault(); 
                     e.stopPropagation()
                }}
                className={` border border-[#ff0000] rounded bg-white   w-full md:w-auto hover:opacity-80 ${prop.style}`}
           >
             {prop.name}
          </button>
    )
}
export default memo(Button)