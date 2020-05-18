import React from 'react';
import './Survey_1.css';
import Header from '../components/Header';
import Question from '../components/Question';
import SurveySectionforBaby from'../components/babySS';
import btn1img from '../images/single.png'; import btn2img from '../images/mid_fam.png'; import btn3img from '../images/big_fam.png'; import btn4img from '../images/baby.png'; import btn5img from '../images/black.jpg';

function Survey_1() {
    return (
        <div className="Survey-header">
            <Header />
            <Question Q="누가 사용할 건가요?" desc="성장기 유아가 있다면 꼭 선택해주세요!"/>
            <SurveySectionforBaby now="Survey_1" next="Survey_2"
            demo1="1~2인 가정"  demo2="3~4인 가정"    demo3="5인 이상"     demo4="baby"     demo5=""
            btn1img={btn1img} btn2img={btn2img} btn3img={btn3img} btn4img={btn4img}   btn5img={btn5img}/>

        </div>
  );
}

export default Survey_1;
