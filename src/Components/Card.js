import React from 'react'
import AvatarGenerator from './ImageGen'
import {ImageGen} from './ImageGen'

function Card(props) {
    return (
        <div className = "wrapper col-md-8">
            <img 
            src = {(props.item.url)} 
            className = "rounded-circle"
            />
            <h4>{props.item.author}</h4>
            <button className = "btn btn-success" onClick = {this.props.handleClick}>Vote</button>
            <span>Result {this.props.voteCount}</span>
        </div>
    )
}

export default Card