import { memo } from "react"
import { useNavigate } from "react-router-dom";

 const Button = (prop)=>{
      const navigate = useNavigate()
    return (
          <button 
                type="button"
                onClick={(e)=>{
                     prop?.handelOnclick
                     e.preventDefault(); 
                     e.stopPropagation()
                     navigate(prop?.navigate)
                }}
               //  onClick={prop?.handelOnclick}
                className={` border rounded  w-full md:w-auto hover:opacity-80 ${prop.style}`}
           >
             {prop.name}
          </button>
    )
}
export default memo(Button)