
import FilterCategory from "./filterCategory/FilterCategory.jsx"
import PriceRange from "./filterCategory/priceRange/PriceRange.jsx";

const products = [
    "Quần short",
    "Quần jeans",
    "Áo phông",
    "Áo len",
    "Quần âu",
    "Áo Cardigan",
    "Áo sweater",
    "Áo hoodie",
    "Áo sơ mi",
    "Áo măng-tô",
  ];
const sizes = ["XXL","XL","L","M","S","XS"]
const FilterNavbar = ()=>{
    return (
        <div className="w-[20%] min-h-[800px] shadow-xl overflow-y-auto">
         
                <p className="w-full text-center p-2 font-medium">Danh mục</p>
                <FilterCategory
                   name = "Sản phẩm"
                >
                    <ul>
                       {products.map((product,index)=>(
                            <li key={index} className="flex w-full relative left-[40%] mt-1 mb-1">
                                <input type="checkbox" />
                                <p className="ml-2">{product}</p>
                            </li>
                        ))}
                    </ul>
                </FilterCategory>
                <FilterCategory
                   name = "Giá"
                >
                    <PriceRange/>
                   <div className="flex items-center justify-end mr-3 mt-4 ">
                    <p className="mr-2">Sắp xếp</p>
                    <select name="" id="" className="rounded-md pl-2 pr-2 border border-solid border-[#ccc] ">
                        <option value="">Mặc định</option>
                        <option value="">Giảm dần</option>
                        <option value="">Tăng dần</option>
                    </select>
                   </div>
                </FilterCategory>
                 <FilterCategory
                   name = "Size"
                >
                    <ul className="">
                     
                       {
                       sizes.map((size,index)=>(
                         <li key={index} className="flex w-full relative left-[40%] mt-1 mb-1">
                            <input type="checkbox" />
                            <p className="ml-2">{size}</p>
                        </li>
                       ))
                       }
                    </ul>
                </FilterCategory>
        </div>
    )
}
export default FilterNavbar