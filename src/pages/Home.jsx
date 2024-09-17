import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="flex flex-col mt-10 justify-start items-center w-full space-y-10 bg-white rounded">
        <div className="flex flex-col justify-center items-center w-3/4 space-y-10">
          <h1 className="text-9xl text-green-700">ecoBingo</h1>
          <h1 className="text-3xl font-body">Welcome to ecoBingo.com</h1>
          <p className="text-xl font-body w-[50vw]">
            In a world where sustainability is key, EcoBingo is here to
            revolutionize your bingo game experience. Say goodbye to paper waste
            and hello to e-cards! Our app generates digital bingo cards, perfect
            for your next game night, all while supporting a greener planet. By
            choosing EcoBingo, you're not just enjoying a fun and interactive
            game, you're also making an eco-conscious choice that reduces your
            carbon footprint. Join us in this drive to go green, one bingo game
            at a time. Let's play for the planet! 🌍💚
          </p>

          <button onClick={()=> navigate('/occassions')} className="px-4 py-2 rounded-md border border-neutral-300  bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
