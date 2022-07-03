import React from "react";
import "./Portfolio.css";
import "../../../index.css";
import pictogram from "../../../images/link-to-portfolio-item.svg";

function Portfolio() {
    return (
        <section className="section" id="about-project">
            <h2 className="poftolio__list">Портфолио</h2>
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