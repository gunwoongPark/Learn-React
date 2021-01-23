/* eslint-disable */

import "./App.css";
import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    { 글: "남자 코트 추천", 따봉: 0 },
    { 글: "강남 우동 맛집", 따봉: 0 },
    { 글: "파이썬 독학", 따봉: 0 },
  ]);

  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map((글, index) => {
        return (
          <div className="list" key={index}>
            <h3>
              {글.글}
              <span
                onClick={() => {
                  let newArr = [...글제목];

                  let index = newArr.findIndex((el) => el.글 === 글.글);
                  newArr[index].따봉 += 1;

                  글제목변경(newArr);
                }}
              >
                👍
              </span>
              {글.따봉}
            </h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        );
      })}

      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
