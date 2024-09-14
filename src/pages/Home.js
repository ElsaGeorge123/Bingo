import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Home</h1>
      <div className='flex flex-col mt-10 justify-start items-center w-full space-y-10 bg-white rounded'>
      <div className='flex flex-row  bg-[#B9D187] w-[40vw] items-center rounded-[10px] justify-around h-[5vh]'>
        <a className=''> Home</a>
        <a> Card generator</a>
        <a> Text</a>
      </div>
      <div className='flex flex-col justify-center items-center w-3/4 space-y-10'>
        <h1 className='text-3xl font-body'>Welcome to ecoBingo.com</h1>
        <p className='text-xl font-body '>In a world where sustainability is key, EcoBingo is here to revolutionize your bingo
           game experience. Say goodbye to paper waste and hello to    e-cards! Our app generates digital bingo cards, perfect for your next game night, all while supporting a greener planet. By choosing EcoBingo, you're not just enjoying a fun and interactive game, you're also making an eco-conscious choice that reduces your carbon footprint.
        Join us in this drive to go green, one bingo game at a time. Let's play for the planet! 🌍💚</p>
      </div>
    </div>
    </div>
  );
}

export default Home;
