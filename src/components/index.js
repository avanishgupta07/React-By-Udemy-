import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import IMG_CON_URL from "../components/contants";
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