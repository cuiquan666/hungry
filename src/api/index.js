import axios from 'axios';


export let getHome =()=>{
    return axios.get('/static/sock/list.json')
}

export let getList =(id)=>{
    return axios.get('/static/sock/decv/'+id+'.json')
}
