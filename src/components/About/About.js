import React from 'react';
import './About.css';
import avatar from '../../images/avatar.jpg';

const About = () => {

  return (
  <section className="about">
    <div className="about__container">
      <img className="about__avatar" src={avatar} alt="avatar" />
      <div className="about__description">
        <h2 className='about__title'>Об авторе</h2>
        <p className="about__text">Привет, меня зовут Марк, и я начинающий front-end разработчик. Этот проект был сделан в рамках обучения в Яндекс Практикуме. Благодаря навыкам в JavaScript, React я способен оживлять элементы веб-страниц, и расширить возможности web-приложения используя Node, Express, MongoDB. Однако я чувствую, что могу научиться большему в процессе работы с командой над более сложными проектами.</p>
        <p className="about__text">Я крайне заинтересован в том, чтобы моя работа была выполнена в срок и корректно, и я открыт к критике и замечаниям, поскольку только с их помощью можно двигаться вперед.</p>
      </div>
    </div>
  </section>);
}

export default About;
