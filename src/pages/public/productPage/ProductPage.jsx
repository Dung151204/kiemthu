import { useEffect, useState, useTransition } from "react"
import { FilterNavbar,ListProduct } from "../../../components/index.jsx"

const productPage = ()=>{
    const [data,setData] = useState([])
     const [loading,setLoading] = useState(true)

    useEffect(()=>{
           const timeoutID = setTimeout(()=>{
                fetch("/data.json")
                    .then((res)=>res.json())
                    .then((dt)=>{
                        setData(dt)
                        setLoading(false)
                    })
             },3000)
           return ()=>clearTimeout(timeoutID)
    },[])
   console.log(loading)
    return (
        <div className="h-full flex">
            <FilterNavbar/>
            <div className="flex-1 pb-10">
                {/* {isPending ? <h2>Loading</h2> :  */}
                <ListProduct
                   loading = {loading}
                   name = "Sản phẩm"
                   data= {data}
                />
                {/* } */}
            </div>
        </div>
    )
}

export default productPage