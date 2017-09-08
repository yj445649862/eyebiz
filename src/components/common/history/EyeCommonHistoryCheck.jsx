import React from 'react'
import { Card } from 'antd'
export default class EyeCommonHistoryCheck extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <div>
               <Card title="常规" className="history_card">
                   <p>Card content</p>
                   <p>Card content</p>
               </Card>
               <Card title="眼健康"  className="history_card">
                   <p>Card content</p>
                   <p>Card content</p>
               </Card>
               <Card title="电脑验光"  className="history_card">
                   <p>Card content</p>
                   <p>Card content</p>
               </Card>
           </div>
        )
    }
}
