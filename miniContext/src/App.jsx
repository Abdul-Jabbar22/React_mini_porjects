import { useState } from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";

import "./App.css";
import UserContextProvider from "./context/userContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Reat with chai or code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
