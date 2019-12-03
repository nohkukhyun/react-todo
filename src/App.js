import React from "react";
import "./App.css";
import DiaryTemplate from "./components/DiaryTemplate/DiaryTemplate";
import DiaryInsert from "./components/DiaryInsert/DiaryInsert";

function App() {
  return (
    <div className="App">
      <DiaryTemplate>
        <DiaryInsert />
      </DiaryTemplate>
    </div>
  );
}

export default App;
