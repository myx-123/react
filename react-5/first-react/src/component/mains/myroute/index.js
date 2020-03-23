import React, { Component } from 'react'
import {Route} from 'react-router-dom'
export default class Myroute extends Component {
    render() {
        let {path,component:Com,roles} = this.props
        var permission = roles.some((item)=>item===sessionStorage.getItem("username"))
        return (
            <div>
                <Route path={path} render={(props)=>{
                    return permission?<Com {...props}/>:<div>你无权访问</div>
                }}></Route>
            </div>
        )
    }
}
