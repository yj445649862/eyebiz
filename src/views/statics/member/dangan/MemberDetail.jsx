import React from 'react'

import { Row, Col } from 'antd'
import MemberDetails from 'components/member/dangan/MemberDetails'
import {connect} from 'react-redux'
import actions from 'src/redux/action';

//将state.counter绑定到props的counter
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

class MemberDetail extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Row gutter={8} className="eye-common-height">
                <Col span={24} style={{borderRadius:'8px',padding:'2px 2px 2px 20px',background:'white',height:'100%'}}>
                    <MemberDetails {...this.props}/>
                </Col>
            </Row>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberDetail)