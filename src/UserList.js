import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    // useEffect(() => {
    //     console.log("컴포넌트가 화면에 나타남");
    //     // props -> state
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    // 뒷정리 함수로 업데이트 직전에 호출
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log('user 값이 설정됨');
    //     console.log(user);
    //     return () => {
    //         console.log('user 값이 바뀌기 전');
    //         console.log(user);
    //     }
    //     // 위에서 조회하고 있는 값이나 props가 있다면 배열의 형태로 넣어줘야함 -> 전체 호출로인한 리소스 부하를 막기위해
    // }, [user]);

    return (
        <div>
            <b style={{ color: user.active ? 'green' : 'black', cursor: 'pointer' }} onClick={() => onToggle(user.id)}>{user.username} &nbsp; </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
                )
            }
        </div>
    )
}

export default UserList;