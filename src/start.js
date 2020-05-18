import React from 'react';
import './App.css';
import Navigation from './components/Nav.js';


function App() {
  return (
    <div className="App">
      background-image: url('/images/ping.png');
      <header className="App-header">
        <h1> KaiPick</h1>
        <ul>
          <li>성능 디자인 가격</li>
          <li>당신이 원하는 바로 그 제품</li>
          <li>전문가가 골라드립니다</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ValuePlus와 시작하기
        </a>
      </header>
    </div>
  );
}

export default App;
