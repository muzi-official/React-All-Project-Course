import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import Navbar from '../Home/Navbar/Navbar'
import './Chat.css'
import ChatBar from './ChatBar/ChatBar'
import UserBar from './UserBar/UserBar'
import { useSelector } from 'react-redux'
import emptyImg from '../../Images/emptyChat.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import db from '../Config/firebase'

function Chat() {
    const { user } = useSelector(state => state.user)
    const { id } = useParams()
    let sellerID = id
    const [value, setValue] = useState([]);


    useEffect(() => {
        if (sellerID) {
            db.collection("sellitem").doc(sellerID).onSnapshot(snapshot => (
                setValue(snapshot.data())
            ))
        }
    }, [sellerID])

    return (
        <div className="Chat">
            <div className="ChatBox">
                {!user ? (
                    <>
                        <Header />
                        <Navbar />
                        <div className="emptyBox">
                            <h3>No message, yet ?</h3>
                            <img src={emptyImg} />
                            <h3>We’ll keep messages for any item you’re selling in here</h3>

                        </div>
                    </>
                ) : (
                        <>
                            <Header />
                            <Navbar />
                            <div className="chat__box">
                                <UserBar
                                    sellerID={sellerID}
                                    sellerImg={value.userImg}
                                    sellerName={value.userName}
                                />
                                <Switch>
                                    {!sellerID ? (
                                        <Route exact path="/chatwithseller/chat">
                                            <ChatBar />
                                        </Route>
                                    ) : (
                                            <Route exact path="/chatwithseller/chat/:id">
                                                <ChatBar
                                                    sellerID={sellerID}
                                                    sellerName={value.userName}
                                                    name={user.displayName}
                                                    Item={value.name}
                                                    price={value.price}
                                                    sellerImg={value.userImg}
                                                />
                                            </Route>

                                        )}

                                </Switch>
                            </div>
                        </>
                    )
                }
            </div >
        </div >
    )
}

export default Chat
