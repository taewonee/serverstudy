import React from 'react';
import './SurveyBlock.css';

const SurveyBlock = ({ImgPath, demo, onClick}) => {
    if(demo === "") return null;
    else
    {
    return (
            <div className="buttonimg" onClick={onClick} >
            <div id={demo}>
                <img src={ImgPath} width= "250px" height= "250px" id="btt"/>
                <div> {demo} </div>
                </div>
            </div>
    );
    }
};



export default SurveyBlock;