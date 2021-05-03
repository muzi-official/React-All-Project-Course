import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import FlagIcon from '@material-ui/icons/Flag';
import PhoneIcon from '@material-ui/icons/Phone';
import SmsIcon from '@material-ui/icons/Sms';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicNoneRoundedIcon from '@material-ui/icons/MicNoneRounded';
import './ChatBar.css'
import db from '../../Config/firebase';
import { useSelector } from 'react-redux';

function ChatBar({ sellerID, sellerName, name, Item, price, sellerImg }) {
    const { user } = useSelector(state => state.user)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection("sellitem").doc(sellerID).collection("sellchat").onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) => doc.data())))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("sellitem").doc(sellerID).collection("sellchat").add({
            message: input,
            itemName: Item,
            itemPrice: price,
            sellerName: sellerName,
            sellerImg: sellerImg,
            clientName: user.displayName
        })
        setInput("");

    }
    return (
        <div className="chat__screen">
            <div className="chat__screenheader">
                <div className="headerLeft">
                    <Avatar src={sellerImg} />
                    <div className="headerInfo">
                        <h3>{sellerName}</h3>
                        <p className="lastseen">Last Seen ...</p>
                    </div>
                </div>
                <div className="headerRight">
                    <IconButton>
                        <FlagIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                    <IconButton>
                        <SmsIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__itemDetails">
                <p> {Item} </p> <span>{price}</span>
            </div>
            <div className="chat__screenbody">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName &&
                        'chat__reciever'}`}>
                        <span className="chat__name">{message.clientName}</span>
                        {message.message}
                    </p>
                ))}

            </div>
            {/* <div className="chat__bodydefault">
                        <img src={emptyImg} />
                        <h3>Select a Chat to view conversation</h3>
                    </div> */}
            <div className="chat__screenfooter">
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type any message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicNoneRoundedIcon />
                </IconButton>
            </div>



        </div>
    )
}

export default ChatBar
