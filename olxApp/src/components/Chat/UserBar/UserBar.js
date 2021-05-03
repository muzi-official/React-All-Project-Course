import React from 'react'
import { IconButton } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UserBox from './UserBox';
import './UserBar.css'
function UserBar({ sellerID, sellerImg, sellerName }) {
    return (
        <div className="user__box">
            <div className="user__boxHeader">
                <h2> INBOX </h2>
                <div>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="user__boxContainer">
                <UserBox
                    sellerID={sellerID}
                    sellerImg={sellerImg}
                    sellerName={sellerName}
                />
            </div>
        </div>
    )
}

export default UserBar
