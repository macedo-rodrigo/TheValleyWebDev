import "./ItemList.css";
import React from "react";

const initialValue = {
    items: [{
        id: 0,
        name: "",
        price: 0,
        units: 0,
        total: 0,
    }],
    lastItemCreated: 0,
};


const reducer = (state, action) => { // Aquí es donde ocurre la transformación (action) del valor actual (state)

    const newState = { ...state };

    switch (action.type) {

        case "ADD ITEM":
            console.log("Soy la accion ADD ITEM")
            const newItem = {
                id: state.lastItemCreated + 1,
                name: action.payload.name,
                price: action.payload.price,
                units: action.payload.units,
                total: parseFloat(action.payload.price) * action.payload.units,
            };
            newState.items = [...newState.items, newItem];
            newState.lastItemCreated = newItem.id;
            break;

        case "DELETE ITEM":
            console.log("Me estoy ejecutando, soy el remover")
            newState.items = newState.items.splice(action.payload.id)
            break;
        default:
            console.log("ACTION NOT SUPPORTED");
    }

    return newState;
};


const ItemList = () => {

    const [state, dispatch] = React.useReducer(reducer, initialValue)

    // Función para calcular el total de todos los totales por acumulación
    const calculateTotal = () => {
        return state.items.reduce((acum, item) => acum + parseFloat(item.total), 0);
    };

    const inputNameReference = React.useRef(null);
    const inputPriceReference = React.useRef(null);
    const inputUnitsReference = React.useRef(null);

    const onSubmit = React.useCallback((event) => { //El useCallback es porque esta funcion esté ADENTRO del componente, así no se redefine todo el rato.
        event.preventDefault(); //P/ evitar que la página refresque al enviar
        const payloadToSend = {
            name: inputNameReference.current.value,
            price: inputPriceReference.current.value,
            units: inputUnitsReference.current.value,
        };
        dispatch({ type: "ADD ITEM", payload: payloadToSend })

        inputNameReference.current.value = ""; // Limpio ambos valores después del submit. Supongo que si hubiese más convenida crear un funcion de cleaner.
        inputPriceReference.current.value = "";
        inputUnitsReference.current.value = "";

        console.log(payloadToSend);
    }, [])

    const removeItem = React.useCallback((itemId) => {

        const payloadToRemove = {
            id: itemId,
        }

        dispatch({ type: "DELETE ITEM", payload: payloadToRemove });

    }, [])




    return (
        <div className="cart-container">
            <div>
                <h2 className="cart-title">Cart 🛒</h2>

                <form className="add-item-form" onSubmit={onSubmit}>
                    <label className="form-label">
                        <p className="form-label-text">What do you need to purchase? 🧺</p>
                        <input className="form-input" ref={inputNameReference} name="product" type="text" placeholder="E.g.: Bread" />
                    </label>
                    <label className="form-label">
                        <p className="form-label-text">How much does it cost? 💸 </p>
                        <input className="form-input" ref={inputPriceReference} name="price" type="text" placeholder="E.g.: 5.50" />
                    </label>
                    <label className="form-label">
                        <p className="form-label-text">How many do you need? 🔢</p>
                        <input className="form-input" ref={inputUnitsReference} name="units" type="number" />
                    </label>
                    <button className="submit-button" type="submit">Add it to the list 👇🏽</button>
                </form>
            </div>
            <div>
                <h2 className="item-list-title">Your choices</h2>
                <div className="item-list-container">
                    {state.items?.map((item) => {
                        return (
                            item.id > 0 ? (
                                <div className="item-card" key={item.id}>
                                    <div className="item-card-info">
                                        <p className="item-name">Product: {item.name}</p>
                                        <p className="item-price">Price: {item.price}€</p>
                                        <p className="item-units">Unit: {item.units}</p>
                                        <p className="item-total">Total: {item.total}€</p>
                                    </div>
                                    <div>
                                        <button className="item-card-button" onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                                </div>
                            ) : (<p>Your list is currently empty</p>)
                        )
                    })}
                    {calculateTotal() !== 0 ? <h3>TOTAL: {calculateTotal()}€</h3>: null}
                </div>
            </div>
        </div>
    )
}

export default ItemList;