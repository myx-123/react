import axios from './index'

export const getList=(page,pageSize)=>{
    return axios.get("/pagelist",{params:{page,pageSize}})
}

export const add=(name,age)=>{
    return axios.post("/add",{name,age})
}

export const remove=(id)=>{
    return axios.post("/del",{id})
}

export const login=(username,password)=>{
    return axios.post("/users/login",{username,password})
}

export const quit=()=>{
    return axios.post("/users/quit")
}

export const upload=(data)=>{
    return axios.post("/upload",data)
}