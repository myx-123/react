import React, { Component } from 'react'
import { Row, Col } from 'antd';
import E from 'echarts'
export default class Dashboard extends Component {

    componentDidMount(){
        var myChart = E.init(this.node);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    render() {
        return (
            <div>
                <Row style={{width:800,marginBottom:30}} gutter={16}>
                        <Col span={6} style={{background:"red",height:'60px',textAlign:"center",lineHeight:"60px"}}>总访问量 100000</Col>
                        <Col span={6} style={{background:"yellow",height:'60px',textAlign:"center",lineHeight:"60px"}}>今天访问 0</Col>
                        <Col span={6} style={{background:"blue",height:'60px',textAlign:"center",lineHeight:"60px"}}>过去一周 11</Col>
                        <Col span={6} style={{background:"green",height:'60px',textAlign:"center",lineHeight:"60px"}}>过去一月 100</Col>
                </Row>
                <div ref={(node)=>this.node=node} style={{height:300,width:800}}>
                        
                </div>
            </div>
        )
    }
}
