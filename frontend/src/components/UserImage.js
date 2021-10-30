import React from 'react'

const UserImage = (props) => {
    return (
        <img src={props.src} style={{width:"100%"}} alt="Avatar" />
    )
}

export default UserImage;