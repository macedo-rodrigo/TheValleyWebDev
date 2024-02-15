import "./Header.css";
import { useNavigate, NavLink } from "react-router-dom"


const Header = () => {

    const navigate = useNavigate();

    return (

        <nav className="navigation" >
            <div className="button_container">
                <button className="button_previous">Previous</button>
                <button className="button_next">Next</button>
            </div>
            <div className="section-container">
                <NavLink className="section" to="/home">Home</NavLink>
                <NavLink className="section" to="/our-products">Our products</NavLink>
                <NavLink className="section" to="/my-account">My Account</NavLink>
                <NavLink className="section" to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default Header;