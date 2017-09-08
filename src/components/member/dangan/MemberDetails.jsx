import React from 'react'
import {Button,Select,Table,Input,Tooltip,Breadcrumb } from 'antd'
const Option = Select.Option ;
import EyeDateRange from 'components/common/EyeDateRange'
import EyeSearchInput from 'components/common/EyeSearchInput'
import EyeArchives from 'components/common/EyeArchives'
const columns = [
    { title: '姓名', dataIndex: 'name',render:(text)=>{
      return <div style={{color:'red'}}>{text}</div>
    }, key: 'name', width: '10%' },
    { title: '年龄', dataIndex: 'age',className:"center", key: 'age', width: '10%',render(){
        return <Tooltip placement="topLeft" title="asdfsadfasafafdsfads">
            <a href="#">TL</a>
        </Tooltip>
    } },
    { title: '手机', dataIndex: 'i', key: 'i', width: '10%' },
    { title: '年龄', dataIndex: 'k',className:"center", key: 'k', width: '5%' },
    { title: '手机', dataIndex: 'd', key: 'd', width: '5%' },
    { title: '年龄', dataIndex: 'b',className:"center", key: 'b', width: '10%' },
    { title: '手机', dataIndex: 'v', key: 'v', width: '10%' },
    { title: '性别', dataIndex: 'sex', key: 'sex', width:  '10%' },
    { title: '会员卡号', dataIndex: 'address', key: 'address', width:  '20%' },
    { title: '操作', dataIndex: '',width:'10%', key: 'x', render: () => <a href="#">Delete</a> },
    { title: '', dataIndex: '' }
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `刘德华`,
        age: 32,
        address: `123333222111`,
        k: i,
        d: `刘德华`,
        b: 32,
        v: `123333222111`,
    });
}
const height = window.document.body.clientHeight-250+'px' ;
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    })
};
export default class MemberList extends React.Component{
    constructor(props){
        super(props)
        this.handClick = this.handClick.bind(this)
    }
    componentDidMount(){
        const {increment, decrement, counter} = this.props;
    }
    handClick(){
        const {increment} = this.props;
        increment({type: 'INCREMENT_COUNTER'})
    }
    render(){
        return (
            <div className="eye-common-table-condition" >
                <div className="eye-common-table-condtion-content">
                    <div>
                        挂号时间:<EyeDateRange  size="small" style={{ width: '20%'}}></EyeDateRange>
                        挂号渠道:<Select size="small" defaultValue="" style={{ width: '10%',paddingLeft:'5px'}} onChange={()=>{}}>
                                        <Option value="">不限</Option>
                                        <Option value="lucy">当天</Option>
                                        <Option value="disabled">三天内</Option>
                                        <Option value="Yiminghe">一周内</Option>
                                        <Option value="month">一月内</Option>
                                        <Option value="threemonth">三月内</Option>
                                </Select>
                        <EyeSearchInput  style={{float:'right',width:'20%'}} size="small" placeholder="会员卡号、手机、姓名"></EyeSearchInput>
                    </div>
                    <div className="eye-common-condtion-content-secondLine">
                        诊断结果:<Select size="small" defaultValue="" style={{ width: '20%'}} onChange={()=>{}}>
                                    <Option value="">不限</Option>
                                    <Option value="lucy">当天</Option>
                                    <Option value="disabled">三天内</Option>
                                    <Option value="Yiminghe">一周内</Option>
                                    <Option value="month">一月内</Option>
                                    <Option value="threemonth">三月内</Option>
                                </Select>
                        档案类型:<EyeArchives size="small" defaultValue="" style={{ width: '10%',paddingLeft:'5px'}} onChange={()=>{}}></EyeArchives>
                                 <EyeSearchInput  style={{float:'right',width:'20%'}} size="small" placeholder="市场活动名称"></EyeSearchInput>
                    </div>
                </div>
                {/* rowSelection={rowSelection}*/}
                <Table ref="table" rowSelection={rowSelection}  columns={columns} bordered={true} dataSource={data} pagination={{ pageSize: 30 }} scroll={{ x: false,y:`${height}`}} />
            </div>
        )
    }
}