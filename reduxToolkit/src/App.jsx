import { useState } from "react";

import "./App.css";
import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="bg-gray-800 rounded border text-white">
        Learn about redux toolkit
      </h1>
      <AddToDo />
      <Todos />
    </>
  );
}

export default App;
