import { useState } from "react";
import { restrautList } from "../components/contants";
import RestraunCard from "./ResturantCard";

const Body = () => {
    let searchTxt="KFC"  ;
    const[serchText]=useState();
    return (
        <>
            <div classname="search-container">
                <input
                    type ="text"
                    classname="search-input"
                    placeholder="Search"
                    value= {searchTxt}
                    onChange={(e)=>{
                        searchTxt=e.target.value;
                    }}
                />
                <button className="search-btn">Search</button>

            </div>

            <div className="listname">
                {
                    restrautList.map(restaurant => (
                        <RestraunCard key={restaurant.info.id} restaurant={restaurant} />
                    ))
                }

            </div>
        </>
    )
};
export default Body;