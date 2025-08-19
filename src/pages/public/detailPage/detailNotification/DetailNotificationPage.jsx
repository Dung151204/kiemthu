const dataSuport = [
    {
        title : "CƯỚC PHÍ VẬN CHUYỂN",
        content :[
            "Miễn phí giao hàng với tất cả đơn hàng có giá trị từ 400,000 vnđ trở lên tại tất cả tỉnh thành trên toàn quốc.",
            "Đồng giá 35.000 vnđ phí vận chuyển"
        ]
    },
    {
        title : "THỜI GIAN VẬN CHUYỂN",
        content :[
            "Tuyến nội thành Hà Nội: giao hàng khoảng 1-2 ngày",
            "Tuyến ngoại thành Hà Nội: giao hàng khoảng 2-3 ngày"
        ]
    },
    {
        title : "ĐƠN HÀNG ĐƯỢC GIAO TỐI ĐA MẤY LẦN ?",
        content :[
            "Đơn hàng được giao tối đa 3 lần (Nếu lần 1 đơn hàng giao không thành công, nhân viên vận chuyển sẽ liên hệ lại bạn lần 2 sau 1-2 ngày làm việc kế tiếp . Như vậy sau 3 lần giao dịch không thành công đơn hàng sẽ hủy."
        ]
    },
    {
        title : "KiỂM TRA TÌNH TRẠNG ĐƠN HÀNG",
        content :[
            "Để kiểm tra thông tin hoặc tình trạng đơn hàng bạn vui lòng liên hệ với bộ phận chăm sóc khách hàng trên Fanpage",
            "Trường hợp phát sinh chậm trễ trong việc giao hàng , Atino sẽ thông báo tới quý khách hàng để có phương án phù hợp nhất : Hủy đơn ( nếu muốn ). Chờ đơn"
        ]
    },
    {
        title : "KHI NHẬN ĐƠN HÀNG CÓ ĐƯỢC XEM SẢN PHẨM TRƯỚC KHI THANH TOÁN ?",
        content :[
            "Bạn hoàn toàn có thể mở gói hàng kiểm tra sản phẩm trước khi thanh toán hoặc trước khi vận chuyển rời đi.",
            "Trong trường hợp bạn gặp vấn đề phát sinh bạn liên hệ ngay đến chúng tôi 0968959050 để được hỗ trợ kịp thời."
        ]
    }
]

const DetailNotificationPage = ()=>{
    return (
        <div className="min-h-[600px] w-[80%] m-auto  pt-2 border-t border-solid border-[#ccc]">
            <ul className="list-decimal list-inside font-medium">
                {
                    dataSuport.map((data,index)=>(
                        <li key={index}>
                            <span className="">{data.title}</span>
                            
                            <ul className="font-normal list-disc ml-6 mt-3 mb-3">
                                {
                                   data.content.map((x,index)=>(
                                     <li key={index}>{x}</li>
                                   ))
                                }
                            </ul>
                        </li>
                    ))
                }

                
                
            </ul>
        </div>
    )
}
export default DetailNotificationPage