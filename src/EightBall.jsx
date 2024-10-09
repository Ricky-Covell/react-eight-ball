import React, { useState } from "react";
import defaultAnswers from "./defaultAnswers";
import { choice } from "./random";

const EightBall = ({ answers=defaultAnswers }) => {
    const [answer, setAnswer] = useState({
        msg: 'Think of a Question.',
        color: 'Black'
    });

    const handleClick = (evt) => {
        setAnswer(choice(answers));
    };

    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;