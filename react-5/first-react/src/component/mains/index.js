import React, { Component } from 'react'
import { Layout, Menu, Icon,Dropdown,Badge } from 'antd';
import {withRouter} from 'react-router-dom'
import {quit} from '../../api/request'
import '../../App.css'
import {connect} from 'react-redux'
const { Header, Content, Sider } = Layout;
var newState = (state)=>{
  return {
      length:state.list.filter((item)=>!item.read).length,
  }
}
@withRouter
@connect(newState)
 class Mains extends Component {
    to=({key})=>{
      if(key==="/quit"){
        quit().then((res)=>{
          if(res.status===0){
            sessionStorage.clear()
            this.props.history.push("/")
          }
        })
      }else{
        this.props.history.push(key)
      }
        
    }
    menu=()=>{
      return (
        <Menu>
        <Menu.Item onClick={this.to} key="/home/notify">
        <Badge dot={Boolean(this.props.length)}>通知中心</Badge>
        </Menu.Item>
        <Menu.Item onClick={this.to} key="/quit">
          退出
        </Menu.Item>
      </Menu>
      )
    }
    render() {
        return (
            <div>
                <Layout>
    <Header className="header">
      <div style={{color:"#fff"}}>有赞后台管理系统</div>
      <div>
      <Dropdown overlay={this.menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <Icon type="down" />
    </a>
  </Dropdown>
      </div>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={this.props.location.pathname}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="/home/dashboard" onClick={this.to}>仪表盘</Menu.Item>
            <Menu.Item key="/home/list" onClick={this.to}>列表管理</Menu.Item>
            <Menu.Item key="/home/setting" onClick={this.to}>设置</Menu.Item> 
            <Menu.Item key="/quit" onClick={this.to}>退出登录</Menu.Item> 
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout> 
            </div>
        )
    }
}
export default Mains
