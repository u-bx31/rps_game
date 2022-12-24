import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import paper from '../images/icon-paper.svg';
import scissor from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';



const Game = ({ playerChoice, score, setScore, pchoiseImage }) => {
    const [playerState, setPlayerState] = useState('');
    const [computer, setComputer] = useState('');

    const choices = ['rock', 'paper', 'scissor'];
    const winner = () => {
        if (playerChoice === 'rock' && computer === 'scissor') {
            setPlayerState('YOU WIN')
            setScore(score + 1);
        }
        else if (playerChoice === 'rock' && computer === 'paper') {
            setPlayerState('YOU LOSE')
            setScore(score);
        }
        else if (playerChoice === 'paper' && computer === 'rock') {
            setPlayerState('YOU WIN')
            setScore(score + 1);
        }
        else if (playerChoice === 'paper' && computer === 'scissor') {
            setPlayerState('YOU LOSE')
            setScore(score);
        }
        else if (playerChoice === 'scissor' && computer === 'paper') {
            setPlayerState('YOU WIN')
            setScore(score + 1);
        }
        else if (playerChoice === 'scissor' && computer === 'rock') {
            setPlayerState('YOU LOSE')
            setScore(score);
        }
        else {
            setPlayerState('DRAW')
            setScore(score);
        }

    }

    useEffect(() => {

        setTimeout(() => {
            setComputer(choices[Math.floor(Math.random() * 3)]);
        }, 2000);

        console.log(computer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {

        winner()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [computer])

    const getImage = (choise) => {
        if (choise === 'paper') {
            return paper;
        }
        else if (choise === 'rock') {
            return rock;
        }
        else {
            return scissor;
        }
    }
    const winnerLoser = (state) => {
        if (state === 'YOU WIN') {
            return 'c-win'
        }
        else if (state === 'YOU LOSE') {
            return 'c-lose'
        }
    }

    const Result = (isShow) => {
        if (isShow) {
            return (
                <div className="c-game_Result mb-lg-5">
                    <h3>{playerState}</h3>
                    <Link className={`btn btn-light w-100 fs-4 ${winnerLoser(playerState) === 'c-win' ? 'text-primary' : 'text-danger'}`} to={'/'}>Play Again</Link>
                </div>
            )
        }
        return;
    }

    return (
        <>
            <div className="row row-cols-2 justify-content-center align-items-lg-end text-center text-white c-game py-3 py-lg-2 w-100 mx-auto">
                <div className="col-lg-3 col">
                    <div className="d-flex flex-column-reverse flex-lg-column ">
                        <p className="pt-3 pt-lg-0 pb-0 pb-lg-3">YOU PICKED</p>
                        <div className={`c-game_card c-${playerChoice}  mx-auto`}>
                            <div id="paper" className={`c-game_card_item c-${playerChoice}_border ${winnerLoser(playerState)} d-flex justify-content-center align-items-center h-100`} >
                                <img src={getImage(playerChoice)} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col order-lg-3">
                    <div className="d-flex flex-column-reverse flex-lg-column">
                        <p className="pt-3 pt-lg-0 pb-0 pb-lg-3">THE HOUSE PICKED</p>
                        {computer === '' ? <div className="c-game_empty mx-auto"></div>
                            :
                            <div className={`c-game_card c-${computer} mx-auto`}>
                                <div id="paper" className={`c-game_card_item c-${computer}_border ${winnerLoser(playerState) === 'c-lose' && 'bot-win'} d-flex justify-content-center align-items-center h-100`} >
                                    <img src={getImage(computer)} alt="" />
                                </div>
                            </div>
                        }
                    </div>

                </div>
                {computer !== '' &&
                    <div className="col-lg-3 col order-lg-2 my-lg-0 my-3 align-items-end">
                        {Result(computer !== '')}
                    </div>
                }

            </div>
        </>
    );
}

export default Game;