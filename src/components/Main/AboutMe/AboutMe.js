import React from "react";
import "./AboutMe.css";
import "../../../index.css";
import avatar from "../../../images/avatar.jpg";

function AboutMe() {
    return (
        <section className="section" id="about-me">
            <h2 className="section__title">Студент</h2>
            <div className="about-me__content">
                <div className="about-me__about">
                    <h3 className="title-text title-text_about-me">Андрей</h3>
                    <h4 className="subtitle-text">Фронтенд-разработчик, 40 лет</h4>
                    <p className="about-me__description two-columns__main-text">
                        Я живу в московском регионе. У меня есть жена
                        и дочь. Я люблю музыку, фильмы, занимаюсь бегом и плаванием. Недавно начал кодить. С 2010 года работал в консалтинге в области управления проектами, знаю международные стандарты, имею опыт руководства. После того, как прошёл курс по веб-разработке, стал открыт к фриланс-заказам.
                    </p>
                    <div className="links">
                        <p className="link">Facebook</p>
                        <p className="link">Github</p>
                    </div>
                </div>
                <img className="about-me__image" src={avatar} alt="фото автора" />
            </div>
        </section>
    )
}
export default AboutMe;