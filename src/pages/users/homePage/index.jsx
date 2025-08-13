import { Link } from "react-router-dom"

const HomePage = ()=>{
    return (
        <div className="h-[400px]">
            Hello this HomePage
            <Link className="bg-green-500" to="/thong-tin-ca-nhan" >chuyển trang ca nhan</Link>
        </div>
    )
}

export default HomePage