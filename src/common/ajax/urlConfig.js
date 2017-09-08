/**
 * Created by andy on 2017-08-09.
 */


export function User() {
   return {
       login:'/auth-web/security/signin?username={username}&password={password}',
       logout:'/auth-web/security/signout',
       queryUser:'/auth-web/auth2/queryUser.json',
       getCurrentUser:'/eyebiz-web/useropratorsite/userinfo',
       getCurrentUserAuth:'/auth-web/auth2/queryPermission?appName=biz-web'
   }
}
export function Entity() {
    return {
        checkResult:'',
        medicalEntrys:'/ihospital-api/query/eyebiz/medicalEntrys'
    }
}