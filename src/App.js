import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "박건웅",
      email: "bung1438@gmail.com"
    },
    {
      id: 2,
      username: 'tester',
      email: "tester@example.com"
    },
    {
      id: 3,
      username: 'liz',
      email: "liz@example.com"
    }
  ]);



  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: inputs.username,
      email: inputs.email,
    };

    // 방법 1 : 스프레드 문법 사용
    // setUsers([...users, user]);
    // 방법 2 : 자바스크립트 배열 내장함수 concat 사용
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser username={inputs.username} email={inputs.email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </>
  );
}

export default App;
