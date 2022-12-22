import React from 'react';
import s from './Logo.module.css';
import logo from './logo.svg';



const Logo = () => {
    return (
        <div>
          <a href='#'><img src={logo} className={s.App__logo} alt="logo"/></a>
        </div>
    )
  }
  

  export default Logo;