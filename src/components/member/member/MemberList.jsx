import React from 'react'
import {Button,Select,Table,Input } from 'antd'
const Search = Input.Search;
const columns = [
    { title: '姓名', dataIndex: 'name',render:(text)=>{
      return <div style={{color:'red'}}>{text}</div>
    }, key: 'name', width: '15%' },
    { title: '年龄', dataIndex: 'age',className:"center", key: 'age', width: '10%' },
    { title: '手机', dataIndex: 'i', key: 'i', width: '25%' },
    { title: '性别', dataIndex: 'sex', key: 'sex', width:  '10%' },
    { title: '会员卡号', dataIndex: 'address', key: 'address', width:  '20%' },
    { title: '操作', dataIndex: '',width:'13%', key: 'x', render: () => <a href="#">Delete</a> },
    { title: '', dataIndex: ''}
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `刘德华`,
        age: 32,
        address: `123333222111`,
    });
}
const height = window.document.body.clientHeight-240+'px' ;
export default class MemberList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectRowsKeys:[],
            selectedRowIndex:[]
        }
        this.tableRowClick = this.tableRowClick.bind(this)
        this.handClick = this.handClick.bind(this)
    }
    componentDidMount(){
        const {increment, decrement, counter} = this.props;
    }
    handClick(){
        const {increment} = this.props;
        increment({type: 'INCREMENT_COUNTER'})
    }
    tableRowClick(record, index, event){
        var records = this.state.selectRowsKeys ;
        var selectedRowIndex = this.state.selectedRowIndex ;
        records.push(record.key)
        selectedRowIndex.push(index)
        this.setState({
            selectRowsKeys:records,
            selectedRowIndex
        })
    }
    render(){
        let _this = this ;
        const rowSelection = {
            selectedRowKeys:this.state.selectRowsKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                // disabled: record.name === '刘德华',    // Column configuration not to be checked
            })
        };
        return (
            <div className="eye-common-table-condition" >
                <div className="eye-common-table-condtion-content">
                    <div>
                        <Button type="primary" size="small" onClick={this.handClick}>导出选中</Button>
                        <Button type="primary" size="small">批量导入</Button>
                        <Button size="small" type="primary">打印条码</Button>
                        <Button size="small">导入历史</Button>
                        <Button size="small">模板下载</Button>
                    </div>
                    <div className="eye-common-condtion-content-secondLine">
                        检查时间:<Select size="small" defaultValue="" style={{ width: '20%'}} onChange={()=>{}}>
                        <Option value="">不限</Option>
                        <Option value="lucy">当天</Option>
                        <Option value="disabled">三天内</Option>
                        <Option value="Yiminghe">一周内</Option>
                        <Option value="month">一月内</Option>
                        <Option value="threemonth">三月内</Option>
                    </Select>
                        <Search style={{float:'right',width:'50%'}} onFocus={(e)=>{e.target.select()}} size="small" placeholder="会员卡号，手机号码，姓名，身份证号"/>
                    </div>
                </div>
                {/* rowSelection={rowSelection}*/}
                <Table ref="table" useFixedHeader rowClassName={(record, index)=>{
                   {/* var rowIndex= this.state.selectedRowIndex ;
                    if( rowIndex.includes(index)){
                        return 'table_selected_style'
                    }*/}
                }} rowSelection={rowSelection}   onRowClick={this.tableRowClick} columns={columns} bordered={true} dataSource={data} pagination={{ pageSize: 30 }} scroll={{ x: "580px",y:`${height}`}} />
            </div>
        )
    }
}