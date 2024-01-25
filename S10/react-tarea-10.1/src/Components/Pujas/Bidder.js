import React from "react";
import "./Bidder.css";

const Bidder = () => {

    const [bidderList, SetBidderList] = React.useState([100]) // Al trabajar con listas, el valor con defecto suele ser un array (para que se genere un item bajo otro)

    const bidderAction = () => { // La función que voy a llamar siempre que alguien puje
        const newBid = bidderList[bidderList.length - 1] + 5; // El valor de la puja anterior más 5
        SetBidderList([...bidderList, newBid]);
    }


    return (
        <div>
            <h1>All bids</h1>
            <ol>
                {bidderList.map ((puja, index) =>
                <li key={index}>{puja}</li>)} 
            </ol>

            <h1>Pujadores:</h1>
            <button onClick={bidderAction}>Pedro bids 5€</button>
            <button onClick={bidderAction}>Gonzalo bids 5€</button>
            <button onClick={bidderAction}>Edu bids 5€</button>
        </div>
    )
}

export default Bidder;