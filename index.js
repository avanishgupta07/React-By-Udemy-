import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
// react.create is use before jsx but now in jsx automatically converterd into the ..............
// const heading = React.createElement(
//     "h1",
//     {    use as object ...
//         id: "title 1",
//         key: "h2",
//     },
//     "AVANISH KUAMR GUPTA"
const Title = () => (
    <a href="/">
        < img
            className="logo"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&usqp=CAU"
        />
    </a>

);
// same as below given is without return all matter about the parethesis ...
// const Headercomponents21=()=>{
//     return
// (
//     <div>
//         <h1> Namaste React functuional componnets</h1>
//         <h2> This is a h2 tag </h2>
//     </div>
// )
//};


const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
const restrautList =
    [
        {
            "info": {
                "id": "55473",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Sector 10",
                "areaName": "Rohini",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4,
                "parentId": "721",
                "avgRatingString": "4.0",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "26 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-05 04:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-10-rohini-delhi-55473",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "194367",
                "name": "Wow! Momo",
                "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                "locality": "Netaji Subhash Place",
                "areaName": "Netaji Subhash Place",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Tibetan",
                    "Healthy Food",
                    "Asian",
                    "Chinese",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "1776",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 7.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "34 mins",
                    "lastMileTravelString": "7.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-04 22:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/wow-momo-netaji-subhash-place-delhi-194367",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "422512",
                "name": "Chicago Pizza",
                "cloudinaryImageId": "nzjxdkb00xw7sjqbcks2",
                "locality": "Netaji Subhash Place",
                "areaName": "Netaji Subhash Place",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Fast Food"
                ],
                "avgRating": 3.8,
                "parentId": "60277",
                "avgRatingString": "3.8",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 6.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "33 mins",
                    "lastMileTravelString": "6.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-04 22:45:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chicago-pizza-netaji-subhash-place-delhi-422512",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "26723",
                "name": "KFC",
                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                "locality": "Sector 3",
                "areaName": "Rohini",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.3,
                "parentId": "547",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-05 05:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "253731",
                "name": "McDonald's",
                "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
                "locality": "Sector 3",
                "areaName": "Rohini",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "American"
                ],
                "avgRating": 4.4,
                "parentId": "630",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "21 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-04 23:45:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "10208",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Sector 10",
                "areaName": "Rohini",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.3,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 2.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20 mins",
                    "lastMileTravelString": "2.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-05 06:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-sector-10-rohini-delhi-10208",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "326440",
                "name": "Punjabi Angithi (Vegorama Group)",
                "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
                "locality": "Paschim Vihar",
                "areaName": "Paschim Vihar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Tandoor",
                    "Punjabi",
                    "Thalis",
                    "Snacks"
                ],
                "avgRating": 4.3,
                "veg": true,
                "parentId": "465050",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 45,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-04 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-paschim-vihar-delhi-326440",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "10392",
                "name": "Subway",
                "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                "locality": "Sector 3",
                "areaName": "Rohini",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.2,
                "parentId": "2",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "21 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-05 04:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
                "type": "WEBLINK"
            }
        },
    ];

    const RestraunCard = (props) => {
        // Check if props.restaurant is defined before accessing its properties
        if (!props.restaurant) {
            return null; // or handle the case where restaurant is undefined
        }
    
        return (
            <div className="card">
                <img className="imgtag"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + (props.restaurant.info?.cloudinaryImageId || '')} />
                <h2> {props.restaurant.info?.name}</h2>
                <h3>{props.restaurant.info?.cuisines.join(" , ")}</h3>
                <h4>{props.restaurant.info?.costForTwo}</h4>
                <h4>{props.restaurant.info?.avgRating} Star</h4>
            </div>
        );
    };
    

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

const Body = () => {
    return (

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
    )
};
const Footer = () => {
    return <h4>Footer</h4>
};

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);         