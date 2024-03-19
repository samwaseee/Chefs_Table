import PropTypes from 'prop-types';
import timeImg from '../assets/Frametime.png';
import caloryImg from '../assets/Framecalories.png';

const Recipe = ({recipe,handleWantToCook}) => {
    
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories,recipe_id} = recipe;
    
    return (
        <div>
            <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className='rounded-xl'><img src={recipe_image} alt="Recipe" className='h-60 w-full'/></figure>
                <div className="mt-5">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='border-b-2 text-start py-4'>{short_description}</p>
                    <div className='text-start my-4 border-b-2 pb-4'>
                        <p className='font-bold'>Ingrediants: {ingredients.length}</p>
                        {
                            ingredients.map(ingredient => <li key={recipe_id}>{ingredient}</li>)
                        }
                    </div>
                    <div className="flex gap-1 mb-5">
                        <img src={timeImg} alt="" />
                        <p className='mr-5'>{preparing_time}</p>
                        <img src={caloryImg} alt="" />
                        <p>{calories}</p>
                    </div>
                    <div className="card-actions">
                        <button 
                            onClick={()=>handleWantToCook(recipe)}
                        className="btn btn-ghost bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
};

export default Recipe;