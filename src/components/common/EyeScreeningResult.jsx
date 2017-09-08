/**
 * 筛查结果combo---------数值读取自src/common/jsons/screenResult.json
 */

import React from 'react'
import {Select} from 'antd'
const Option = Select.Option ;
import staticfile from 'src/common/utils/StaticJson'
const screenResult = staticfile.screenResult ;
export default class ScreeningResult extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:{}
        }
    }
    componentWillMount(){
        this.setState({
            result:screenResult
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
{/*<Select mode="multiple">
 {_.map(result,(value,key)=>{
 {
 <Option key={key} value={key}>{value}</Option>
 }
 })}
 </Select>*/}