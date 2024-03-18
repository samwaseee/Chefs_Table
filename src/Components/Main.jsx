import Recipes from './Recipes';

const Main = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold mt-16'>Our Recipies</h3>
            <p className='text-[#150b2b81] max-w-screen-xl mx-auto my-5'>Get the best and easiest recipes which world class chefs use to please their customers.Our expert chefs guide you through the art of cooking, sharing their secret techniques and beloved recipes. Experience the joy of creating delicious dishes in a supportive, fun-filled environment.</p>
            <div>
                <Recipes></Recipes>
            </div>
        </div>
    );
};

export default Main;