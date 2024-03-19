import { useState } from "react";
import WantToCook from "./WantToCook";
import CurrentlyCooking from "./CurrentlyCooking";

const Sidebar = ({ wantToCook, handleCooking, cooking }) => {

    return (
        <div className="md:w-[35vw] border rounded-xl py-5">
            <div>
                <h3 className="text-2xl font-bold border-b-2 w-72 mx-auto pb-5">Want to Cook: 0{wantToCook.length}</h3>
                <table className="border-separate border-spacing-5 w-full">
                    <thead className="">
                        <th></th>
                        <th style={{ width: '100px' }}>Name</th>
                        <th>time</th>
                        <th>Calories</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            wantToCook.map((wantToCook, idx) => <WantToCook
                                key={idx}
                                wantToCook={wantToCook}
                                handleCooking={handleCooking}
                            ></WantToCook>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className="text-2xl font-bold border-b-2 w-72 mx-auto py-5">Currently cooking: 0{cooking.length}</h3>
                <table className="border-separate border-spacing-5 w-full">
                    <thead className="">
                        <th style={{ width: '100px' }}>Name</th>
                        <th>time</th>
                        <th>Calories</th>
                    </thead>
                    <tbody>
                        {
                            cooking.map((cooking, idx) => <CurrentlyCooking
                                key={idx}
                                cooking={cooking}
                            ></CurrentlyCooking>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Sidebar;