import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => (
  <div>
    <Navbar expand="md">
      <NavLink exact to="/" className="navbar-brand">
        Snack or Booze
      </NavLink>
      
      <Nav className="ml-auto" navbar>
        <NavItem className="mr-5">
          <NavLink className="mr-2" to="/snacks">Snacks</NavLink>
          <NavLink className="mr-2" to="/drinks">Drinks</NavLink>
          <NavLink className="mr-2" to="/new">New</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);


export default NavBar;
