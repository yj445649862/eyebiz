import React from 'react'
import { Card,Icon } from 'antd'

const liexideng=()=>{
    return (
        <span><a href="#">1</a><a href="#">2</a></span>
    )
}

export default class EyeCommonHistoryBilling extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Card title="裂隙灯检查" className="history_card" extra={<span><a><Icon type="file-text"/>查看报告</a><a><Icon type="file-jpg"/>查看图片</a></span>}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="眼底照相机" className="history_card" extra={<span><a><Icon type="file-text"/>查看报告</a><a><Icon type="file-jpg"/>查看图片</a></span>}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}
