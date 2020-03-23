import React, { Component } from 'react'

var Hoc =(s)=>(Com)=>{
   return class extends Component {
        render() {
            if(s>10){
                return <div>积分不足</div>
            }
           return (
            <div>
                <><Com></Com>2020&qf</>
            </div>
        )
        }
    }
}
 
export default Hoc
