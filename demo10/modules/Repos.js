import React from 'react'
import { Link  } from 'react-router'
import NavLink from './NavLink'
export default class extends React.Component {
    render() {
        return (<div>
            <h2>Repos</h2>
            <ul>
                <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                <li><Link to="/repos/facebook/react">React</Link></li>
                <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                <li><NavLink to="/repos/facebook/react">React</NavLink></li>
            </ul>
            {this.props.children}
        </div>)
    }
}