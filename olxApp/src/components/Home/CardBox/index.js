import React, { useEffect, useState } from 'react'
import './CardBox.css'
import Cards from './Cards/index'
import db from '../../Config/firebase'

function CardBox() {
    const [sellitem, setSellitem] = useState([]);


    useEffect(() => {
        db.collection('sellitem').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setSellitem(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))

        ))
    }, []);


    return (
        <div className="card__box">
            <h2>
                Fresh Recommendation
            </h2>
            <div className="Cards">
                {sellitem.map(sellitems => {
                    // console.log('data =>', sellitem[id])
                    return (
                        <Cards
                            key={sellitems.id}
                            id={sellitems.id}
                            title={sellitems.data.name}
                            price={sellitems.data.price}
                            category={sellitems.data.category}
                            image={sellitems.data.image}
                            description={sellitems.data.description}
                            location={sellitems.data.location}
                            timestamp={sellitems.data.timestamp}
                        />)

                }
                )}

            </div>
        </div>
    )
}

export default CardBox
