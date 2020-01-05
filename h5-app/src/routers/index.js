import React from 'react'
import Bundle from './bundle.js'
import {Login} from '../views/login'
import {Home} from '../views/home'

const routes=[
    {
        path:'/login',
        exact:true,
        component:Login
    },
    {
        path:'/',
        exact:true,
        redirect:'/home'
    },
    {
        path:'/home',
        exact:true,
        component:Home
    }
];