import React from 'react'
import {Route} from 'react-router-dom'
import Login from 'views/statics/login/login'
import Index from  'views/statics/index'
export  default  class Top extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return (
                <span>
                    <Route path="/login" component={Login}/>
                    <Route path="/web" component={Index}/>
                </span>
            )
        }
}