// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component{
    render() {
        return <Link {...this.props} activeStyle={{ color: 'red' }}/>
    }
}