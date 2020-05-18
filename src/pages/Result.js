import React from 'react';
import './Survey_1.css';
import ResultBlock from '../components/ResultBlock';
import ResultItemImg from '../images/black.jpg';
function getResult() {
    return (
        <div className = "big">
        <header className="Result-header">
            <ResultBlock    ImgPath={ResultItemImg} pName="pName"  pDescription="pDescription"    onClick=""/>
            <ResultBlock    ImgPath={ResultItemImg} pName="pName"  pDescription="pDescription"    onClick=""/>
 
        </header>
        </div>
  );
}

export default getResult;
