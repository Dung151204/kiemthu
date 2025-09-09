import { useEffect, useState } from "react"
import { FilterNavbar,ListProduct } from "../../../components/index.jsx"
import { Breadcrumb } from "../../../components/index.jsx";
const productPage = ()=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [dataFilter,setDataFilter] = useState({
            category:[],
            size : [],
            price:300000,
            arrange:"1"
    })
    useEffect(()=>{
                fetch("/api/product")
                    .then((res)=>res.json())
                    .then((dt)=>{
                        let dataByFilter = dt.data.filter(product=>product.price <= dataFilter.price)  //lọc theo giá sp
                        if(dataFilter.category.length !==0 ){  //Lọc theo loại sp
                             dataByFilter = dataByFilter.filter(product=>dataFilter.category.includes(product.category.categoryName))
                        }
                        if(dataFilter.size.length !==0){ //lọc theo size sp
                           dataByFilter = dt.data.filter(product => {
                                // lấy tất cả size của sản phẩm
                                const listSize = product.options.flatMap(opt =>
                                     opt.sizeQuantity.map(sq => sq.size)
                                );
                                const sizes = [...new Set(listSize)]; // loại bỏ trùng
                                // kiểm tra xem product có đủ toàn bộ size yêu cầu không
                                return dataFilter.size.some(size => sizes.includes(size));
                            });
                        }
                        if(dataFilter.arrange !=="1"){ //Lọc theo sắp xếp tăng/giảm
                            if(dataFilter.arrange ==="2"){
                                dataByFilter = [...dataByFilter].sort((a,b)=>b.price - a.price)
                            }
                            else{
                                dataByFilter = [...dataByFilter].sort((a,b)=>a.price - b.price)
                            }
                        }
                        setData(dataByFilter)
                        setLoading(false)
                    })
                    .catch((err) => {
                        console.error("Fetch error:", err);
                        setLoading(false);
                    }
                );
    },[dataFilter])
    
    const handelFilterChange = (value)=>{   //xử lý khi có filter thay đổi
        setDataFilter(value)
    }
    return (
        <div>
            <Breadcrumb nameCurrent = "Sản phẩm"/>
            <div className="h-full flex">
                <FilterNavbar
                    handelFilterChange={handelFilterChange}
                    name="" 
                />
                {/* <div className="flex justify-end p-3">
                        <button onClick={()=>setShowFilter(true)} className="flex items-center pl-2 pr-2 rounded-md border border-solid border-[#ccc]">
                            <p>Lọc sản phẩm</p>
                            <LuFilter className="block md:hidden ml-1"/>
                        </button>
                 </div> */}
                <div className="flex-1 pb-10 pl-3 pr-3">
                    <ListProduct
                        handelFilterChange={handelFilterChange}
                        dataFilter={dataFilter}
                        loading = {loading}
                        name = "Sản phẩm"
                        data= {data}
                    />
                </div>
            </div>
        </div>
    )
}

export default productPage