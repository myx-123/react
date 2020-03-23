import React, { Component } from 'react'
import {Table,Card,Button,Modal, message} from 'antd'
import {getList,remove} from '../../../api/request'
export default class List extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            id:-1,
            pageSize:7,
            visible:false,
            loading:false,
             dataSource:[],
              columns:[
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '年龄',
                  dataIndex: 'age',
                  key: 'age',
                },
                {
                    title: '操作',
                    dataIndex: 'action',
                    key: 'action',
                    render: (text, record) => {
                        // console.log(record)
                      return <button onClick={this.showModal.bind(this,record.key)}>删除</button>
                    }
                       
                  },
              ]
        }
    }
    componentDidMount(){
    this.getData(1,this.state.pageSize)
    }
    getData=(page,pageSize)=>{
        getList(page,pageSize).then((res)=>{
            var list=res.list.map((item)=>{
                return {
                    key:item._id,
                    name:item.name,
                    age:item.age
                }
            })
            this.setState({
                dataSource:list,
                count:res.count
            })
        })
    }
    getPageContent=(page,pageSize)=>{
      this.getData(page,pageSize)
    }
    changes=()=>{
        this.props.history.push("/home/add")
    }

    showModal = (id) => {
        this.setState({
          visible: true,
          id
        });
      };
    
      handleCancel =()=> {
        this.setState({
          visible: false,
        });
      };
    
      handleOk =()=> {
        this.setState({
          loading:true
        },()=>{
          remove(this.state.id).then((res)=>{
              if(res.status===0){
                  message.success("删除成功")
                  this.getData(1,this.state.count)
              }
          }).finally(()=>{
              setTimeout(()=>{
                this.setState({
                    visible:false,
                    loading:false
                })
              },1500)
          })
        })
      };
    render() {
        let {dataSource,columns,count,pageSize,visible,loading} = this.state
        return (
            <div>
                <Card title="学生名单表" bordered={false} extra={<Button type="primary" onClick={this.changes}>添加</Button>}>
                <Table dataSource={dataSource} columns={columns}
                pagination={{total:count,pageSize,onChange:this.getPageContent}}
                />
               </Card>

        <Modal
          title="确认"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
          confirmLoading={loading}
          cancelText="取消"
          okText="确认"
        >
          <p>你确认要删除吗</p>
        </Modal>
            </div>
        )
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return
        }
    }
}
