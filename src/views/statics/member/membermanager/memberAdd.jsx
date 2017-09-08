import React from 'react'
import { Row, Col } from 'antd'
import MemberAdd from 'components/member/member/MemberAdd'
import MemberList from 'components/member/member/MemberList'
import './member.css'
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

 class MemberManager extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
                <Row gutter={8} className="eye-common-height">
                    <Col span={14} style={{height:'100%'}}>
                        <div style={{borderRadius:'8px',padding:'2px',background:'white',height:'100%'}}>
                            <MemberAdd {...this.props}/>
                        </div>
                    </Col>
                    <Col span={10} style={{height:'100%'}}>
                        <div   style={{borderRadius:'8px',padding:'2px',background:'white',height:"100%"}}>
                            <MemberList {...this.props}/>
                        </div>
                    </Col>
                </Row>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MemberManager)
