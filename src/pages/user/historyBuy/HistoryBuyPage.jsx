import { useEffect } from "react";
import { getAccessTokenApiUser } from "../../../service/userApiService";
import { getOrderByUserApi } from "../../../service/orderApiService";
import { useSelector } from "react-redux";
import { SelectUser } from "../../../redux/selector";

const orders = [
  {
    id: "DH001",
    date: "2025-08-28",
    info: "Khách: Nguyễn Văn A - 0123456789",
    product: "Áo thun trắng",
    status: "Đang xử lý",
  },
  {
    id: "DH002",
    date: "2025-08-27",
    info: "Khách: Trần Thị B - 0987654321",
    product: "Quần jean xanh",
    status: "Hoàn thành",
  },
];



const HistoryPage = ()=>{
  const dataUser = useSelector(SelectUser)
  
    useEffect(()=>{
      console.log("chay effec")
      const fetchApi = async()=>{
        const data  =await getOrderByUserApi(dataUser.accessToken)
        console.log("history : ",data)
      }
      console.log("dung effec")
      fetchApi()
    },[])
    return (
        <div>
            <div className="w-[80%] m-auto min-h-[500px] bg-blue-50">
                <p className="uppercase font-medium text-[20px] text-blue-700 text-center p-2">Lịch sử mua hàng</p>
                <table className="table-auto border-collapse border border-gray-200 w-full text-left">
  <thead>
    <tr className="bg-gray-100">
      <th className="border px-4 py-2">Ngày đặt hàng</th>
      <th className="border px-4 py-2">Mã đơn hàng</th>
      <th className="border px-4 py-2">Thông tin đơn hàng</th>
      <th className="border px-4 py-2">Sản phẩm</th>
      <th className="border px-4 py-2">Trạng thái</th>
      <th className="border px-4 py-2">Hành động</th>
    </tr>
  </thead>
  <tbody>
    {orders.map((product) => (
      <tr key={product.id} className="hover:bg-gray-50">
        <td className="border px-4 py-2">{product.date}</td>
        <td className="border px-4 py-2">{product.id}</td>
        <td className="border px-4 py-2">{product.info}</td>
        <td className="border px-4 py-2">{product.product}</td>
        <td className="border px-4 py-2">
          <span
            className={`px-2 py-1 rounded text-sm ${
              product.status === "Hoàn thành"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {product.status}
          </span>
        </td>
        <td className="border px-4 py-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Xem
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
        </div>
    )
}
export default HistoryPage