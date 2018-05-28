import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink to="/forms">Forms</NavLink></li>
    <li><NavLink to="/checkboxes">Checkboxes</NavLink></li>
    <li><NavLink to="/radiobuttons">Radiobuttons</NavLink></li>
    <li><NavLink to="/dropdowns">Dropdowns</NavLink></li>
  </ul>
)

export default Navbar;
