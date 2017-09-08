/**
 * 本系统阅片渠道下拉框
 */

import React from 'react'
import {Select} from 'antd'
const Option = Select.Option ;
import readChannel from 'src/common/jsons/readChannel'
export default class EyeReadChannel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:{}
        }
    }
    componentWillMount(){
        this.setState({
            result:readChannel
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