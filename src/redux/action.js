const setUserInfo = (userInfo)=> {
    return {
        type: 'SETUSERINFO', //set用户信息
        userInfo
    }
};
const setMessageModel = (messageModel)=>{
    return {
        type:'setMessageModel',
        messageModel
    }
}
module.exports = {
    setUserInfo,
    setMessageModel
};