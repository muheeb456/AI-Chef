import {useState} from "react";
import {getRecipeFromMistral} from "../ai.js";
import Ingredients from "./Ingredients.jsx";
import Recipe from "./Recipe.jsx";

function Main() {
    const [ingredients,setIngredients] = useState([]);

    const [recipe, setRecipe] = useState("");

    const [loading, setLoading] = useState(false);

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        newIngredient && setIngredients([...ingredients,newIngredient]);
    }

    async function getRecipe(){
        setLoading(true)
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setLoading(false)
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
                        loading={loading}
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