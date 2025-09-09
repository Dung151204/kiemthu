// // Hàm fetch có auto refresh
// export const apiFetch = async (url, options = {}) => {
//   // gọi API bình thường
//   let res = await fetch(url, {
//     ...options,
//     credentials: "include", // để gửi cookie (accessToken, refreshToken)
//   });

//   // Nếu accessToken hết hạn → 401
//   if (res.status === 401) {
//     console.warn("AccessToken expired → try refresh...");

//     // gọi refresh token endpoint
//     const refreshRes = await fetch("/api/auth/refresh", {
//       method: "POST",
//       credentials: "include", // gửi refreshToken trong cookie
//     });

//     if (refreshRes.ok) {
//       console.log("Refresh success → retry original request");

//       // thử lại request gốc với token mới
//       res = await fetch(url, {
//         ...options,
//         credentials: "include",
//       });
//     } else {
//       console.error("Refresh failed → logout user");
//       throw new Error("Unauthorized - Please login again");
//     }
//   }

//   // parse JSON
//   const data = await res.json();
//   return data;
// };
