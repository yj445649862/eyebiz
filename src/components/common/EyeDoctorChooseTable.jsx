/**
 * 本系统医生工作站所有词条选中反显table
 */

import React from 'react'
import {Row,Col} from 'antd'
export default class EyeDoctorChooseTable extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title,dataSource,columns,selectable}  = this.props ;
        return (
           <div className="eye-common-height">
               <Row style={{height:'10%',minHeight:"35px",border:'1px solid blue'}}>{title}</Row>
               <Row style={{height:'10%',minHeight:"35px",border:'1px solid blue'}}>{title}</Row>
            </div>
        )

    }
}