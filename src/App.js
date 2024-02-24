import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/UI/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [sorted, setSorted] = useState("asc");
  const changeSortedHandler = () => {
    setSorted((last) => (last === "asc" ? "desc" : "asc"));
  };
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  return (
    <div className="app">
      <DemoList
        sorted={sorted}
        title={listTitle}
        items={useMemo(() => {
          return [5, 3, 1, 10, 9];
        }, [])}
      />
      <Button onClick={changeSortedHandler}>
        Change to {sorted === "asc" ? "desc" : "asc"}
      </Button>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
