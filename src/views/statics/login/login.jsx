import React from 'react'
import { Layout ,Button,Icon,Modal,Form,Input,message   } from 'antd';
const FormItem = Form.Item
const { Header, Content,Footer } = Layout;
import {loginAction,queryUser,getCurrentUser,getCurrentUserAuth} from 'src/common/ajax/action/userAction'
const Login = class Login extends React.Component{
    constructor(props) {
        super(props)
        this.setButtonLoadFinish = this.setButtonLoadFinish.bind(this)
        this.state={
            formShow:true,
            confirmLoading:false
        }
    }
    static propTypes ={
        route:React.PropTypes.object
    }
    setButtonLoadFinish(){
        this.setState({
            confirmLoading:false
        })
    }
    handleSubmit = (e) => {
        let _this = this ;
        _this.props.form.validateFields((err, values) => {
            if (!err) {
                _this.setState({
                    confirmLoading: true
                })
                loginAction(null,{username: values['username'], password: values['password']}).then(res => {
                    queryUser().then(res=>{
                        getCurrentUser({params:{userid:res.data.id}}).then(res=>{
                            var data = res.data.data ;
                            if(data){
                                getCurrentUserAuth().then(res=>{
                                    sessionStorage.setItem('auth',res.data.toString()) ;
                                    sessionStorage.setItem('userInfo',data.siteid==0?JSON.stringify({operatorName:"admin"}):JSON.stringify(data.opreator))
                                    sessionStorage.setItem('siteInfo',JSON.stringify({siteId:data.siteid,siteName:data.sitename})) ;
                                    _this.setButtonLoadFinish() ;
                                    _this.props.history.push({pathname:'/web'});
                                }).catch(e=>{
                                    message.error("登录失败")
                                    _this.setButtonLoadFinish() ;
                                })
                            }
                        }).catch(e=>{
                            message.error("登录失败")
                            _this.setButtonLoadFinish() ;
                        })
                    }).catch(e=>{
                        message.error("登录失败")
                        _this.setButtonLoadFinish() ;
                    })
                }).catch(e=>{
                    message.error("登录失败")
                    _this.setButtonLoadFinish() ;
                })
            }
     })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
               <Layout className="eye-layout">
                    <Header className="eye-layout-header">Logo 放这里
                          <div style={{float:'right'}} onClick={()=>{this.setState({formShow:true})}}>
                               <Button  size="large" icon='login'>登录</Button>
                           </div>
                     </Header>
                     <Content className="eye-common-content">
                         <div className="eye-common-content-nav">我是二级导航</div>
                        <div className="eye-common-content-details">
                            这里可以放各种新闻图片之类的玩意儿
                        </div>
                     </Content>
                     <Modal title="登录" visible={this.state.formShow}
                            confirmLoading={this.state.confirmLoading}
                            onOk={this.handleSubmit} okText="登录" maskClosable={false}
                            onCancel={()=>{
                                this.setState({
                                    formShow:false
                                })
                            }}>
                       <Form>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名、邮箱或手机号' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名、邮箱或手机号" />
                            )}
                        </FormItem>
                         <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                                )}
                         </FormItem>
                         <FormItem>
                                忘记密码？ <a className="login-form-forgot" href="">点我重置</a>
                         </FormItem>
                       </Form>
                     </Modal>
               </Layout>
        )
    }
}

export default Form.create()(Login)