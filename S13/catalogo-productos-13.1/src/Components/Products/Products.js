import "./Products.css";
import useFetch from "../../Hooks/useFech";
import { NavLink } from "react-router-dom";


const API_URL = `https://api.pexels.com/v1/search?query=shoes`



const Products = () => {

    // Custom hook
    const [info] = useFetch(API_URL);


    return (
        <>
        <h1 className="page">Step into style!</h1>
        <div className="catalog">
            {info.photos && info.photos.map((product) => {
            return(
                <div className="product-card" key={product.id}>
                    <img className="product-img" src={product.src.medium}/>
                    <div>
                    <p className="product-alt">{product.alt}</p>
                    <NavLink to={`/product-detail/${product.id}`} className="product-button">Product details</NavLink>
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default Products;