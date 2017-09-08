/**
 * 本系统通用词条搜索框
 */

import React from 'react'
import 'assets/eyeEntitySearch.css'
import {Badge ,Input} from 'antd'
export default class EyeEntitySearch extends React.Component{
    constructor(props){
        super(props)
        this.searchResult = this.searchResult.bind(this) ;
        this.state={
            initDataSource:props.dataSource,
            initCount:props.dataSource.length||0
        }
    }
    handlerItemClick(a,b,c){
        let dataSource = this.state.initDataSource ;
        let target = _.filter(dataSource,(d)=>{
            return d.id == a ;
        })
        this.props.getSelections(target) ;
    }
    searchResult(e){
        let initDataSource = this.props.dataSource ;
        let value = e.target.value ;
        if(value){
            let source =_.filter(initDataSource,(e)=>{
                return e.text.toString().indexOf(value)!=-1 ;
            }) ;
            this.setState({
                initDataSource:source,
                initCount:source.length
            })
        }else{
            this.setState({
                initDataSource,
                initCount:initDataSource.length
            })
        }


    }
    render(){
        const {title,placeholder}  = this.props ;
        const dataSource = this.state.initDataSource ;
        const array = []
        _.each(dataSource,(a)=>{
            array.push(<li key={a.id} className="eye_common_pointer" onClick={()=>{
                this.handlerItemClick(a.id)
            }}>{a.text}</li>)
        })
        return (
           <div className="eye-common-height">
               <div className="eye_common_title">{title}</div>
               <Input onFocus={(e)=>{e.target.select()}} onChange={this.searchResult}  placeholder={placeholder} suffix={<Badge count={"共"+this.state.initCount+"条"} style={{ backgroundColor: '#01D9FE' }}/>}></Input>
               <div className="eyeEntitySearch_content">
                   {
                       array.length? <ul className="clear">{array}</ul>:<div className="noentity">没有相关词条</div>
                   }
               </div>
           </div>
        )

    }
}