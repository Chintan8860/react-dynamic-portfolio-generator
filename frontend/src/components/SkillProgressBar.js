import React from 'react'

const SkillProgressBar = (props) => {
    return (
        <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: `${props.percentage}%` }}>{props.percentage}%</div>
        </div>
    )
}

export default SkillProgressBar;
