import { memo } from "react"

 const Button = (prop)=>{
    return (
          <button 
                type="button"
                onClick={(e)=>{
                     e.preventDefault(); 
                     e.stopPropagation()
                }}
                className="border border-[#c23564] rounded hover:bg-[#c23564] hover:text-white bg-white text-[#c23564] p-1 pr-3 pl-3 float-right mt-3 mb-3 w-full md:w-auto hover:opacity-80"
           >
             {prop.name}
          </button>
    )
}
export default memo(Button)