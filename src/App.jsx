import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <News />
    </div>
  );
}

export default App;
