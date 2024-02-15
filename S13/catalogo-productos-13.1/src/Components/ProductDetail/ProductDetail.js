import "./ProductDetail.css"
import React from "react";
import useFetch from "../../Hooks/useFech";
import { useParams } from "react-router-dom"; //Para recibir el parametro puesto desde otro componente

//https://www.pexels.com/photo/
//https://api.pexels.com/v1/
const URL_ID = `https://api.pexels.com/v1/photos/`

const ProductDetail = () => {

    const {productId} = useParams();
    const id = productId; // Tardé mucho por esto!
    const [info] = useFetch(URL_ID + id);
    console.log("El id:", id)
    console.log("La info:", info)

    return (
        <div className="product-details-container">
            {info && (
                <div className="product-details" key={info.id}>
                    <img src={info.src?.medium} />
                    <p>Design de {info.photographer}</p>
                    <p>Precio: 70€</p>
                    <p><strong>{info.alt}</strong></p>
                    <button>❤️</button>
                </div>
            )}
        </div>
    )
}

export default ProductDetail;