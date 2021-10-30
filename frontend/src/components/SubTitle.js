import React from 'react'

const SubTitle = (props) => {
    
    return (
        props.type === "bold" ?
            <h5 className="w3-opacity"><b>{props.title}</b></h5>
            :<p>{props.title}</p>
    )
}

export default SubTitle;