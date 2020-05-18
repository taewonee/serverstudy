import React from 'react';
import './Survey_1.css';
import Header from '../components/Header';
import Question from '../components/Question';
import Surveysection from'../components/SurveySection';
import btn1img from '../images/sport.jpg'; import btn2img from '../images/game.jpg'; import btn3img from '../images/news.jpg'; import btn4img from '../images/movie.jpg'; import btn5img from '../images/kids.jpg';

function Survey_3() {
    return (
        <div className="Survey-header">
            <Header />
            <Question Q="주 용도가 무엇인가요?" desc="가장 많이 사용하는 단 하나! 골라주세요"/>
            <Surveysection now="Survey_3" next="Survey_4"
            demo1="게임"  demo2="스포츠"    demo3="뉴스/드라마"     demo4="영화" demo5="키즈"
            btn1img={btn1img} btn2img={btn2img} btn3img={btn3img} btn4img={btn4img}   btn5img={btn5img}/>
        </div>
  );
}

export default Survey_3;
