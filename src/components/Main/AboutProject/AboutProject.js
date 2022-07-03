import React from "react";
import "./AboutProject.css";
import "../../../index.css";

function AboutProject() {
    return (
        <section className="section" id="about-project">
            <h2 className="section__title">О проекте</h2>
            <article className="two-columns">
                <div className="two-columns__column">
                    <h2 class="two-columns__brief">Дипломный проект включал 5 этапов</h2>
                    <div class="two-columns__main-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </div>
                </div>
                <div className="two-columns__column">
                    <h2 class="two-columns__brief">На выполнение диплома ушло 5 недель</h2>
                    <div class="two-columns__main-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </div>
                </div>
            </article>
            <article className="two-columns">
                <div className="timeline timeline__schema timeline__backend timeline__backend_schema">1 неделя</div>
                <div className="timeline timeline__schema timeline__frontend timeline__frontend_schema">4 недели</div>
            </article>
            <article className="two-columns">
                    <div className="timeline timeline__subscrypt timeline__backend">Back-end</div>
                    <div className="timeline timeline__subscrypt timeline__frontend">Front-end</div>
            </article>
        </section>
    )
}
export default AboutProject;