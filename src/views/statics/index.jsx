import React from 'react'
import EyeHeader from 'views/layout/EyeHeader'
import Content from 'views/layout/Content'
import {Route} from 'react-router-dom'
import {Layout} from 'antd'
import {asyncComponent} from 'components/Bundle'
const Member = asyncComponent(() => import("./member/membermanager/memberAdd"))
const MemberAdd = asyncComponent(() => import("./member/membermanager/memberAdd"))
const MemberDangAn = asyncComponent(() => import("./member/dangan/MemberDetail"))
const MemberShaicha = asyncComponent(() => import("./member/shaicha/MemberShaiCha"))
const MemberCheckReport= asyncComponent(() => import("./member/jiancha/MemberJianCha"))
const DoctorInquiry= asyncComponent(() => import("./doctor/inquiry/DoctorInquiry"))
const DoctorBilling= asyncComponent(() => import("./doctor/billing/DoctorBilling"))
const Index = class Index extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <Layout className="eye-layout">
                <EyeHeader/>
                <Content style={{background:'red'}}>
                    <Route path='/web/member' exact={true} component={Member}/>
                    <Route path="/web/member/memberRegister" component={MemberAdd}/>
                    <Route path="/web/member/memberArchives" component={MemberDangAn}/>
                    <Route path="/web/member/memberScreening" component={MemberShaicha}/>
                    <Route path="/web/member/memberCheckReport" component={MemberCheckReport}/>
                    <Route path="/web/doctor/doctorInquiry" component={DoctorInquiry}/>
                    <Route path="/web/doctor/doctorBilling" component={DoctorBilling}/>
                </Content>
            </Layout>
        )
    }
}
export default  Index