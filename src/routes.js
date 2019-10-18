import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Wizard from './components/wizard/Wizard'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>

    </Switch>
)