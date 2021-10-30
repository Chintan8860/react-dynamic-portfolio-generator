import React from 'react'

const UserInfo = (props) => {
    return (
            <p><i className={`${props.iconClass} w3-margin-right w3-large w3-text-teal`}></i>{ props.info}</p>
    )
}

export default UserInfo;