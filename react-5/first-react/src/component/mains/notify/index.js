import React, { Component } from 'react'
import { List, Avatar,Button,Card,Spin } from 'antd';
import {connect} from 'react-redux'
import actionType from '../../../store/actionType'
var newState = (state)=>{
    return {
        list:state.list,
        length:state.list.filter((item)=>!item.read).length,
        loading:state.loading
    }
}

@connect(newState,actionType)
 class Notify extends Component {
    render() {
        return (
            <div>
                <Spin spinning={this.props.loading}>
                <Card title="通知中心" bordered={false}
                extra={<Button disabled={!Boolean(this.props.length)} onClick={this.props.allmark}>设置为全部已读</Button>}
                >
                <List
    itemLayout="horizontal"
    dataSource={this.props.list}
    renderItem={item => (
      <List.Item extra={<Button disabled={item.read} onClick={this.props.markById.bind(this,item.id)}>设置为已读</Button>}>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  </Card>
  </Spin>
            </div>
        )
    }
}
export default Notify
