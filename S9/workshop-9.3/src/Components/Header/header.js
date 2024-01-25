import Link from "./Link";
import "./header.css";
import Logo from "./logo";



const NavigationButton = (props) => {
    return (
        <div className="header-container">
            <div className="container-rrss">
                <Link text="Facebook" />
                <Link text="Instagram" />
                <Link text="Twitter" />
            </div>
            <Logo />
            <div className="container-web">
                <Link text="Docu React" />
                <Link linkStyle="button" text="Ir a The Valley"/>
            </div>
        </div>
    );

}


export default NavigationButton;