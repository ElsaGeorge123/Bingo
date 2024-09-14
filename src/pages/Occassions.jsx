import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function Occassions() {
  const data = [
    {
      event: 'Christmas',
      img: 'src/images/christmas.png',
    },
    {
      event: 'Onam',
      img: ''
    },
    {
      event: 'Baptism',
      img: ''
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
    slidesToScroll: 1,
  }

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>

          {data.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
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
  );
}

export default Occassions;
