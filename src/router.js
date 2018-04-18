import React from 'react'
import {Router, Route, Switch} from 'dva/router'
import dynamic from 'dva/dynamic'
import user from './models/user'
const Index = (app) => dynamic({
    app,
    models: () => [global],
    component: () => import('./pages/index')
})

const User = (app) => dynamic({
    app,
    models: () => [import('./models/global')],
    component: () => import('./pages/user')
})

const getRouter = ({app,history}) => {
    console.log(app,history)
    return (
        <Router history={history}>
            <Switch>
                <Route path="/user" component={User(app)}/>
                <Route path="/" component={Index(app)}/>
            </Switch>
        </Router>
    )
}

export default getRouter