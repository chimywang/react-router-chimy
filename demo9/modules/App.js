import React from 'react'

import NavLink from './NavLink'

import Home from './Home'
import { IndexLink,Link } from 'react-router'
export default class App extends React.Component {
    render() {
        return (<div>
            <h1>React Router Tutorial</h1>
            <ul role="nav">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
                <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
            </ul>
            {this.props.children}
        </div>)
    }
}