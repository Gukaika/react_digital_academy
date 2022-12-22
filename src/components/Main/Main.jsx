import React from 'react';
import s from './Main.module.css';
import Section from './Section/Section'; 
import Contacts from '../Contacts/Contacts';

const Main = () => {
    return (
      <main className={s.App__main}> Content
          <p>
            Digital Academy
          </p>
          <a
            className={s.App__link} 
            href="https://idomarketing.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn with love
          </a>
          <Section />
          <Section />
          <Contacts />

          
        </main>
    )
  }

  export default Main;