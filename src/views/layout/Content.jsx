import React from 'react'
import { Layout} from 'antd';
const {Content,Sider} = Layout;
import {Link,withRouter} from 'react-router-dom'
import EyeSlide from 'views/layout/EyeSlide'
class EyeContent extends React.Component{
    constructor(props) {
        super(props)
        var _this = this ;
    }
    render(){
        const props = this.props
        return (
            <Layout style={{background:"red"}}>
                <Sider width={150}   collapsible  className="eye-common-slider">
                    <EyeSlide {...props}/>
                </Sider>
                <Layout style={{ padding: '5px 5px 5px'}}>
                    <Content className="eye-common-content-platform">
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(EyeContent)