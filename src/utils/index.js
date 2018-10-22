import axios from 'axios'
import qs from 'qs'
import store from '../store'

var instance = axios.create({
    baseURL: '/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'token' : store.state.token
    }
});

// 添加请求拦截器
instance.interceptors.request.use( config => {
    // 在发送请求之前做些什么
    if(store.state.userinfo){
        config.headers.token = store.state.token
        // config.headers = {...config.headers,...{
        //     'token' : store.state.token
        // }}

    }
    return config;
}, error => {
    return Promise.reject(error); // 对请求错误做些什么
});


export const  $axios = {
    get(url,data, config){
        return new Promise((resolve,rejects) => {
           
            instance.get(url,{params:data, ...config}).then(res => {
                resolve(res.data)
            }).catch(err =>{
                rejects(err)
            })
        })
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,rejects) => {
            
            let queryData = qs.stringify(data)
            console.log('处理后的数据',queryData)
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
    let year = time.getFullYear();
    let month = time.getMonth() +1;
    let day = time.getDate()
    month = month < 10 ? '0' + month : month
    day = day <10 ? '0' + day : day
    // let newtime = time.toLocaleDateString() +" "+ time.toTimeString().substr(0, 8)
    let newtime = `${year}-${month}-${day}`
    return newtime
}


