import axios from 'axios'

var instance = axios.create({
    baseURL: '/api',
    timeout: 1500,
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
            instance[methods](url,data,config).then(res => {
                resolve(res.data)
            }).catch(err => {
                rejects(err)
            })
        })
    },
    post(url,data,config){
        return this.fetch(url,data,config,post)
    },
    put(url,data,config){
        return this.fetch(url,data,config,put)
    }
}

export function handletime(str){
    let time = new Date(str)
    let newtime = time.toLocaleDateString() +" "+ time.toTimeString().substr(0, 8)
    return newtime
}


