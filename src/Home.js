import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div id="Texts">
          <h1> KaiPick</h1>
          <div className="demo">
            <p>성능 디자인 가격</p>
            <p>당신이 원하는 바로 그 제품</p>
            <p>이젠 전문가가 골라드립니다 </p>
          </div>
          <div id= "btn">
            <Link to ="/Survey_1">
              <button id="StartButton">TV로 시작하기</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
