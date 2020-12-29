import React, { useRef } from 'react';
import UserList from "./UserList";

function App() {
  const users = [
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
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
