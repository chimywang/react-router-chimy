import React from 'react'
import {render} from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import {Router, Route, hashHistory,Link} from 'react-router'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/about" activeClassName="active" component={About}/>
            <Route path="/repos" activeClassName="active" component={Repos}/>

        </Route>
    </Router>
), document.getElementById('app5'));
