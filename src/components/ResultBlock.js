import React from 'react';
 import './ResultBlock.css';

const ResultBlock = ({ImgPath, pName, pDescription, onClick}) => {
    return (
            <div className="Resultblock" onClick={onClick}>
                <img src={ImgPath} width="250px" height ="250px"/>
                <div>{pName}</div>
                <div>{pDescription}</div>
            </div>
    );
};

export default ResultBlock;