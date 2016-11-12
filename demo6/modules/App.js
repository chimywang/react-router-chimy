import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import NavLinkStyle from './NavLinkStyle'
export default class App extends React.Component {
    render() {
        return (<div>
            <h1>React Router Tutorial</h1>
            <ul role="nav">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/repos">Repos</Link></li>
                <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
                <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/repos" >Repos</NavLink></li>
                <li><NavLinkStyle to="/about" >About</NavLinkStyle></li>
                <li><NavLinkStyle to="/repos" >Repos</NavLinkStyle></li>
            </ul>
            {this.props.children}
        </div>)
    }
}