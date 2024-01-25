import React from "react";
import "./BankAccount.css";

const BankAccount = () => {

    // 1. atención: para el valor del useState estamos usando un objeto {}
    const [account, setAccount] = React.useState({
        name: "Rodri",
        savings: 5000,
        founds: 1000,
    });

    // 3. Hago la primera función, la de retirar dinero
    const takeMoney = () => {

        if (account.savings >= 50) { // Condición en caso de fondos insuficientes
            const newAccount = {
                ...account,
                savings: account.savings - 50,
            };
    
            setAccount(newAccount); //Actualizando el valor
        } else {
            alert("Fondos insuficientes. Ingresa más dinero en tu cuenta.");
        }
    }

    // 4. Ahora la de ingresar dinero
    const addMoney = () => {
        const newAccount = {
            ...account,
            savings: account.savings + 100,
        };

        setAccount(newAccount);
    }

    // 5. Ahora la de invertir
    const addMoneyToFounds = () => {
        if (account.savings >= 1000) {
            const newAccount = {
                ...account,
                savings: account.savings - 1000,
                founds: account.founds + 1000
            };
    
            setAccount(newAccount);
        } else {
            alert("Para invertir, ingresa más dinero en tu cuenta.")
        }
    }


    // 2. Antes de hacer las demás funciones, armo la estructura jxs
    return (
        <>
            <h1>Cuenta Bancaria</h1>
            <div className="bank-info">
                <div>El titular de la cuenta es: {account.name}</div>
                <div>El saldo de la cuenta de ahorros es: {account.savings}</div>
                <div>El total del fondo de inversión es: {account.founds}</div>
            </div>
            <button onClick={takeMoney}>Retirar 50€:</button>
            <button onClick={addMoney}>Ingresar 100€:</button>
            <button onClick={addMoneyToFounds}>Invertir 1000€</button>
        </>

    )

}

export default BankAccount;