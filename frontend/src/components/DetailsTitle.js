import React from 'react'

const DetailsTitle = (props) => {
    console.log(props)
    return (
        props.large ?
            <p className="w3-large"><b><i className={`${props.iconClass} w3-margin-right w3-text-teal`}></i>{props.title}</b></p>
    
            : <h2 className="w3-text-grey w3-padding-16"><i className={`${props.iconClass} w3-margin-right w3-xxlarge w3-text-teal`}></i>{props.title}</h2>
            )
}

export default DetailsTitle;
