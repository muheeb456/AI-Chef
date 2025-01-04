import {useState} from "react";

function Main() {
    const [ingredients,setIngredients] = useState([]);

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        newIngredient && setIngredients([...ingredients,newIngredient]);
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
                <section className="process_ingredients">
                <h2 className={"ingredients_title"}>Ingredients on hand:</h2>
                <ul className={"ingredients_list"}>
                    {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                {ingredients.length>3 &&
                <div className={"get_recipe_section"}>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
                </div>}
                </section> }
            </div>
        </main>
    );
}

export default Main;