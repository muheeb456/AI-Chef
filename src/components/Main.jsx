import {useState} from "react";
import {getRecipeFromMistral} from "../ai.js";
import Ingredients from "./Ingredients.jsx";
import Recipe from "./Recipe.jsx";

function Main() {
    const [ingredients,setIngredients] = useState([]);

    const [recipe, setRecipe] = useState("");

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        newIngredient && setIngredients([...ingredients,newIngredient]);
    }

    async function getRecipe(){
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }

    return (
        <main>
            <div className="container">

                <form
                    className={"add_ingredient_form"}
                    action={addIngredient}
                >
                    <input type="text"
                           placeholder={"e.g. oregano"}
                           aria-label={"add ingredient"}
                           name="ingredient"
                    />
                    <button>+ Add ingredient</button>
                </form>

                { ingredients.length > 0 &&
                    <Ingredients
                        ingredients={ingredients}
                        getRecipe={getRecipe}
                    />
                }

                {
                    recipe !== "" &&
                    <Recipe recipe={recipe} />
                }

            </div>
        </main>
    );
}

export default Main;