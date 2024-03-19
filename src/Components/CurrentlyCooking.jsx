const CurrentCook = (cooking) => {
    const {recipe_name,preparing_time,calories} = cooking.cooking;
    return (
        <>
            <tr>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </>
    );
};

export default CurrentCook;