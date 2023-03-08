import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import esmtLogo from '../Assets/esmt.svg'
import hamburger from '../Assets/Group-2.png'
import { Twirl as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'


export default function Navbar({ isMobile }) {
  
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);
    // // console.log(offset);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
      <div className='nav-fixed'>
          <div className='left'>
            <img src={navLogo}/>
          </div>
          <div className='right'>
            <div className='hamburger-wrapper'>
              <Hamburger className='hb' size={isMobile ? 18 : 24} color='black' onToggle={showSidebar}/>
            </div>
          </div>
      </div>

      <div className='nav'>
        <div className='left'>
            <img src={esmtLogo} className='esmt-logo'/>
        </div>

        <div className='right'>
          <a className='glow-on-hover' href="#">Schedule</a>
        </div>
      </div>

      <nav className={sidebar ? 'nav-bar active animate__animated animate__slideInUp animate__faster' : 'nav-bar animate__animated animate__slideOutDown animate__faster'}>
        <ul className='nav-menu-items'>
          <li className='active'>
            Home
          </li>
          <li>Events</li>
          <li>Speakers</li>
          <li>Schedule</li>
          <li>About Us</li>
        </ul>
      </nav>

      </>
    )
}
