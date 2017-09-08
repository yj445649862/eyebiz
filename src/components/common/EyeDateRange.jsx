/**
 * 通用时间范围选择器，提供今天，本周，本月，清除的预定功能
 */

import React from 'react'
import {DatePicker} from 'antd'
const RangePicker = DatePicker.RangePicker;
import moment from 'moment'
export default class EyeDateRange extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props ;
        return (
            <RangePicker {...props} ranges={{ "今天": [moment(), moment()],'本周':[moment().startOf('week'),moment().endOf('week')], '本月': [moment().startOf('month'), moment().endOf('month')],'清空':[] }}/>
        )

    }
}