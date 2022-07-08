import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="section">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__content">
                <p className="footer__copyright">&copy;2022</p>
                <ul className="list footer__items">
                    <li className="footer__item">
                        <a className="footer__link" href="/#">
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="/#">
                            Github
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="/#">
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;