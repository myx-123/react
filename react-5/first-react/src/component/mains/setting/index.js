import React, { Component } from 'react'
import {Upload} from 'antd'
import {upload} from '../../../api/request'
export default class Setting extends Component {

    constructor(props){
        super(props)
        this.state={
            img:''
        }
    }
    upload=({file})=>{
        var from = new FormData
        from.append('file',file)
        upload(from).then((res)=>{
            if(res.status===0){
                this.setState({
                    img:"http://localhost:4000"+res.path
                })
            }
        })
    }
    render() {
        return (
            <div>
       <Upload style=
       {{height:100,width:100,border:"1px dashed #ccc",display:"block"}} 
       customRequest={this.upload}
       name="avatar"
       listType="picture-card"
       className="avatar-uploader" 
       showUploadList={false}>
         {this.state.img?<img src={this.state.img} style={{width:100,height:100}} />:<div>+</div>}
      </Upload>
            </div>
        )
    }
}
