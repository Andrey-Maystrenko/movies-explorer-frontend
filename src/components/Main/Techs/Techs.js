import React from "react";
import "./Techs.css";
import "../../../index.css";

function Techs() {
    return (
        <section className="section section__techs" id="techs">
            <h2 className="section__title">Технологии</h2>
            <h3 className="title-text title-text_techs">7 технологий</h3>
            <p className="techs__description two-columns__main-text">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="list techs">
                <li className="techs-item">
                    HTML
                </li>
                <li className="techs-item">
                    CSS
                </li>
                <li className="techs-item">
                    JS
                </li>
                <li className="techs-item">
                    React
                </li>
                <li className="techs-item">
                    Git
                </li>
                <li className="techs-item">
                    Express.js
                </li>
                <li className="techs-item">
                    mongoDB
                </li>
            </ul>
        </section>
    )
}
export default Techs;