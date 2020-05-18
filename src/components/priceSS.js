import React, {useState} from 'react';
import './SurveySection.css';
import {Link} from 'react-router-dom';
import SendRequest from '../send_request.js';
import SurveyBlock from '../components/SurveyBlock';

function Surveysection({now, next, btn1img, btn2img, btn3img, btn4img, btn5img, demo1, demo2, demo3, demo4, demo5}) {
    const [Ans, setAns] = useState(0);
    const sendrequest = e =>
    {SendRequest(Ans, {now});}
    
    const onbtn1 = e =>
        {e.preventDefault();}
    const onbtn2 = e =>
        {e.preventDefault();
        switch(Ans) {
            default:
            case 0: document.getElementById('buttondiv').style.display = "inline-block";    break;
            case 1: document.getElementById(demo1).style.border ="none";  break;
            case 3: document.getElementById(demo3).style.border ="none";  break;
            case 4: document.getElementById(demo4).style.border ="none";  break;
            case 5: document.getElementById(demo5).style.border ="none";  break;
        }
        document.getElementById(demo2).style.border = "solid rgba(0, 0, 255, 0.6) 5px";
        document.getElementById(demo2).style.borderRadius = "15px";
        setAns(2);}
    const onbtn3 = e =>
        {e.preventDefault();
        switch(Ans) {
            default:
            case 0: document.getElementById('buttondiv').style.display = "inline-block";    break;
            case 1: document.getElementById(demo1).style.border ="none";  break;
            case 2: document.getElementById(demo2).style.border ="none";  break;
            case 4: document.getElementById(demo4).style.border ="none";  break;
            case 5: document.getElementById(demo5).style.border ="none";  break;
        }
        document.getElementById(demo3).style.border = "solid rgba(0, 0, 255, 0.6) 5px";
        document.getElementById(demo3).style.borderRadius = "15px";
        setAns(3);}
    const onbtn4 = e =>
        {e.preventDefault();
        switch(Ans) {
            default:
            case 0: document.getElementById('buttondiv').style.display = "inline-block";    break;
            case 1: document.getElementById(demo1).style.border ="none";  break;
            case 2: document.getElementById(demo2).style.border ="none";  break;
            case 3: document.getElementById(demo3).style.border ="none";  break;
            case 5: document.getElementById(demo5).style.border ="none";  break;
        }
        document.getElementById(demo4).style.border = "solid rgba(0, 0, 255, 0.6) 5px";
        document.getElementById(demo4).style.borderRadius = "15px";
        setAns(4);}
    const onbtn5 = e =>
        {e.preventDefault();
        switch(Ans) {
            default:
            case 0: document.getElementById('buttondiv').style.display = "inline-block";    break;
            case 1: document.getElementById(demo1).style.border ="none";  break;
            case 2: document.getElementById(demo2).style.border ="none";  break;
            case 3: document.getElementById(demo3).style.border ="none";  break;
            case 4: document.getElementById(demo4).style.border ="none";  break;
        }
        document.getElementById(demo5).style.border = "solid rgba(0, 0, 255, 0.6) 5px";
        document.getElementById(demo5).style.borderRadius = "15px";
        setAns(5);}

    return (
        <div id = "Section">
            <div id = "Blocks">
            <SurveyBlock    ImgPath={btn1img}     onClick={onbtn1}  demo={demo1}/>
            <SurveyBlock    ImgPath={btn2img}     onClick={onbtn2}  demo={demo2}/>
            <SurveyBlock    ImgPath={btn3img}     onClick={onbtn3}  demo={demo3}/> 
            <SurveyBlock    ImgPath={btn4img}     onClick={onbtn4}  demo={demo4}/> 
            <SurveyBlock    ImgPath={btn5img}     onClick={onbtn5}  demo={demo5}/>
            </div>
            <Link to = {"/"+next}>
            <div id = "buttondiv" onClick={sendrequest}>
             다음
            </div>
            </Link>
        </div>
  );
}

export default Surveysection;
