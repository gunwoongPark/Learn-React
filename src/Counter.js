import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // 함수형 업데이트를 통해 상태를 업데이트
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        // 값 자체를 대입
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;