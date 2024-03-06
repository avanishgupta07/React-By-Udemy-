import {restrautList}  from "../components/contants";
import RestraunCard from "./ResturantCard";

const Body = () => {
    return (
        <>
        <div>
            <imput> 

            </imput>
            <button></button>

        </div>

        <div className="listname">
            {
                restrautList.map(restaurant => (
                    <RestraunCard key={restaurant.info.id} restaurant={restaurant} />
                ))
            }

       {/* // For above We can Use map function insted of for loop in jsx we can't use directly for loop in jsx .. */}
            {/* <RestraunCard  restaurant={restrautList[0]}/>
            <RestraunCard restaurant={restrautList[1]}/>
            <RestraunCard restaurant={restrautList[2]}/>
            <RestraunCard restaurant={restrautList[3]}/>
            <RestraunCard restaurant={restrautList[4]}/>
            <RestraunCard restaurant={restrautList[5]}/>
            <RestraunCard restaurant={restrautList[6]}/> */}



      
        </div>
        </>
    )
};
export default Body;