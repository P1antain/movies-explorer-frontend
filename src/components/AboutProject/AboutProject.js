import React from "react";
import './AboutProject.css'

function AboutProject(){
    return(
        <div className="aboutProject" id="aboutProject">
            <div className="aboutProject__wrapper">
                <h2 className="project__about">О проекте</h2>
                <div className="aboutProject__block">
                    <div className="aboutProject__item">
                        <h3 className="aboutProject__name">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="aboutProject__text">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="aboutProject__item">
                        <h3 className="aboutProject__name">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="aboutProject__text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="aboutProject__time">
                    <div className="aboutProject__backend">1 неделя</div>
                    <div className="aboutProject__frontend">4 недели</div>
                </div>
            </div>
        </div>
    )
}

export default AboutProject
