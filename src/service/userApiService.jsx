
export const registerApiUser = async(newUser)=>{
       
         const res = await fetch("/api/user/register",{
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    "email":newUser.email,
                    "password": newUser.password,
                    "userName": newUser.userName,
                    "phoneNumber": newUser.phoneNumber,
                }),
            })
        if (!res.ok) throw new Error("Failed to register user");
        const data = await res.json();
        return data;   

       
      
}


// export const registerApiUser = (newUser)=>{
//     return fetch("/api/user/register",{
//         method: 'POST',
//         headers: { "Content-Type": "application/json"},
//         body: JSON.stringify({
//             "email":newUser.email,
//             "password": newUser.password,
//             "userName": newUser.userName,
//             "phoneNumber": newUser.phoneNumber,
//          }),
//     })
//     .then(res=>{
//         if(!res.ok) throw new Error("Register Failed")
//         return res.json()
//     })
// }

export const loginApiUser= async(value)=>{
 
       const res =  await fetch("/api/user/login",{
          method:"POST",
          headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                "loginValue":value.email,
                "password": value.password,
            }),
           credentials: "include"
       })
       if(!res.ok) throw new Error("Failed Login")
       const data = await res.json()
       return data
  
}

// export const loginApiUser = (value)=>{
//     return  fetch("/api/user/login",{
//         method:"POST",
//         headers: { "Content-Type": "application/json"},
//         body: JSON.stringify({
//                 "loginValue":value.email,
//                 "password": value.password,
//         }),
//     })
//     .then(res=>{
//         if(!res.ok) throw new Error("Login Failed")
//         return res.json()
//     })
//     .then(data=>data)
//     .catch(err=>err)
// }

export const logoutApiUser = ()=>{
    return fetch("/api/user/logout",{
        method:"POST"
    })
    .then(res=>{
        if(!res.ok) throw new Error("Logout Failed")
        return res.json()
    })
}



//Lấy accessToken mới thông quá refeshToken trong cookie
export const getAccessTokenApiUser = async ()=> {
    const res = await fetch("/api/user/refreshAccessToken", {
        method: "GET",
        credentials: "include"
    });

    if (!res.ok) throw new Error("Failed to get accessToken user");
    const data = await res.json();
    return data;   // trả về token
};



//Cập nhật thông tin User
export const updateApiUser = async (value,token)=>{
    const res = await fetch("/api/user/current",{
        method:"PUT",
        headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`  //truyền token người dùng vào để gửi lên serve
        },
        // credentials: "include",
        body: JSON.stringify({
                "userName":value.userName,
                "email": value.email,
                "phoneNumber": value.phoneNumber,
                "address": value.address,
                "avatar": value.avatar,
                "password": value.password,
        })
        
    })
    const data = await res.json()
    return data
}
//Lấy thông tin user đang đăng nhập  (Bao gồm cả giỏ hàng)
export const getApiUserCurrent  = async(token)=>{
    const res = await fetch("/api/user/current",{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`,
        },
        // credentials: "include"   // lấy token trên cookie
    });
    if (!res.ok) throw new Error("Failed fetch user current");
    const data = await res.json();
    return data;   // trả về data
}

//Thêm sản phẩm vào giỏ hàng của user trên server
export const addToCartUserApi = async(value,token)=>{
    const res = await fetch("/api/user/addToCart",{
         method:"PUT",
        headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`  //truyền token người dùng vào để gửi lên serve
        },
        // credentials: "include",
        body: JSON.stringify({
                "pid":value.id,
                "quantity": value.quantity,
                "color": value.color,
                "size": value.size,
                "price": value.price,
        })
    })
    const data = await res.json()
    return data
}


export const removeToCartUserApi = async(value,token)=>{
    const res = await fetch("/api/user/removeFromCart",{
        method:"PUT",
        headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`  //truyền token người dùng vào để gửi lên serve
        },
        // credentials: "include",
        body: JSON.stringify({
                "pid":value.id,
                "color": value.color,
                "size": value.size,
        })
    })
    const data = res.json()
    return data
}