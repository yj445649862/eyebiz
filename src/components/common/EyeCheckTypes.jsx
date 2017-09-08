/**
 * 本系统通检查类型选择框
 */

import React from 'react'
import {Select} from 'antd'
const Option = Select.Option ;
import checkTypes from 'src/common/jsons/checkTypes'
export default class EyeCheckTypes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:{}
        }
    }
    componentWillMount(){
        this.setState({
            result:checkTypes
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