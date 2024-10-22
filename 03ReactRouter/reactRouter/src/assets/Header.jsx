import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='flex text-red-900 text-2xl  justify-evenly'>
      <li>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </li>
    </ul>
  );
}

export default Header;
