import React, { useEffect, memo } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import "./Detail.scss";

function Cart(props) {
  function 버튼누르면() {
    props.dispatch({ type: "alert닫기" });
  }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량증가", index: a.id });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소", index: a.id });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alert열렸니 ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={버튼누르면}>닫기</button>
        </div>
      ) : null}

      <Parent 이름="박건웅1" 나이="25" />
    </div>
  );
}

function state를props화(state) {
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}

function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름} />
      <Child2 나이={props.나이} />
    </div>
  );
}

function Child1() {
  useEffect(() => {
    console.log("렌더링됨1");
  });
  return <div>1111</div>;
}

let Child2 = memo(function () {
  useEffect(() => {
    console.log("렌더링됨2");
  });
  return <div>2222</div>;
});

export default connect(state를props화)(Cart);

// export default Cart;
