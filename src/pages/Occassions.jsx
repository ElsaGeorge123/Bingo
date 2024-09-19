import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { christmas, easter, halloween } from "../utils/images";
import { Link } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";
import OccassionCard from "../components/OccassionCard";

function Occassions() {
  const data = [
    {
      event: "Christmas",
      img: christmas,
      link: "/bingogen",
    },
    {
      event: "Easter",
      img: easter,
      link: "/bingogen",
    },
    {
      event: "Halloween",
      img: halloween,
      link: "/bingogen",
    },
    {
      event: "Baby Shower",
      img: halloween,
      link: "/CustomizeCard",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div></div>
      <div className="w-3/4 m-auto p-10 ">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {data.map((item) => {
            return <div className="mt-4">
              <OccassionCard item={item} />
            </div>
          })}
        </div>
      </div>
    </>
  );
}

export default Occassions;
