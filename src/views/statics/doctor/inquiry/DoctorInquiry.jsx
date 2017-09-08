import React from 'react'
import { Row, Col,Button,Icon } from 'antd'
import EyeDoctorInquiry from 'components/doctor/inquiry/EyeDoctorInquiry'
import EyeCommonHistory from 'components/common/EyeCommonHistory'
import {connect} from 'react-redux'
import actions from 'src/redux/action';
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        decrement: (...args) => dispatch(actions.decrement(...args))
    }
};

 class DoctorInquiry extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
                <Row gutter={8} className="eye-common-height">
                    <Col span={16} style={{height:'100%'}}>
                        <div style={{borderRadius:'8px',padding:'2px',background:'white',height:'100%'}}>
                            <Row style={{height:'22%'}}>
                                主述：<EyeDoctorInquiry {...this.props} className="eye-common-height" type="zhushu"/>
                            </Row>
                            <Row style={{height:'22%'}}>
                                现病史：<EyeDoctorInquiry {...this.props} className="eye-common-height" type="xianbingshi"/>
                            </Row>
                            <Row style={{height:'22%'}}>
                               既往史： <EyeDoctorInquiry {...this.props} className="eye-common-height" type="jiwangshi"/>
                            </Row>
                            <Row style={{height:'22%'}}>
                                家族史：<EyeDoctorInquiry {...this.props} className="eye-common-height" type="jiazushi"/>
                            </Row>
                            <div className="eye-common-button-bottom">
                                <Button type="primary"><Icon type="check" />清空</Button>
                                <Button type="primary" ><Icon type="save" />提交</Button>
                            </div>
                        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(DoctorInquiry)
