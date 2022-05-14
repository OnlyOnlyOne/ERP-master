import axios from './axios'
export const getMenu = (param) =>{
    return axios.request({
        url: '/permission/getMenu',
        method: 'post',
        data: param
    })
}

export const getData = ()=>{
    return axios.request({
        url: '/home/getData',
        method: 'get'
    })
}

export const getUser = (parms)=>{
    console.log("=======>" + parms.name);
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        data:parms
    })
}

export const getList = (id)=>{
    // console.log("=======>" + parms.name);
    return axios.request({
        url: `/product/detail?id=${id}`,
        method: 'get',
    })
}

