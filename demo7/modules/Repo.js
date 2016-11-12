import React from 'react'
export default class extends React.Component {
    render() {
        return (<div><h2>{this.props.params.userName}:{this.props.params.repoName}</h2></div>)
    }
}