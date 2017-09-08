/**
 * Created by andy on 2017-06-12.
 */
export function urlReplace(url,param){
  if(!url){
     return null ;
  }else{
    if(param){
         if(typeof url === 'string'){
           for(let i in param){
             let reg  = new RegExp("{" + i + "}") ;
             if (reg.test(url))
                 url = url.replace(reg,param[i])
           }
           return url;
         }else {
           return 'null' ;
         }
    }else{
      return url;
    }
  }
}
