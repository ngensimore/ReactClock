import React from 'react'
import './Clock.css'
function Clock (props){
    
    return(
        <div className = "Clock">
            {props.time}
        </div>
    )
}

export default Clock