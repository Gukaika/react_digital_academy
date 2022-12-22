import React from 'react';
import s from './Header.module.css';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';

const Header = (props) => {
    return (
      <header className={s.App__header}>
        <div className='container flex'>
            <a><Logo /></a>
            <nav className={s.navbar}>
              <ul className={s.navbar__items}>
                <Link link='Главная'/>
                <Link link='Курсы'/>
                <Link link='О Нас'/>
                <Link link='События'/>
                <Link link='Контакты'/>
              </ul>
            </nav>    
        </div>
      </header>
    )
  }
  

  export default Header;