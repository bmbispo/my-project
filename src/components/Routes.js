import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/login'
import Register from '../pages/register'



const Routes = () => (
        <Switch>
            <Route component={Login} exact path="/" />
            <Route component={Register} exact path="/register" />
        </Switch>

)
export default Routes;