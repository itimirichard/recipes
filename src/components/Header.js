import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="rounded p1 my2 mx2 black text-decoration-none"
    activeClassName="bg-blue"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex align-center justify-between px4">
    <h1 className="h1">My Recipes</h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favourites">Favourites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
