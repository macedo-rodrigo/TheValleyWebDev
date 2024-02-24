import "./Header.scss";
import { NavLink } from "react-router-dom";
import Spanish from "../../Languages/es.json";
import English from "../../Languages/en.json";
import { FormattedMessage } from "react-intl";

const Header = ({changeLang}) => {
  return (
    <div className="header">
      <div className="header__sections">
        <NavLink className="header__section" to="/">
          <FormattedMessage id="header.home" />
        </NavLink>
        <NavLink className="header__section" to="/users">
          <FormattedMessage id="header.users" />
        </NavLink>
        <NavLink className="header__section" to="/create-user">
          <FormattedMessage id="header.createUser" />
        </NavLink>
      </div>
      <div className="header__buttons">
        <button className="header__button" onClick={() => changeLang(Spanish)}>ES</button>
        <button className="header__button" onClick={() => changeLang(English)}>EN</button>
      </div>  
    </div>
  );
};

export default Header;
