/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  // 자주 바뀌는 중요한 데이터는 state 사용
  // 웹앱처럼 새로고침이 최소화 하기위해
  let [글제목1, 글제목변경1] = useState("남자 코트 추천1");
  let [글제목2, 글제목변경2] = useState("남자 코트 추천2");
  let [글제목3, 글제목변경3] = useState("남자 코트 추천3");

  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목1}</h3>
        <p>2월 17일 발행</p>
        <hr />

        <h3>{글제목2}</h3>
        <p>2월 17일 발행</p>
        <hr />

        <h3>{글제목3}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
