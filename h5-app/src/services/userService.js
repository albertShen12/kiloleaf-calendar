import request from '../utils/request';

const userService={
    login:(params)=>{
        return request.get('/user/login',params);
    }
}

export {userService};