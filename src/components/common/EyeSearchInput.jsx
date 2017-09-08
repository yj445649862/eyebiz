/**
 * 本系统通用搜索框
 */

import React from 'react'
import {Input} from 'antd'
export default class EyeMemberSearch extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props ;
        return (
            <Input.Search {...props} onFocus={(e)=>{e.target.select()}} />
        )

    }
}