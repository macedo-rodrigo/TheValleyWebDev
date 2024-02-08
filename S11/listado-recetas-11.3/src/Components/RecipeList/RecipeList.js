
import "./RecipeList.css";

const RecipeList = ({ recipes, onRecipeClick }) => {


    return (
        <div>
            <h1 className="title">Listado de recetas</h1>
            {recipes && recipes.map((recipe) => {
                return (
                    <div className="recipe-card" onClick={(e) => { e.preventDefault(); onRecipeClick(e, recipe); }} key={recipe.id}>
                        <img className="recipe-image" src={recipe.imageUrl} />
                        <div className="recipe-info-container">
                            <h3 className="recipe-name">{recipe.name}</h3>
                            <p className="recipe-people">Num. de personas: {recipe.numPeople}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default RecipeList;