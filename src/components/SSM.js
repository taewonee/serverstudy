/*
import React, {useState} from 'react';
import './SSM.css';
import {Link} from 'react-router-dom';
import SendRequest from '../send_request.js';
import SurveyBlock from '../components/SurveyBlock';
import submitimg from '../images/black.jpg';

function Surveysection({now}, {next}) {
    const [btnImg1, setbtnImg1] = useState(btn1img); const [btnImg2, setbtnImg2] = useState(btn2img); const [btnImg3, setbtnImg3] = useState(btn3img); const [btnImg4, setbtnImg4] = useState(btn4img); const [btnImg5, setbtnImg5] = useState(btn5img);
    const [btn1, setbtn1] = useState(false); const [btn2, setbtn2] = useState(false); const [btn3, setbtn3] = useState(false); const [btn4, setbtn4] = useState(false); const [btn5, setbtn5] = useState(false);
    const sendrequest = e =>
    {
        SendRequest(btn1, btn2, btn3, btn4, btn5, {now})
    }
    const onbtn1 = e =>
        {e.preventDefault();
        if(btn1 === false){
            setbtn1(true);
            setbtnImg1(btn1on);}
        else{
            setbtn1(false);
            setbtnImg1(btn1img);}}

    const onbtn2 = e =>
        {e.preventDefault();
        if(btn2 === false){
            setbtn2(true);
            setbtnImg2(btn2on);}
        else{
            setbtn2(false);
            setbtnImg2(btn2img);}}

    const onbtn3 = e =>
        {e.preventDefault();
        if(btn3 === false){
            setbtn3(true);
            setbtnImg3(btn3on);}
        else{
            setbtn3(false);
            setbtnImg3(btn3img);}}

    const onbtn4 = e =>
        {e.preventDefault();
        if(btn4 === false){
            setbtn4(true);
            setbtnImg4(btn4on);}
        else{
            setbtn4(false);
            setbtnImg4(btn4img);}}

    const onbtn5 = e =>
        {e.preventDefault();
        if(btn5 === false){
            setbtn5(true);
            setbtnImg5(btn5on);}
        else{
            setbtn5(false);
            setbtnImg5(btn5img);}}
            
    return (
        <div id = "Section">
            <div id = "Blocks">
            <SurveyBlock    ImgPath={btnImg1}     onClick={onbtn1}  demo="싱글"/>
            <SurveyBlock    ImgPath={btnImg2}     onClick={onbtn2}  demo="아기" />
            <SurveyBlock    ImgPath={btnImg3}     onClick={onbtn3}  demo=""/> 
            <SurveyBlock    ImgPath={btnImg4}     onClick={onbtn4}  demo=""/> 
            <SurveyBlock    ImgPath={btnImg5}     onClick={onbtn5}  demo=""/>
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
*/