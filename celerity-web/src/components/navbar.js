import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "../logo2.png";
import AboutUser from "./about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AreaChart, XAxis, YAxis, Area, CartesianGrid, Tooltip } from 'recharts';
import Login from './login';

const NavbarC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>CELERITY</NavbarBrand>
          {/* <NavbarBrand href="/"><img style={{width: "120px"}} src={logo}/></NavbarBrand> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Programs
                </DropdownToggle>
                <DropdownMenu right style={dropDownStyle}>
                  <DropdownItem>
                    <NavLink href="/random">Random</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/5-10-5">5-10-5</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/t-test">T-Test</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/jojjo">Jojjo</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/jump">Jump</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Log In</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Marcus Bader</NavbarText>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
          <Route path="/5-10-5">
            <FiveTenFive />
          </Route>
          <Route path="/t-test">
            <TTest />
          </Route>
          <Route path="/jojjo">
            <Jojjo />
          </Route>
          <Route path="/jump">
            <Jump />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
};

const dropDownStyle = {
    backgroundColor: "#000",

}

function About() {
  return <AboutUser
  name="Marcus Bader"
  adress="Soltorpsgatan 20"
  mail="marcusbader@hotmail.com"
  gender="male"
  weight="100kg"
  length="190cm"/>;
}
const data = [
    { name: '1', Light: 2, pv: 2400},
    { name: '2', Light: 3, pv: 1398},
    { name: '3', Light: 2, pv: 9800},
    { name: '4', Light: 1, pv: 3908},
    { name: '5', Light: 2, pv: 4800},
    { name: '6', Light: 3, pv: 3800},
    { name: '7', Light: 4, pv: 4300},
    { name: '8', Light: 3, pv: 4300}
];

function Random() {
  return (<div style={{backgroundColor: "#000"}}><h2 style={{color: "#fff"}}>Random</h2>
  
  <AreaChart width={1500} height={600} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#1DB954" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#1DB954" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Light" stroke="#1DB954" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
</div>
  );
}

function FiveTenFive() {
    return <h2>5-10-5</h2>
}

function TTest() {
    return <h2>T-Test</h2>
}

function Jojjo() {
    return <h2>Jojjo</h2>
}

function Jump() {
    return <h2>Jump</h2>
}

export default NavbarC;
