import PropTypes from 'prop-types';

const WantToCook = ({ wantToCook , handleCooking}) => {
    const {recipe_id, recipe_name, preparing_time, calories } = wantToCook;
    return (
            <tr>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button 
                    onClick={()=>handleCooking(wantToCook,recipe_id)}
                className="btn btn-ghost bg-[#0BE58A] rounded-full">preparing</button></td>
            </tr>
    );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.object.isRequired , 
    handleCooking: PropTypes.func
};

export default WantToCook;