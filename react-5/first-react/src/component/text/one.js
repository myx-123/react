import React, { Component } from 'react'
import Hoc from './hoc'
import { Button, Pagination } from 'antd';
@Hoc(1)
class One extends Component {
    componentDidMount() {
        fetch("/api/topics").then((res) => res.json()).then((res) => {
            console.log(res.data)
        })
    }
    
   
    render() {
        return (
            <div>
               <Button type="primary">Primary</Button>
               adad
               <Pagination defaultCurrent={1} total={50} />
            </div>
        )
    }
}
export default One
