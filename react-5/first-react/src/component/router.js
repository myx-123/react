
import React from 'react'
import Loadable  from 'react-loadable'
var Home = Loadable({
    loader:()=>import("../App"),
    loading:()=><div>loading.....</div>
})
var Notfound = Loadable({
    loader:()=>import("./notFound"),
    loading:()=><div>loading.....</div>
})
var Dashboard = Loadable({
    loader:()=>import("./mains/dashboard"),
    loading:()=><div>loading.....</div>
})
var List = Loadable({
    loader:()=>import("./mains/list"),
    loading:()=><div>loading.....</div>
})
var Setting = Loadable({
    loader:()=>import("./mains/setting"),
    loading:()=><div>loading.....</div>
})
var Add = Loadable({
    loader:()=>import("./mains/add"),
    loading:()=><div>loading.....</div>
})
var Login = Loadable({
    loader:()=>import("./mains/login"),
    loading:()=><div>loading.....</div>
})
var Notify = Loadable({
    loader:()=>import("./mains/notify"),
    loading:()=><div>loading.....</div>
})

export const routes = [
    {
        path:"/home",
        component:Home
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/404",
        component:Notfound
    }
]
export const navs = [
    {
        path:"/home/dashboard",
        component:Dashboard,
        roles:["asd","qwe"]
    },
    {
        path:"/home/list",
        component:List,
        roles:["asd","qwe"]
    },
    {
        path:"/home/setting",
        component:Setting,
        roles:["asd"]
    },
    {
        path:"/home/add",
        component:Add,
        roles:["asd"]
    },
    {
        path:"/home/notify",
        component:Notify,
        roles:["asd","qwe"]
    }
]