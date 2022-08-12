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
                    <h4 className="subtitle-text">Специальность: веб-разработка</h4>
                    <p className="about-me__description two-columns__main-text">
                    Позади интереснейший и тяжелейший курс Яндекс.Практикума - экстремальный марафон длиною в 1 год жизни. Одержано 500 побед над собой, найдено 1000 организационных и технических решений, чтобы достигнуть заданной цели в заданные сроки без отрыва от работы и других обязанностей. Поглощены терабайты новых знаний. Я не забуду этот курс никогда! Видимо, теперь моя жизнь будет делиться на «до» и «после». Отныне я не профан в IT, я вооружен знаниями и умением. Все, кто причастны к созданию и реализации курса, большие молодцы, Яндекс - браво!
                    </p>
                    <div className="links">
                        <a className="link" href="/#">Facebook</a>
                        <a className="link" href="/#">Github</a>
                    </div>
                </div>
                <img className="about-me__image" src={avatar} alt="фото автора" />
            </div>
        </section>
    )
}
export default AboutMe;