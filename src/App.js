import React, { useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter(user => user.active).length;
}

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
      email: "bung1438@gmail.com",
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: "liz@example.com",
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: inputs.username,
      email: inputs.email,
    };

    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user))
  }

  // 컴포넌트 성능 최적화를 위함
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={inputs.username} email={inputs.email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
