import React from 'react'
import {Select} from 'antd'
export default class EyeCommonHistoryHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div style={{height:'40px',background:'#A1ECFE',borderRadius:'3px'}}>
                    <label style={{lineHeight:'40px',paddingLeft:'5px',fontSize:'18px'}}>李新全</label>
                    <Select style={{width:'100px',float:'right',padding:'5px 5px 0 0'}}>
                        <Select.Option key="123">2015-01-01</Select.Option>
                    </Select>
                </div>
                <div  style={{height:'40px'}}>
                    会员卡号 : 430102000613 性别 : 男 年龄 : 69岁
                </div>
            </div>
        )
    }
}
{/*
*/}
