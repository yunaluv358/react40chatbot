import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from '../pages'
import {Chat} from '../components'

const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home"/>
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {path: '/chat', exact: true, component: Chat}
]
export default routerConfig