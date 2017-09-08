/**
 * Created by andy on 2017-08-09.
 */
import axios from 'axios'
import {urlReplace} from './urlReplaceUtils'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.validateStatus((status)=>{
    return status == 200; // default
})
export function promiseGet(url,data,param){
    return new Promise((resole,reject)=>{
        axios.get(urlReplace(url,param),data).then(res=>{
            resole(res)
        }).catch(e=>{
            console.dir(e)
        });
    });
}
export function promisePost(url,data,param){
    return new Promise((resole,reject)=>{
        axios.post(urlReplace(url,param),data).then(res=>{
            resole(res)
        }).catch(e=>{
                console.dir(e)
            })
    });
}

export function promiseDelete(url,data,param){
    return new Promise((resole,reject)=>{
        axios.delete(urlReplace(url, param), data).then(res=>{
            resole(res)
        }).catch(e=>{
                console.dir(e)
            })
    });
}