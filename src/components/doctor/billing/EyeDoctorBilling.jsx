import React from 'react'
import EyeEntirySearch from 'components/common/EyeEntitySearch'
import EyeDoctorChooseTable from 'components/common/EyeDoctorChooseTable'
import {Row,Col,Button,Icon} from 'antd'
export default class EyeDoctorBilling extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            selectData:[]
        }
    }
    componentWillMount(){
        setTimeout(()=>{},3000) //模拟请求相应时间
        let dataSource = [] ;
        for(var i=0 ; i<1000;i++){
            dataSource.push({id:i,pinyinAb:i,text:Math.random()*100000000});
        }
        this.setState({
            dataSource
        })
    }
    getSelections(target){
        this.setState({
            selectData:this.state.selectData.concat(target)
        })
    }
    render() {
        var selectData = this.state.selectData;
        var columns=[{title:'项目名称',data:'name',width:'10%'},{title:'眼别',data:'age',width:'10%'},];
        return (
           <div className="eye-common-height">
               <Row style={{height:'34%'}}>
                   <EyeEntirySearch getSelections={this.getSelections.bind(this)} title="添加诊断条目" placeholder="请输入拼音首字母查询" dataSource={this.state.dataSource}></EyeEntirySearch>
               </Row>
               <Row  style={{height:'60%'}}>
                   <EyeDoctorChooseTable title="已选中项目" dataSource={selectData} columns={columns} selectable={true}></EyeDoctorChooseTable>
               </Row>
                   <div className="eye-common-button-bottom">
                       <Button type="primary">
                           <Icon type="printer" />打印
                       </Button>
                       <Button type="primary">
                           <Icon type="save" />保存
                       </Button>
                   </div>
           </div>
        );
    }
}
