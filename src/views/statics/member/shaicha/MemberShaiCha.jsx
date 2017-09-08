import React from 'react'
import { Row, Col } from 'antd'
import MemberScreening from 'components/member/memberScreening/MemberScreening'
class MemberShaiCha extends React.Component{

    constructor(props) {
        super(props)
    }
    render(){
        return (
            <Row gutter={8} className="eye-common-height">
                <Col span={24} style={{borderRadius:'8px',padding:'2px 2px 2px 20px',background:'white',height:'100%'}}>
                    <MemberScreening {...this.props}/>
                </Col>
            </Row>
        )
    }
}
export default MemberShaiCha