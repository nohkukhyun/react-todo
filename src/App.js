import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import DiaryTemplate from "./components/DiaryTemplate/DiaryTemplate";
import DiaryInsert from "./components/DiaryInsert/DiaryInsert";
import DiaryList from "./components/DiaryList/DiaryList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "안녕하세요",
      checked: true
    },
    {
      id: 2,
      text: "리액트 개발자",
      checked: true
    },
    {
      id: 3,
      text: "노국현이라고 합니다.",
      checked: false
    },
    {
      id: 4,
      text: "만나서 반갑습니다.",
      checked: false
    },
    {
      id: 5,
      text: "열심히 해봐요.",
      checked: false
    }
  ]);

  //고유값 id
  const nextId = useRef(6);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  });
  return (
    <div className="App">
      <DiaryTemplate>
        <DiaryInsert onClick={onInsert} />
        <DiaryList todos={todos} />
      </DiaryTemplate>
    </div>
  );
};

export default App;
