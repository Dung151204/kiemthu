export const getApiBlog = ()=>{
    return fetch("/api/blog")
        .then(res=>{
            if(!res.ok) throw new Error("Failed to fetch Blog")
            return res.json()
        })
}
export const getApiDetailBlog = (id)=>{
    return fetch(`/api/blog/${id}`)
        .then(res=>{
            if(!res.ok) throw new Error("Failed to fetch detail Blog")
            return res.json()
        })
}