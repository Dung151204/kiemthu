
import { useEffect, useState, useTransition } from "react"
import { FilterNavbar,ListProduct } from "../../../components/index.jsx"

const ShirtPage = ()=>{
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

             },1000)
           return ()=>clearTimeout(timeoutID)
    },[])
    return (
        <div className="h-full flex">
            <FilterNavbar/>
            <div className="flex-1 pb-10">
                {/* {isPending ? <h2>Loading</h2> :  */}
                <ListProduct
                   loading = {loading}
                   name = "Áo"
                   data= {data}
                />
                {/* } */}
            </div>
        </div>
    )
}

export default ShirtPage
