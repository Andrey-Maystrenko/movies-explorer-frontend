import React from "react";
import "./Portfolio.css";
import "../../../index.css";
import pictogram from "../../../images/link-to-portfolio-item.svg";

function Portfolio() {
    return (
        <section className="section">
            <h2 className="poftolio__list">Портфолио</h2>
            <ul className="portfolio list">
                <li className="portfolio__item">
                    <p className="porfolio__item-title">Статичный сайт</p>
                    <a href="/#">
                        <img className="portfolio__pictorgam" src={pictogram} alt="пиктограмма ссылки на позицию портфолио" />
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="porfolio__item-title">Адаптивный сайт</p>
                    <a href="/#">
                        <img className="portfolio__pictorgam" src={pictogram} alt="пиктограмма ссылки на позицию портфолио" />
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="porfolio__item-title">Одностраничное приложение</p>
                    <a href="/#">
                        <img className="portfolio__pictorgam" src={pictogram} alt="пиктограмма ссылки на позицию портфолио" />
                    </a>
                </li>
            </ul>
        </section>
    )
}
export default Portfolio;