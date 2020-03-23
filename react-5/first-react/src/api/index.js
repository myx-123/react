import axios from 'axios'

var service = axios.create({
    baseURL:"/hd",
    "content-type":"application/json",
    timeout:5000

})
service.interceptors.request.use((config)=>{
    console.log("发请求了 带上token")
     if(sessionStorage.getItem("token")){
         config.headers["token"]=sessionStorage.getItem("token")
     }
     return config
})
service.interceptors.response.use((res)=>{
    if(res.data.status===-1){
        console.log("失败了")
        window.location.href="/login"
    }
    return res.data
})
export default service