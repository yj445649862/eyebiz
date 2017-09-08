import React from 'react'
import { Layout, Menu,Dropdown,Icon,Button,Badge,Input ,Modal  } from 'antd';
const { Header} = Layout;
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from 'src/redux/action';
import {logoutAction} from 'src/common/ajax/action/userAction'
import EyeMessage from 'components/message/EyeMessage'
const mapStateToProps = (state) => {
    return {
        eyeMessageModel: state.setMessageModel.messageModel
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setMessageModel: (...args) => dispatch(actions.setMessageModel(...args))
    }
};


 class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.loginout = this.loginout.bind(this)
        this.messageCountClickHander = this.messageCountClickHander.bind(this)
        this.state={
            userInfo:{}
        }
    }
    componentDidMount() {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo){
            this.setState({
                userInfo
            })
        }else{
            this.props.history.push({pathname:'/login'})
        }
    }
     loginout(){
         logoutAction().then(res=>{
             sessionStorage.clear() ;
             this.props.history.push({pathname:'/login'})
         }).catch(e=>{
         })
     }
     messageCountClickHander(){
            this.props.setMessageModel({messageModel:!this.props.eyeMessageModel})
     }
    render(){
        const menu = (
            <Menu onSelect={this.loginout}>
                <Menu.Item key="1">退出登录</Menu.Item>
            </Menu>
        );
        const props = this.props ;
        return (
            <Header className="eye-layout-header">
                <div className="eye-commont-logo"></div>
                    <div style={{float:'right'}}>
                        <Input onFocus={(e)=>{e.target.select()}} maxLength="12" prefix={<Icon type="user" />} className="eye-common-barcode" placeholder="扫描会员条形码"/>
                        <span  style={{marginRight:'10px'}}>
                                 <Badge count={3} onClick={this.messageCountClickHander}>
                                   <a href="javascript:void(0)" className="eye-common-notice" >通知</a>
                                 </Badge>
                            </span>
                        <Dropdown overlay={menu}>
                            <Button>{this.state.userInfo.operatorName}<Icon type="down" /></Button>
                        </Dropdown>
                    </div>
                <EyeMessage {...props}/>
            </Header>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HeaderComponent))