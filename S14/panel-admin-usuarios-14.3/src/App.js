import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import CreateUser from "./Components/CreateUser/CreateUser";
import { IntlProvider } from "react-intl";
import Spanish from "./Languages/es.json";
import English from "./Languages/en.json";
import { useCallback, useEffect, useState } from "react";
import Header from "./Components/Header/Header";


const App = () => {
  const locale = navigator.language;
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      case "en-EN":
        setMessages(English);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  const changeLang = useCallback(
    (lang) => {
      console.log(lang);
      setMessages(lang);
      console.log("EL message", messages);
    },
    [messages]
  );

  return (
    <IntlProvider locale={locale} messages={messages}>
      <HashRouter>
        <Header changeLang={changeLang}></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/create-user" element={<CreateUser></CreateUser>}></Route>
        </Routes>
      </HashRouter>
    </IntlProvider>
  );
};

export default App;

//<NavLink to={"/" + formatMessage({ id:'header.users' })}><FormattedMessage id="header.users"/></NavLink>
