/**
 * Created by andy on 2017-06-03.
 */

var taget = {} ;
switch (process.env.NODE_ENV){
  case 'dev':
    taget = {
      'ihospitalapi':'http://10.0.13.127:8769/ihospital-api',
        'authweb':'http://10.0.13.127/auth-web',
      'order':'http://10.0.13.127:4000/order'
    } ;
    break ;
  case  'test':
    taget = {
      'ihospitalapi':'http://10.0.13.127:8769/ihospital-api',
        'authweb':'http://10.0.13.127/auth-web',
      'order':'http://10.0.13.127:4000/order'
    } ;
    break ;
  case 'production':
    taget = {
      'ihospitalapi':'http://10.0.13.127:8769/ihospital-api',
        'authweb':'http://10.0.13.127/auth-web',
      'order':'http://10.0.13.127:4000/order'
    } ;
  default:
      taget = {
        'ihospitalapi':'http://10.0.13.127:8769/ihospital-api',
          'authweb':'http://10.0.13.127/auth-web',
        'order':'http://10.0.13.127:4000/order'
      } ;
      break ;
    break ;
}
module.exports = taget;

