import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalContext from './Context/GlobalContext';
import { useContextData } from './Context/useContextData';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Container, Header, Content, Footer, Navbar, Sidenav, Nav } from 'rsuite';
import { FaCog } from "react-icons/fa";



const Wrapper = () => {

  return (

    <div className='flex flex-row space-x-16 px-[30vw] py-20 justify-center h-[100vh] bg-[#F3FFE3]'>
      <div className=''>
      <Sidenav className='' defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Menu eventKey="1" title="Popular" icon={<MagicIcon />}>
              <Nav.Item eventKey="1-1">Bingo Card Generator</Nav.Item>
              <Nav.Item eventKey="1-2">1-75 Bingo</Nav.Item>
              <Nav.Item eventKey="1-3">1-90</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="2" title="Numbers" icon={<MagicIcon />}>
              <Nav.Item eventKey="2-1">1-75</Nav.Item>
              <Nav.Item eventKey="2-2">1-90</Nav.Item>
              <Nav.Item eventKey="2-3">1-100</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="3" title="Occasions" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Bridal Shower</Nav.Item>
              <Nav.Item eventKey="3-2">Christmas</Nav.Item>
              <Nav.Item eventKey="3-3">First B'Day</Nav.Item>
              <Nav.Item eventKey="3-4">Baptism</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Movies" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>

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

const App = () => {
  const context = useContextData();
  return (
    <GlobalContext.Provider value={context}>
      <Wrapper />
    </GlobalContext.Provider>
  );
}
export default App;
