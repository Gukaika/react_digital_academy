import React from 'react';
import s from './Link.module.css';

const Link = (props) => {
  debugger;
    return (
            <li>
                <a
              className={s.navbar__link}
              href="#"
              >
              {props.link}
              </a>
            </li>
               
    )
  }
  

  export default Link;