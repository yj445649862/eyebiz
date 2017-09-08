
import React from 'react'
import { Layout,Menu,Icon} from 'antd'
const { SubMenu } = Menu
import {withRouter,Link} from 'react-router-dom'
const _ = require('lodash')
const showHide = (str,key)=>{
    return (str.indexOf('*')!=-1||str.indexOf(key)!=-1)?true:false
}
class EyeSlide extends React.Component{
    constructor(props){
        super(props)
        this.state={
            openKeys:[],
            defaultOpenKeys:'member',
            defaultSelectedKeys:'toMemberArchives',
            auth:''
        }
        this.menuListClickHandler = this.menuListClickHandler.bind(this) ;
    }
    componentWillMount(){
        const auth = sessionStorage.getItem('auth')
        if(auth){
            this.setState({
                auth
            })
        }else{
            this.props.history.push({pathname:'/login'})
        }
    }
    componentDidMount(){
        let auth  = this.state.auth ; //所有权限
        let authJson = {} ;
        let sessionAuth = sessionStorage.getItem('sessionAuth') ;
        if(!sessionAuth){
             authJson = {
                member:{text:'会员管理',array:[]}, //会员管理
                doctor:{text:'医生工作站',array:[]},//医生工作站
                cashier:{text:'收银管理',array:[]},//收银管理
                check:{text:'检查管理',array:[]},//检查管理
                shaicha:{text:'筛查管理',array:[]},//筛查管理
                remote:{text:'远程管理',array:[]},//远程管理
                glasses:{text:'配镜管理',array:[]},//配镜管理
                statics:{text:'统计管理',array:[]},//统计管理
                archives:{text:'转诊管理',array:[]}//转诊管理
            }
            if(showHide(auth,'toMemberManager')){
                if(showHide(auth,'toHuiyuanguanliJsp')){
                    authJson.member.array.push({key:'memberRegister',path:'/web/member/memberRegister',text:'会员挂号'})
                }
                if(showHide(auth,'toMemberArchives')){
                    authJson.member.array.push({key:'memberArchives',path:'/web/member/memberArchives',text:'会员档案'})
                }
                if(showHide(auth,'toMemberScreening')){
                    authJson.member.array.push({key:'memberScreening',path:'/web/member/memberScreening',text:'筛查档案'})
                }
                if(showHide(auth,'toMemberCheckReport')){
                    authJson.member.array.push({key:'memberCheckReport',path:'/web/member/memberCheckReport',text:'检查报告'})
                }
                if(showHide(auth,'toMemberReferral')){
                    authJson.member.array.push({key:'memberReferral',path:'/web/member/memberReferral',text:'转诊列表'})
                }
                if(showHide(auth,'toMemberFlup')){
                    authJson.member.array.push({key:'memberFlup',path:'/web/member/memberFlup',text:'随访列表'})
                }
                if(showHide(auth,'toMemberFlupRecord')){
                    authJson.member.array.push({key:'memberFlupRecord',path:'/web/member/memberFlupRecord',text:'随访单记录'})
                }
            }
            if(showHide(auth,'doctorManager')){
                if(showHide(auth,'toChujianJsp')){
                    authJson.doctor.array.push({key:'doctorCheck',path:'/web/doctor/doctorCheck',text:'初检'})
                }
                if(showHide(auth,'toWenzhenJsp')){
                    authJson.doctor.array.push({key:'doctorInquiry',path:'/web/doctor/doctorInquiry',text:'问诊'})
                }
                if(showHide(auth,'toKaidanJsp')){
                    authJson.doctor.array.push({key:'doctorBilling',path:'/web/doctor/doctorBilling',text:'开单'})
                }
                if(showHide(auth,'toZhenduanJsp')){
                    authJson.doctor.array.push({key:'doctorDiagnosis',path:'/web/doctor/doctorDiagnosis',text:'诊断'})
                }
                if(showHide(auth,'toChufangJsp')){
                    authJson.doctor.array.push({key:'doctorPrescription',path:'/web/doctor/doctorPrescription',text:'处方'})
                }
                if(showHide(auth,'toZhuanzhenJsp')){
                    authJson.doctor.array.push({key:'doctorReferral',path:'/web/doctor/doctorReferral',text:'转诊'})
                }
                if(showHide(auth,'toSuifangJsp')){
                    authJson.doctor.array.push({key:'doctorFlup',path:'/web/doctor/doctorFlup',text:'随访'})
                }
                if(showHide(auth,'toAdviceJsp')){
                    authJson.doctor.array.push({key:'doctorAdvise',path:'/web/doctor/doctorAdvise',text:'建议'})
                }
                if(showHide(auth,'toJiankangdanganJsp')){
                    authJson.doctor.array.push({key:'doctorHealthRecord',path:'/web/doctor/doctorHealthRecord',text:'健康档案'})
                }
                if(showHide(auth,'toLishijilvJsp')){
                    authJson.doctor.array.push({key:'doctorHistoricalRecord',path:'/web/doctor/doctorHistoricalRecord',text:'历史记录'})
                }
            }
            sessionStorage.setItem('sessionAuth',JSON.stringify(authJson))
        }else{
            authJson = JSON.parse(sessionAuth) ;
        }
        this.setState({
            authJson
        })
    }
    menuOpenChange(openKeys){
        var oldOpenKey = this.state.openKeys[0] ;//旧的被打开的项的key值
        var newKey = _.filter(openKeys,(e)=>{
            return e!=oldOpenKey;
        })
        this.setState({
            openKeys:newKey
        })
    }
    menuListClickHandler(){
    }
   render(){
        const params = this.state.authJson ;
        const children = [] ;
        if(params){
            _.map(params,(value,key)=>{
                let child = [] ;
                _.map(value['array'],(i,k)=>{
                    child.push(<Menu.Item key={i['key']}>
                        <Link to={i['path']}>{i['text']}</Link>
                    </Menu.Item>)
                })
                children.push( <SubMenu key={key} title={<span><Icon type="appstore" /><span>{value.text}</span></span>} children={child}>
                </SubMenu>)
            })
        }
        return (
            <Menu openKeys={this.state.openKeys}  onOpenChange={this.menuOpenChange.bind(this)} mode="inline" className="eye-common-slider-menu" selectable={false}>
                {children}
            </Menu>
        )
   }
}
export default withRouter(EyeSlide)