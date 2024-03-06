import { restrautList } from "../components/contants";
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

            </div>
        </>
    )
};
export default Body;