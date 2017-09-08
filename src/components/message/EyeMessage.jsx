import React from 'react'
import { Button,Modal,Tag , Icon ,Row,Col,Table } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>
},{
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    )
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];


export default class EyeMessage extends React.Component{

    constructor(props){
        super(props)
        this.handleCancel = this.handleCancel.bind(this) ;//绑定关闭事件
    }
    componentDidMount(){
    }
    handleCancel(){
        this.props.setMessageModel({messageModel:!this.props.eyeMessageModel})
    }
    render(){
         const contentHeight = window.document.body.offsetHeight/2 ;
        return (
            <Modal title="我的消息" visible={this.props.eyeMessageModel} closable={false} width="60%" style={{height:'50%'}}
                   onCancel={this.handleCancel}
                   footer={[
                       <Button key="submit" type="primary" size="large" onClick={this.handleCancel}>关闭</Button>
                   ]}
            >
               <Row gutter={10}>
                   <Col span={12}>
                       <div style={{background:'#F7F7F7',padding:'5px 10px 5px 5px',height:contentHeight}}>
                           <Tag color="#91C8FF"><Icon type="folder"/>未读消息</Tag>
                           <Tag color="#71AF3F"><Icon type="folder-open"/>已读消息</Tag>
                           <Tag color="#3385FF" style={{float:'right'}}><Icon type="solution"/>全部标记为已读</Tag>
                           <Table columns={columns} dataSource={data} />
                       </div>
                   </Col>
                   <Col span={12}>
                        <div   style={{background:'#F7F7F7',padding:'5px 10px 5px 5px',height:contentHeight}}>
                            <span><Icon type="user"/>发送者:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><Icon type="calendar"/>发送时间:</span>
                        </div>
                   </Col>
               </Row>
            </Modal>
        )
    }
}