import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="section">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__content">
                <p className="footer__content-item">&copy;2022</p>
                <p className="footer__content-item">Яндекс.Практикум</p>
                <p className="footer__content-item">Github</p>
                <p className="footer__content-item">Facebook</p>
            </div>
        </footer>
    )
}
export default Footer;