import React from 'react'

const DateTitle = (props) => {
    return (
        
        <h6 className="w3-text-teal"><i className={`${props.iconClass} w3-margin-right`}></i>
            {props.forever ?
                "Forever"
                : `${props.start} - `
            }
            {props.current ? 
                <span className="w3-tag w3-teal w3-round">Current</span>
                : props.end
            }
        </h6>
    )
}

export default DateTitle;