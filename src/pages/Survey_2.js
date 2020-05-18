import React from 'react';
import Header from '../components/Header';
import Question from '../components/Question';
import Surveysection from'../components/SurveySection';
import btn1img from '../images/single.png'; import btn2img from '../images/small_liv.jpg'; import btn3img from '../images/big_liv.jpg'; import btn4img from '../images/bedroom.jpg'; import btn5img from '../images/office.jpg';

function Survey_2() {
    return (
        <div className="Survey-header">
            <Header />
            <Question Q="어디서 보실 건가요?" desc="맞춤형 선택에 꼭 필요합니다! 추후 선택 가능하니 편하게 눌러주세요!"/>
            <Surveysection now="Survey_2" next="Survey_3"
            demo1="원룸"  demo2="작은 거실"    demo3="큰 거실"     demo4="침실" demo5="사무실"
            btn1img={btn1img} btn2img={btn2img} btn3img={btn3img} btn4img={btn4img}   btn5img={btn5img}/>
        </div>
  );
}

export default Survey_2;
