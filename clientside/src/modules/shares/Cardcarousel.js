import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
    {
        name: `Abhishek Sharma`,
        img: require('../images/abhisheksharma.jpeg'),
        post:`Full Stack Developer`,
    },
    {
        name: `Isher Singh`,
        img: require('../images/ishersingh.jpg'),
        post:`Full Stack Developer`,
    },
    {
        name: `Nikhil Kashyap`,
        img: require('../images/nikhilkashyap.jpeg'),
        post:`Full Stack Developer`,
    },
    {
        name: `Abhishek Sharma2`,
        img: require('../images/abhisheksharma.jpeg'),
        post:`Full Stack Developer`,
    },
    {
        name: `Isher Singh2`,
        img: require('../images/ishersingh.jpg'),
        post:`Full Stack Developer`,
    },
    {
        name: `Nikhil Kashyap2`,
        img: require('../images/nikhilkashyap.jpeg'),
        post:`Full Stack Developer`,
    },
]
function Cardcarousel(){
    const settings = {
        className: "center",
        centerPadding:"60px",
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
      };
    return(
    <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        <div className="">
        <Slider {...settings}>
            {data.map((d, index) => (
                <>

                <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                    <div  style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                    <img src={d.img} alt="" style={{ height: "180px", width: "180px", borderRadius: "50%" }}/>
                </div>
                <div className=" card-name ">
                    <h6 className="font-bold text-lg">{d.name}</h6>
                    <p className="text-gray-500">{d.post}</p>
                    </div>
                    </div>
                    </>
            ))}
            </Slider>
        </div>
    </div>
);
}
export default Cardcarousel