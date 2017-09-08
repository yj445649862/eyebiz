import React from 'react'
import { Row, Col,Button,Icon } from 'antd'
import EyeCommonHistory from 'components/common/EyeCommonHistory'
import EyeDoctorBilling from 'components/doctor/billing/EyeDoctorBilling'
export default class DoctorBilling extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row gutter={8} className="eye-common-height">
                <Col span={16} style={{height:'100%'}}>
                    <EyeDoctorBilling></EyeDoctorBilling>
                </Col>
                <Col span={8} style={{height:'100%'}}>
                    <div   style={{borderRadius:'8px',padding:'2px',background:'white',height:"100%"}}>
                        <EyeCommonHistory></EyeCommonHistory>
                    </div>
                </Col>
            </Row>
        )
    }

}