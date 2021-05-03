import React, { useState } from 'react'
import './Sellitem.css'
import Olx_img from '../../Images/Olx-img.png'
import db from '../Config/firebase'
import firebase from 'firebase'
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'


function Sellitem() {
    let history = useHistory();
    const userData = useSelector(state => state.user)
    const { user } = userData;


    const [itemName, setitemName] = useState("");
    const [itemPrice, setitemPrice] = useState("");
    const [itemCategory, setitemCategory] = useState("");
    const [itemImage, setitemImage] = useState("");
    const [address, setaddress] = useState("");
    const [itemDescription, setitemDescription] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('sellitem').add({
            name: itemName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            price: itemPrice,
            category: itemCategory,
            image: itemImage,
            location: address,
            description: itemDescription,
            userName: user.displayName,
            userImg: user.photoURL,
        })

        setitemName("");
        setitemPrice("");
        setitemCategory("");
        setitemImage("");
        setaddress("");
        setitemDescription("");

        history.push('/')
    }

    return (
        <div className="sellitem">
            {
                !user ? (
                    history.push('/Login')
                ) : (<>

                    <div className="sellitem__header">
                        <img className="sellitem__logo" src={Olx_img} />
                        <h2> Sell item form</h2>
                    </div>
                    <div className="sellitem__form">
                        <form>
                            <div className="row item">
                                <div className="col-25">
                                    <label>Item Name</label>
                                </div>
                                <div className="col-75 item">
                                    <input
                                        value={itemName}
                                        onChange={(e) => setitemName(e.target.value)}
                                        type="text"
                                        placeholder="Item Name"
                                    />
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-25">
                                    <label>Item Category</label>
                                </div>
                                <div className="col-75">
                                    <select id="category"
                                        value={itemCategory}
                                        onChange={(e) => setitemCategory(e.target.value)}
                                    >
                                        <option>Select Item Category</option>
                                        <option>Mobile Phones</option>
                                        <option>Cars</option>
                                        <option>Motorcycles</option>
                                        <option>Houses</option>
                                        <option>TV-Video-Audio</option>
                                        <option>Tablets</option>
                                        <option>Land & Plots</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-25">
                                    <label>Item Price</label>
                                </div>
                                <div className="col-75 item">
                                    <input
                                        type="number"
                                        placeholder="Item Price (in Rs)"
                                        value={itemPrice}
                                        onChange={(e) => setitemPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-25">
                                    <label>Item Image</label>
                                </div>
                                <div className="col-75 item">
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={itemImage}
                                        onChange={(e) => setitemImage(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-25">
                                    <label>Locations</label>
                                </div>
                                <div className="col-75 item">
                                    <input
                                        type="text"
                                        placeholder="Where located ..."
                                        value={address}
                                        onChange={(e) => setaddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row item">
                                <div className="col-25">
                                    <label>Item Description</label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                        className="description"
                                        value={itemDescription}
                                        onChange={(e) => setitemDescription(e.target.value)}
                                        placeholder="Write description about item">
                                    </textarea>
                                </div>
                            </div>
                            <div className="row item">
                                <input type="submit" onClick={handleSubmit} value="SUBMIT" />

                                <button className="cancel-btn" type="button">
                                    <Link to="/">CANCEL</Link>
                                </button>

                            </div>

                        </form>
                    </div>
                </>)}
        </div>
    )
}

export default Sellitem
