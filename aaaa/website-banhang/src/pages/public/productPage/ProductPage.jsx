
import { useEffect, useState } from "react"
import { Breadcrumb, FilterNavbar,ListProduct } from "../../../components/index.jsx"
import { getApiProduct } from "../../../service/productApiService.jsx"
const CategoryProductPage = ({category})=>{
    const [data,setData] = useState([])
     const [loading,setLoading] = useState(true)
     const [dataFilter,setDataFilter] = useState({
            category:[],
            size : [],
            price:300000,
            arrange:"1"
    })

    useEffect(()=>{
              if(!loading) setLoading(true)
             getApiProduct()
                    .then((dt)=>{
                        // Lọc theo Filter 
                        let dataByShirt = dt.data.filter(x=>x.category.categoryName.includes(category)) //Lọc sản phẩm Loại Áo
                        let dataByFilter = dataByShirt.filter(product=>product.price <= dataFilter.price) //Lọc theo giá 
                        if(dataFilter.category.length !==0 ){  //Lọc theo loại
                             dataByFilter = dataByFilter.filter(product=>dataFilter.category.includes(product.category.categoryName))
                        }
                        if(dataFilter.size.length !==0){  //Lọc theo size
                             dataByFilter = dataByShirt.filter(product => {
                                // lấy tất cả size của sản phẩm
                                const listSize = product.options.flatMap(opt =>
                                     opt.sizeQuantity.map(sq => sq.size)
                                );
                                const sizes = [...new Set(listSize)]; // loại bỏ trùng
                                console.log(sizes)
                                // kiểm tra xem product có đủ toàn bộ size yêu cầu không
                                return dataFilter.size.some(size => sizes.includes(size));
                            });
                        
                        }
                        if(dataFilter.arrange !=="1"){ //Lọc theo tăng/giảm giá
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
          
    },[dataFilter,category])

      const handelFilterChange = (value)=>{
        setDataFilter(value)
    }
    return (
        <div>
            <Breadcrumb nameCurrent = {category ? category : "Sản phẩm"}/>
            <div className="h-full flex">
                <FilterNavbar
                    handelFilterChange={handelFilterChange}
                    name={category}
                />
                <div className="flex-1 pb-10">
                    <ListProduct
                        handelFilterChange={handelFilterChange}
                        dataFilter={dataFilter}
                        loading = {loading}
                        name = {category ? category : "Sản phẩm"}
                        data= {data}
                    />
                </div>
            </div>
        </div>
    )
}

export default CategoryProductPage
