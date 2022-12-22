import React from 'react';
import Logo from '../Logo/Logo';
import s from'./Footer.module.css'
import Contacts from '../Contacts/Contacts';

const  Footer = () => {
    return (
      <footer className={s.App__footer}>
        <div className='container flex'>
          <div><Logo /></div>
          <nav className={s.footer__navbar}>
            <ul className={s.footer__items}>
              <li>
                  <a
                href="#"
                >
                Курсы
                </a>
              </li>
              <li>
                  <a
                href="#"
                  >
                О нас
                </a>
              </li>
              <li>
                  <a
                href="#"
                  >
                Команда
                </a>
              </li>
              <li>
                  <a
                href="#"
                  >
                Вакансии
                </a>
              </li>
              <li>
                  <a
                href="#"
                  >
                События
                </a>
              </li>
              <li>
                  <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>  
          
          <div class={s.sociale__links}>
            <p>г. Бишкек</p>
                <ul  className={s.flex}>
                </ul>
          </div>
        </div>  
      </footer>    
    )
  }


  export default Footer;