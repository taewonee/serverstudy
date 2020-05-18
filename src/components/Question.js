import React from 'react';
import './Question.css';

const Question = ({Q, desc}) => {
    return (    
        <div id="questionbg">
            <div id = "Question"> {Q}
            </div>
            <div id ="desc"> {desc}</div>
        </div>
    );
};

export default Question;
