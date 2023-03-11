import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <News pageSize={5} country="us" category="sports" /> */}
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={5}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={5}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key="general"
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News key="health" pageSize={5} country="us" category="health" />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={5}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News key="sports" pageSize={5} country="us" category="sports" />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={5}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
