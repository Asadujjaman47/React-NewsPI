import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <News pageSize={5} />
    </div>
  );
}

export default App;
