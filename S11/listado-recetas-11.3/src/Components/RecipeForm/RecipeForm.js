import React from "react";
import "./RecipeForm.css";

const RecipeForm = (props) => {

    const nameRef = React.useRef();
    const numberRef = React.useRef();
    const imageRef = React.useRef();

    const submitForm = (event) => {

        event.preventDefault();
        event.stopPropagation();

        const newRecipe = {
            name: nameRef.current.value,
            numPeople: numberRef.current.value,
            imageUrl: imageRef.current.value,
            ingredients: []
        };

        console.log("", newRecipe);

        props.addRecipe(newRecipe);
    }

    return (
        <div>
            <h1>Añade una receta</h1>

            {/*Formulario*/}
            <form onSubmit={submitForm} className="form-container">
                <div className="input-container">
                    <label>Introduce un nombre:</label>
                    <input className="input" ref={nameRef} type="text" name="name" id="name" />
                </div>
                <div className="input-container">
                    <label>Introduce el número de personas:</label>
                    <input className="input" ref={numberRef} type="number" name="ammount" id="ammount" />
                </div>
                <div className="input-container">
                    <label>Introduce la url de la imagen:</label>
                    <input className="input" ref={imageRef} type="text" name="imageUrl" id="imageUrl" />
                </div>
                <button className="add-recipe-button" type="submit">Añadir receta</button>
            </form>
        </div>
    )

}

export default RecipeForm;
