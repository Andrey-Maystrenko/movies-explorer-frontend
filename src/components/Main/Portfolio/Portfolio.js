import React from "react";
import "./Portfolio.css";
import avatar from "../../../images/avatar.jpg";
import pictogram from "../../../images/link-to-portfolio-item.svg";

function Portfolio() {
    return (
        <section className="section" id="about-project">
            <h2 className="section__title">Студент</h2>
            <div className="portfolio__content">
                <div className="portfolio__about">
                    <h3 className="title-text title-text_portfolio">Андрей</h3>
                    <h4 className="subtitle-text">Фронтенд-разработчик, 40 лет</h4>
                    <p className="portfolio__description two-columns__main-text">
                        Я живу в московском регионе. У меня есть жена
                        и дочь. Я люблю музыку, фильмы, занимаюсь бегом и плаванием. Недавно начал кодить. С 2010 года работал в консалтинге в области управления проектами, знаю международные стандарты, имею опыт руководства. После того, как прошёл курс по веб-разработке, стал открыт к фриланс-заказам.
                    </p>
                    <div className="links">
                        <p className="link">Facebook</p>
                        <p className="link">Github</p>
                    </div>
                </div>
                <img className="portfolio__image" src={avatar} alt="фото автора" />
            </div>
            <div className="poftolio__list">Портфолио</div>
            <ul className="portfolio list">
                <li className="portfolio__item">
                    <p className="porfolio__item-title">Статичный сайт</p>
                    <img className="portfolio__pictorgam" src={pictogram} alt="пиктограмма ссылки на позицию портфолио" />
                </li>
                <li className="portfolio__item">
                    <p className="porfolio__item-title">Адаптивный сайт</p>
                    <img className="portfolio__pictorgam" src={pictogram} alt="пиктограмма ссылки на позицию портфолио" />
                </li>
                <li className="portfolio__item">
                    <p className="porfolio__item-title">Одностраничное приложение</p>
                    <img className="portfolio__pictorgam" src={pictogram} alt="пиктограмма ссылки на позицию портфолио" />
                </li>
            </ul>
        </section>
    )
}
export default Portfolio;