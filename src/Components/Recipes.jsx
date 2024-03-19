import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleWantToCook}) => {

    const [recipes, setRecipe] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])


    return (
        <div className="grid md:grid-cols-2 gap-5">
        {
            recipes.map(recipe => <Recipe key={recipes.recipe_id} 
                recipe = {recipe}
                handleWantToCook = {handleWantToCook}
                ></Recipe>)
        }
        </div>
    );
};

Recipes.propTypes = {
    handleWantToCook: PropTypes.func
};

export default Recipes;