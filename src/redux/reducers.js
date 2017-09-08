import { combineReducers } from 'redux'
function userInfo(state={},action){
    switch (action.type){
        case 'SETUSERINFO':
            return Object.assign({},state,action.userInfo)
        default :
            return state
    }
}
function setMessageModel(state={},action){
    switch (action.type){
        case 'setMessageModel':
            return Object.assign({},state,action.messageModel)
        default :
            return state
    }
}
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    userInfo,
    setMessageModel
});

export default rootReducer;