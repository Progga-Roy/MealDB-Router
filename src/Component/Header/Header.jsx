import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
          
           <h1><span className='span'>R</span>est<span className='span'>A</span>uran<span className='span'>T</span></h1>
          
           <div className='link'>
           <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/meals'>Meals</ActiveLink>
            <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/blog'>Blog</ActiveLink>
           </div>
        </nav>
    );
};

export default Header;