import React from 'react'
import { Row,Checkbox ,Col,DatePicker,Select ,Cascader  , Form, Icon, Input, Button ,Radio} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import staticfile from 'src/common/utils/StaticJson'
const {channel,nation,printType,sources,areafile}= staticfile
 class MemberAdd extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            confirmDirty: false
        }
        this.areachange = this.areachange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
    }
    areachange(value,item){
    }
     handleSubmit = (e) => {
         e.preventDefault();
         this.props.form.validateFieldsAndScroll((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
             }
         });
     }
    render(){
        const {increment, decrement, counter} = this.props;
        const options = []
        const source = [] ;
        const printTypes = [] ;
        const channels = [] ;
        nation.map((k,v)=>{
            options.push(<Option  key={k.value} value={k.value}>{k.text}</Option>)
        })
        sources.map((k,v)=>{
            source.push(<Option  key={k.value} value={k.value}>{k.text}</Option>)
        })
        printType.map((k,v)=>{
            printTypes.push(<Option  key={k.value} value={k.value}>{k.text}</Option>)
        })
        for(let k in channel){
            channels.push(<Option value={k} key={k}>{channel[k]}</Option>)
        }
        const disabledDate=(current) =>{
            return current && current.valueOf() > Date.now();
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="eye-common-height" >
                <Form>
                     <Row style={{paddingTop:20}}>
                        <Col span={16}>
                             <Row >
                                <Col span={12}>
                                    <FormItem label="&nbsp;&nbsp;&nbsp;&nbsp;姓名:" labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('fullname', {
                                            rules: [{
                                                required: true, message: '请输入姓名',
                                            }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入姓名" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem  label="会员卡号:"  labelCol={{span:6}} wrapperCol={{span:18}}>
                                        <label/>
                                    </FormItem>
                                </Col>
                            </Row>
                             <Row >
                                <Col span={12}>
                                    <FormItem   label="&nbsp;&nbsp;&nbsp;&nbsp;性别:"  labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('sex', {
                                            rules: [{
                                                required: true, message: '请选择性别',
                                            }],
                                        })(
                                            <RadioGroup>
                                                <Radio value={3}>男</Radio>
                                                <Radio value={10}>女</Radio>
                                            </RadioGroup>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="&nbsp;&nbsp;&nbsp;&nbsp;手机:"  labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('phone', {
                                            rules: [{
                                                pattern:/^\d{11}$/,message:'请输入正确的11位手机号'
                                            },{
                                                required: true, message: '请输入手机号码',
                                            }],
                                        })(
                                            <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} type="text" />
                                        )}

                                    </FormItem>
                                </Col>
                            </Row>
                             <Row >
                                <Col span={12}>
                                    <FormItem label="&nbsp;&nbsp;&nbsp;&nbsp;生日:"  labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('birthday', {
                                        })(
                                            <DatePicker disabledDate={disabledDate} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}  >
                                    <FormItem label="&nbsp;&nbsp;联系人:" labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('contact', {
                                        })(
                                            <Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} type="text"  />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                             <Row >
                                <Col span={12}>
                                    <FormItem label="&nbsp;&nbsp;&nbsp;&nbsp;名族:" labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('nation', {
                                        })(
                                            <Select  mode="combobox">
                                                {options}
                                            </Select>
                                        )}

                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="注册来源:"  labelCol={{span:6}} wrapperCol={{span:18}}>
                                        {getFieldDecorator('source', {
                                            initialValue:'e_zhan'
                                        })(
                                            <Select disabled>
                                                {source}
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24}>
                                    <FormItem label="现住址:" labelCol={{span:3}} wrapperCol={{span:21}}>
                                        {getFieldDecorator('provice', {
                                        })(
                                            <Cascader options={areafile} onChange={this.areachange} expandTrigger="hover" placeholder="请选择省市区" showSearch notFoundContent="没有选项"></Cascader>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                             <Row >
                                <Col span={24}>
                                    <FormItem label="具体住址" labelCol={{span:3}} wrapperCol={{span:21}}>
                                        {getFieldDecorator('address', {
                                        })(
                                            <Input prefix={<Icon type="home" style={{ fontSize: 13 }} />} type="text" placeholder="" />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                             <Row >
                                <Col span={18}>
                                    <FormItem label="挂号渠道" labelCol={{span:4}} wrapperCol={{span:20}}>
                                        {getFieldDecorator('channel', {
                                            initialValue:'ZRMZ'
                                        })(
                                            <Select >
                                                {channels}
                                            </Select>
                                        )}

                                    </FormItem>
                                </Col>
                                <Col span={6}>
                                    <FormItem label="记住选择" labelCol={{span:12}} wrapperCol={{span:12}}>
                                        <Checkbox ></Checkbox>
                                    </FormItem>
                                </Col>
                            </Row>
                             <Row >
                                <Col span={24}>
                                    <FormItem label="注册站点:" labelCol={{span:3}} wrapperCol={{span:21}}>
                                        {getFieldDecorator('siteName', {
                                        })(
                                            <Input disabled />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                             <Row>
                                <Col span={12}>
                                    <FormItem label="打印类型" labelCol={{span:6}} wrapperCol={{span:18}}>
                                        <Select defaultValue="条形码" >
                                            {printTypes}
                                        </Select>
                                    </FormItem>
                                </Col>
                                 <Col span={3}>
                                     <FormItem>
                                         <Button type="primary"><Icon type="printer" />打印</Button>
                                     </FormItem>
                                 </Col>
                            </Row>
                         </Col>
                         <Col span={8}>
                                  <div style={{textAlign:"center"}}>
                                      我只是一张图片
                                  </div>
                         </Col>
                     </Row>
                </Form>
                <div className="eye-common-button-bottom">
                        <Button type="primary">
                            <Icon type="delete" />重置
                        </Button>
                        <Button type="primary" onClick={this.handleSubmit}>
                            <Icon type="save" />保存
                        </Button>
                        <Button type="primary">
                            <Icon type="check" />挂号
                        </Button>
                </div>
            </div>
        )
    }
}

export default Form.create()(MemberAdd);