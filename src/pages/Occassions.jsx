import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { christmas, easter, halloween } from '../utils/images';


function Occassions() {
  const data = [
    {
      event: 'Christmas',
      img: christmas,
    },
    {
      event: 'Easter',
      img: easter,
    },
    {
      event: 'Halloween',
      img: halloween,
    },
    {
      event: 'Baby Shower',
      img: ''
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
        <div className='mt-20'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div style={{ backgroundImage: `url(${d.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center' }} className='h-80 rounded-t-xl bg-white flex justify-center items-center'>

                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <p className='text-xl font-semibold'>{d.event}</p>
                  <buttom className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Customise Bingo</buttom>
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
