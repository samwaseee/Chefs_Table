import { useState } from 'react';
import Recipes from './Recipes';
import Sidebar from './Sidebar';
import { Toaster, toast } from 'sonner';

const Main = () => {

    const [wantToCook, setWantToCook] = useState([]);

    const handleWantToCook = recipe => {
        if (wantToCook.find(wTc => wTc === recipe)) {
            toast.success('Recipe already added');
        }
        else {
            setWantToCook([...wantToCook, recipe])
        }
    }

    const [cooking,setCooking] = useState([]);

    const handleCooking = (cook,id) => {
        setCooking([...cooking,cook])
        console.log(cook);
        setWantToCook(wantToCook.filter(wantToCook => wantToCook.recipe_id !== id))
    }

    return (
        <div>
            <h3 className='text-3xl font-bold mt-16'>Our Recipies</h3>
            <p className='text-[#150b2b81] max-w-screen-xl mx-auto my-5'>Get the best and easiest recipes which world class chefs use to please their customers.Our expert chefs guide you through the art of cooking, sharing their secret techniques and beloved recipes. Experience the joy of creating delicious dishes in a supportive, fun-filled environment.</p>
            <div className='flex gap-5'>
                <Recipes handleWantToCook={handleWantToCook}></Recipes>
                
                <Sidebar 
                wantToCook={wantToCook} 
                handleCooking={handleCooking}
                cooking = {cooking}></Sidebar>
            </div>
            <Toaster richColors position="top-right" closeButton/>
        </div>
    );
};

export default Main;