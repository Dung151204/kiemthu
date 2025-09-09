export const getOrderByUserApi= async(token)=>{
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