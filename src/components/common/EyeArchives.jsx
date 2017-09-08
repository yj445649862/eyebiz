/**
 * 本系统通用搜索框
 */

import React from 'react'
import {Select} from 'antd'
const Option = Select.Option ;
import archives from 'src/common/jsons/archives'
export default class EyeArchives extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:{}
        }
    }
    componentWillMount(){
        this.setState({
            result:archives
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