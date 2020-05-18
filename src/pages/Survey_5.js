import React from 'react';
import './Survey_1.css';
import Header from '../components/Header';
import Question from '../components/Question';
import Surveysection from'../components/priceSS';
import btn1img from '../images/single.png'; import btn2img from '../images/baby.png'; import btn3img from '../images/but31.png'; import btn4img from '../images/but41.png'; import btn5img from '../images/but51.png';
function Survey_5() {
window.scrollTo(0,0);

    return (
        <div className="Survey-header">
            <Header />
            <Question Q="원하시는 가격대가 있나요?" desc="비지떡은 NoNo! 쓸만한 제품만 모았어요!"/>
            <Surveysection now="Survey_5" next="Result"
            demo1="비지떡"  demo2="가성비"    demo3="성능"     demo4="프리미엄" demo5="만수르"
            btn1img={btn1img} btn2img={btn2img} btn3img={btn3img} btn4img={btn4img}   btn5img={btn5img}/>
        </div>
  );
}

export default Survey_5;
