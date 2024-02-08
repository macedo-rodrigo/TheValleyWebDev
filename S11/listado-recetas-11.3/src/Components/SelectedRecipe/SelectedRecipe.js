import React from "react";
import "./SelectedRecipe.css";

const SelectedRecipe = ({ selectedRecipe }) => {

    console.log("Renderizando SelectedRecipe", selectedRecipe);

    return (
        <div>
            <h2>Receta seleccionada</h2>
            {selectedRecipe ? (
                <div>
                    <img className="selected-recipe-img" src={selectedRecipe.imageUrl} alt={selectedRecipe.name} />
                    <p>{selectedRecipe.name}</p>
                    <p>Este plato sirve {selectedRecipe.numPeople} personas</p>
                </div>
            ) : (
                <p>Selecciona una receta</p>
            )}
        </div>
    )
}

export default React.memo(SelectedRecipe);
