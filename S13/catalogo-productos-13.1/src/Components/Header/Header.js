import "./Header.css";
import { useNavigate, NavLink } from "react-router-dom"


const Header = () => {

    // Navegación
    const navigate = useNavigate();

    return (

        <nav className="navigation" >
            <div className="button_container">
                <button className="button_previous" onClick={() => navigate(-1)}>Previous</button>
                <button className="button_next" onClick={() => navigate(1)}>Next</button>
            </div>
            <div className="section-container">
                <NavLink className="section" to="/home">Home</NavLink>
                <NavLink className="section" to="/our-products">Our products</NavLink>
                <NavLink className="section" to="/my-account">My Account</NavLink>
                <NavLink className="section" to="/login">Login</NavLink>
            </div>
            <button className="button_next" onClick={() => navigate(1)}>Next</button>
        </nav>
    );
}

export default Header;