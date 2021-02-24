import React, { useReducer } from 'react'

// useReducer 사용 시 상태 업데이트 로직이 컴포넌트 밖에 있어서
// 코드가 더 간결하고 보기 쉬워짐
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
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