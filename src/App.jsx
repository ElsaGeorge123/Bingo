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

    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={['3', '4']}>
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
