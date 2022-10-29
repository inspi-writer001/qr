import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Qrcod from "./Qrcod";
import Home from './Home';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/value/:id"
          element={<Qrcod />}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
