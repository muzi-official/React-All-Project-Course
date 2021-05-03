import React from 'react'
import './ItemDetail.css'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar, IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';


function ItemsDetail({ id, image, name, location, description, price, timestamp, userImg, userName }) {

    return (
        <div className="Items__details">
            <div className="Items__image">
                <img src={image} />
            </div>
            <div className="Items__detail">
                <h2>
                    Details
                </h2>
                <div className="detail">
                    <h1>
                        Rs {price} <br />
                        <span className="detail__title">{name}</span>

                    </h1>
                    <div className="detail__icons">
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="detail__footer">
                    <span className="detail__location">{location}</span>
                    <span className="detail__timestamp">{new Date(timestamp?.toDate()).toDateString()}
                    </span>
                </div>
            </div>
            <div className="Items__owner">
                <h2>Seller description</h2>
                <div className="Owners__details">
                    <div className="Owners__identity">
                        <Avatar src={userImg} />
                        <h3>{userName}</h3>
                    </div>

                    <div className="Owners_num">
                        <span> <PhoneIcon /></span>
                        <span>03** *** ****</span>
                    </div>
                </div>
                <div>
                    <Link to={`/chatwithseller/chat/${id}`}>
                        <button className="Chat_btn">
                            Chat with seller
                        </button>
                    </Link>
                </div>
            </div>
            <div className="Items__desc">
                <h2>
                    Description
                </h2>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default ItemsDetail
