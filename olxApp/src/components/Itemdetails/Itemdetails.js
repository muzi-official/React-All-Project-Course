import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Home/Footer/Footer'
import Header from '../../components/Home/Header/Header'
import Navbar from '../../components/Home/Navbar/Navbar'
import db from '../Config/firebase'
import ItemsDetail from './ItemsDetail/ItemsDetail'


function Itemdetails() {
    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        db.collection("sellitem").doc(id).onSnapshot(snapshot => (
            setItems(snapshot.data())
        ))
    }, [])

    return (
        <div className="Items__page">
            <Header />
            <Navbar />
            <ItemsDetail
                key={id}
                id={id}
                name={items.name}
                price={items.price}
                image={items.image}
                category={items.category}
                description={items.description}
                timestamp={items.timestamp}
                userImg={items.userImg}
                userName={items.userName}
                location={items.location}
            />
            <Footer />
        </div>
    )
}

export default Itemdetails
