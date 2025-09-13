export const getOrderByUserApi= async(token)=>{     //Lấy thông tin mà user đã đặt hàng
    const res =await fetch("/api/order/getorderByUser",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            //  credentials: "include"
    })
    if(!res.ok) throw new Error("faild get order by User")
    const data = await res.json()
    return data
}

export const orderCartApi = async(value,token)=>{
    const res = fetch("/api/order",{
        method:"POST",
        headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            "product": value.cart,
            "note": value.note,
             "shippingPrice": 35000,
            "discount": 0,
            "orderBy": {
                "address": value.address,
                "email": value.email,
                "phoneNumber": value.phoneNumber,
                "userName": value.userName
            }  
        }),

    })
    const data = await res.json()
    return data
}