import React from 'react';
import s from './Section.module.css';


const Section = () => {
    return (
      <section className={s.section}>
        <div className='container flex'>
            <div >            
                <h1>Обучаем профессиям будущего</h1>
                <p>Станьте частью востребованных специалистов с помощью уникальных знаний от Digital academy</p>
            </div>
            <div><img src='https://kultur-b-digital.de/wp-content/uploads/2022/04/mike-kononov-lFv0V3_2H6s-unsplash.jpg'/></div>
        </div>
      </section>    
    )
  }
  

  export default Section;