import React from 'react';
import './Survey_1.css';
import Header from '../components/Header';
import Question from '../components/Question';
import Surveysection from'../components/SurveySection';
import btn1img from '../images/single.png'; import btn2img from '../images/baby.png'; import btn3img from '../images/but31.png'; import btn4img from '../images/but41.png'; import btn5img from '../images/but51.png';

function Survey_4() {
    return (
        <div className="Survey-header">
            <Header />
            <Question Q="기타 사항을 선택해 주세요" desc="스킵 하실 수 있어요!"/>
            <Surveysection now="Survey_4" next="Survey_5"
            demo1="브랜드"  demo2="사이즈"    demo3=""     demo4="" demo5=""
            btn1img={btn1img} btn2img={btn2img} btn3img={btn3img} btn4img={btn4img}   btn5img={btn5img}/>
        </div>
  );
}

export default Survey_4;
