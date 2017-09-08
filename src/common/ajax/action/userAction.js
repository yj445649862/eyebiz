/**
 * Created by andy on 2017-08-09.
 */
import {User} from '../urlConfig'
import {promisePost,promiseGet} from '../Promise'
export   function loginAction(data,param){
    return promisePost(User().login,data,param).then() ;
}
export   function logoutAction(data,param){ 
    return promiseGet(User().logout,data,param) ;
}
export   function queryUser(data,param){
    return promiseGet(User().queryUser,data,param) ;
}
export   function getCurrentUser(data,param){
    return promiseGet(User().getCurrentUser,data,param) ;
}
export   function getCurrentUserAuth(data,param){
    return promiseGet(User().getCurrentUserAuth,data,param) ;
}