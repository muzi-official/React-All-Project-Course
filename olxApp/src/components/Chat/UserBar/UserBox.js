import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './userBox.css'

function UserBox({ sellerID, sellerImg, sellerName }) {
    console.log(sellerID)
    return (
        <Link className="userBox" to={`/chatwithseller/chat/${sellerID}`}>
            <Avatar src={sellerImg} />
            <div className="userInfo">
                <h3>{sellerName}</h3>
                <p >Last message</p>
            </div>
        </Link>
    )
}

export default UserBox;
