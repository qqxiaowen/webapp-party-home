import axios from 'axios'
import qs from 'qs'

var instance = axios.create({
    baseURL: '/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
export const  $axios = {
    get(url,data,config){
        return new Promise((resolve,rejects) => {
            instance.get(url,{params:data},config).then(res => {
                resolve(res.data)
            }).catch(err =>{
                rejects(err)
            })
        })
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,rejects) => {
            
            console.log(data)
            let queryData = qs.stringify(data)
            console.log(queryData)
            instance[methods](url,queryData,config).then(res => {
                resolve(res.data)
            }).catch(err => {
                rejects(err)
            })
        })
    },
    post(url,data,config){
        return this.fetch(url,data,config,'post')
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    }
}

export function handletime(str){
    let time = new Date(str)
    let newtime = time.toLocaleDateString() +" "+ time.toTimeString().substr(0, 8)
    return newtime
}


