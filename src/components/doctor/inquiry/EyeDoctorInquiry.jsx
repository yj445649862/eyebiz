import React from 'react'
import { Icon, Input, AutoComplete } from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
import './EyeDoctorInquiry.css'
const dataSource = [{
    key:"111",value:"11111"
}, {
    key:"222",value:"22222"
}, {
    key:"333",value:"33333"
},
    {
        key:"444",value:"444"
    }, {
        key:"555",value:"555"
    }, {
        key:"666",value:"666"
    },{
        key:"777",value:"777"
    }, {
        key:"888",value:"888"
    }, {
        key:"999",value:"999"
    },{
        key:"1111",value:"1111"
    }, {
        key:"2222",value:"2222"
    }, {
        key:"3333",value:"3333"
    }];


export default class EyeDoctorInquiry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource: [],
            selectValue:''
        }
    }
    render() {
        const option = []
        const options = dataSource.map(group => {
            {option.push(<Option key={group.key} value={group.value}>
                {group.value}
            </Option>)}
        });
        return (
            <AutoComplete
                dropdownMatchSelectWidth={true}
                size="large"
                style={{ width: '100%',height:'80%'}}
                dataSource={option}
                onSelect={(value, option)=>{
                    let v  = this.state.selectValue ;
                    v += ((v?",":"")+value)  ;
                    this.setState({
                        selectValue:v
                    })
                }}
                optionLabelProp="value"
                value={this.state.selectValue}
            >
                <Input.TextArea autosize={false} onKeyUp={(e)=>{
                    let value = e.target.value ;//当前输入框的值
                    this.setState({
                        selectValue:value
                    })
                }}></Input.TextArea>
            </AutoComplete>
        );
    }
}
