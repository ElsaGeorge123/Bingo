import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';


const OccassionCard = ({item}) => {
  const { setoccassion, occassion } = useContext(GlobalContext);

    const navigate = useNavigate();
    return (
    <div class="max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 bg-gray-300 rounded-lg p-5 flex flex-col justify-center items-center  shadow-md overflow-hidden cursor-pointer  ">
    <button onClick={() => {
      navigate(item.link)
      setoccassion(item.event)
      localStorage.setItem('occassion' , item.event)
      }}>
  <img src={item.img} alt="" />

  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2 text-black font-webFont">{item.event}</h2>

    <p class="text-white font-webFont text-justify ">{}</p>
  </div>
    </button>
</div>
  )
}

export default OccassionCard
