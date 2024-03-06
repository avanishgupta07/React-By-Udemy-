import {restrautList}  from "../components/contants";
const IMG_CON_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestraunCard = (props) => {
    // Check if props.restaurant is defined before accessing its properties
    if (!props.restaurant) { 
        return null; // or handle the case where restaurant is undefined
    }

    return (
        <div className="card">
            <img className="imgtag"  src={ IMG_CON_URL + (props.restaurant.info?.cloudinaryImageId || '')} />
            <h2> {props.restaurant.info?.name}</h2>
            <h3>{props.restaurant.info?.cuisines.join(" , ")}</h3>
            <h4>{props.restaurant.info?.costForTwo}</h4>
            <h4>{props.restaurant.info?.avgRating} Star</h4>
        </div>
    );
};

export default RestraunCard;