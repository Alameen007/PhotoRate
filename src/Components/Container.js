import React from 'react'
import Card from './Card'
import {ImageGen} from './ImageGen'
import AvatarGenerator from './ImageGen'

function Container(props) {
    return (
        <div className = "container">
           {/*  <Card 
            src = {props.Image.url}
            name = "Musa Bello"
            />
            <Card /> */}
            <AvatarGenerator />
        </div>    
    )
   
}

export default Container