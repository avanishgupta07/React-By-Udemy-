import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import IMG_CON_URL from "../components/contants";


   
// const RestraunCard = (props) => {
//     console.log(props);
//     return (
//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
//                 + props.restaurant.info?.cloudinaryImageId} />
//             <h2> {props.restaurant.info?.name}</h2>
//             <h3>{props.restaurant.info?.cuisines.join(" , ")}</h3>
//             <h4>{props.restaurant.info?.costForTwo}</h4>
//             <h4>{props.restaurant.info?.avgRating} Star</h4>
//         </div>
//     )
// }



const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);         