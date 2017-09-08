/**
 * 本系统通检查状态下拉框
 */

import React from 'react'
import {Select} from 'antd'
const Option = Select.Option ;
import checkStatus from 'src/common/jsons/checkStatus'
export default class EyeCheckStatus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:{}
        }
    }
    componentWillMount(){
        this.setState({
            result:checkStatus
        });
    }
    render(){
        const {result} = this.state ;
        const props = this.props ;
        const children = []
        _.map(result,(value,key)=>{
            {
                children.push(<Option key={key} value={key}>{value}</Option>)
            }
        })
        return (
            <Select {...props}>
                {children}
            </Select>
        )

    }
}