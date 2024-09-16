import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { christmas, easter, halloween } from '../utils/images';
import { Link } from "react-router-dom";


function Occassions() {
  const data = [
    {
      event: 'Christmas',
      img: christmas,
      link: "/CustomizeCard",
    },
    {
      event: 'Easter',
      img: easter,
      link: "/CustomizeCard",
    },
    {
      event: 'Halloween',
      img: halloween,
      link: "/CustomizeCard",
    },
    {
      event: 'Baby Shower',
      img: '',
      link: "/CustomizeCard",
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <>
      <div className='w-3/4 m-auto'>
        <div className='mt-20 bg-black'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div style={{ backgroundImage: `url(${d.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center' }} className='h-80 rounded-t-xl bg-white flex justify-center items-center'>

                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='text-xl font-semibold'>{d.event}</p>
                  <Link to={d.link} className="user-menu-link">

                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl" >Customise Bingo</button>
                  </Link>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </>
  );
}

export default Occassions;
