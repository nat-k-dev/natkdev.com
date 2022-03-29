import React from "react";
import "./projectMemoji.css";
import Game from "./game";
import Card from "./card";

const ProjectMemoji = () => {
    let game = null;

    function onClickGame(event) {
        if (game === null) {
            game = new Game();
        }
        console.log('click game');
        if (event.target.classList.contains('card__face')) {
            if (game.IsBeforeStart()) {
                game.Start(game);
            }
            let card = new Card(event.target);
            let successCardsCount = card.processClick();
            game.CheckIfWin(successCardsCount);
        }

        if (event.target.classList.contains('message__btn')) {
            game.CloseMessage();
            game = null;
        }

    }
    
    return (
      <div className="project-memoji">
        <section className="game" id="game" onClick={(event) => onClickGame(event)}>
            <h1 className="header">Memoji</h1>
            <ul className="cards" id="cards">
                <li className="card card-1"  id="card1">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-2"  id="card2">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-3"  id="card3">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-4"  id="card4">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-5"  id="card5">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-6"  id="card6">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-7"  id="card7">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-8"  id="card8">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-9"  id="card9">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-10" id="card10">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-11" id="card11">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
                <li className="card card-12" id="card12">
                    <div className="card__face card__face--front"></div>
                    <div className="card__face card__face--back"><div className="memoji"></div></div>
                </li>
            </ul>
            <div className="timer" id="timer">01:00</div>
            <div className="message" id="message">
                <div className="message__box">
                    <div className="message__status" id="message__status">Win</div>
                    <button className="message__btn" id="message__btn">Play again</button>
                </div>	
            </div>
        </section>	
      </div>
    );
}

export default ProjectMemoji;