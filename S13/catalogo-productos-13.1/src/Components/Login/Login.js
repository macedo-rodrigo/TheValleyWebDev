import { Navigate } from "react-router-dom";
import React from "react";

const Login = () => {

    // La const que hará uso del contexto creado en App.js
    const authInfo = React.useContext(AuthContext);

    return (
        <div className="page">
            <h1>Login</h1>
            {
                authInfo && authInfo.user ?
                    <Navigate to="/my-account" replace={true}></Navigate> :
                    <button onClick={() => props.login({ user: "Rodri" })}>Log in</button>
            }
        </div>
    );
}


export default Login;