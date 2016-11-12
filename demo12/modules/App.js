import React from 'react'

import NavLink from './NavLink'

import Home from './Home'
import { IndexLink,Link } from 'react-router'
export default class  extends React.Component {
    render() {
        return (<div>
            <h1>React Router Tutorial</h1>
            <ul role="nav">
                <li><NavLink to="/about">1About</NavLink></li>
                <li><NavLink to="/repos">1Repos</NavLink></li>
                <li><IndexLink to="/" activeClassName="active">1Home</IndexLink></li>
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>1Home</Link></li>
                <li><NavLink to="/" onlyActiveOnIndex={true}>1Home</NavLink></li>
            </ul>
            {this.props.children}
        </div>)
    }
}