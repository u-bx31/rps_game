import { Link } from "react-router-dom";

import icon_paper from '../images/icon-paper.svg';
import icon_scissors from '../images/icon-scissors.svg';
import icon_rock from '../images/icon-rock.svg';

const Selection = ({ setPlayerChoice,setPchoiseImage }) => {

    const handleSelection = (e) => {
        setPlayerChoice(e.currentTarget.id)
        console.log(e.target.src);
        setPchoiseImage(e.target.src)
    }
    return (
        <div className="my-5">
            <div className="d-flex justify-content-center c-selection py-4">
                <div className="c-selection_card c-paper mx-3">
                    <Link to={'/game'}>
                        <div id="paper" className="c-selection_card_item c-paper_border d-flex justify-content-center align-items-center h-100" onClick={(e) => handleSelection(e)}>
                            <img src={icon_paper} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="c-selection_card c-scissor mx-3">
                    <Link to={'/game'}>
                        <div id="scissor" className="c-selection_card_item c-scissor_border d-flex justify-content-center align-items-center h-100" onClick={(e) => handleSelection(e)}>
                            <img src={icon_scissors} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="c-selection_card c-rock mx-3">
                    <Link to={'/game'}>
                        <div id="rock" className="c-selection_card_item c-rock_border d-flex justify-content-center align-items-center h-100" onClick={(e) => handleSelection(e)}>
                            <img src={icon_rock} alt="" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    );
}

export default Selection;