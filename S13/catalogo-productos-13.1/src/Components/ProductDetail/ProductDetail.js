import "./ProductDetail.css"
import React, { useCallback } from "react";
import useFetch from "../../Hooks/useFech";
import { useParams } from "react-router-dom"; //Para recibir el parametro puesto desde otro componente

//https://www.pexels.com/photo/
//https://api.pexels.com/v1/
const URL_ID = `https://api.pexels.com/v1/photos/`

const ProductDetail = () => {

    const [favoriteProducts, setFavoriteProducts] = React.useState([])

    const { productId } = useParams();
    const id = productId; // Tardé mucho por esto!
    const [info] = useFetch(URL_ID + id);

    
    const handleClick = useCallback((e) => {
        const newFavorites = [...favoriteProducts]
        setFavoriteProducts(newFavorites.push(e))
        console.log("Description of your favorite design:", newFavorites)

    },[favoriteProducts]);

    return (
        <div className="product-details-container">
            {info && (
                <div className="product-details" key={info.id}>
                    <img src={info.src?.medium} />
                    <p>Designer: {info.photographer}</p>
                    <p>Precio: 70€</p>
                    <p><strong>{info.alt}</strong></p>
                    <button onClick={() => handleClick(info.alt)}>❤️</button>
                </div>
            )}
        </div>
    )
}

export default ProductDetail;