import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])


    return (
        <div className="flex gap-5">
            <Recipe></Recipe>
            <Recipe></Recipe>
        </div>
    );
};

export default Recipes;