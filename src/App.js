import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './pages/About';
import Admission from './pages/Admission';
import Facilities from './pages/Facilities';
import Studentlife from './pages/Studentlife';
import Conactus from './pages/Conactus';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admission" element={<Admission />} />
        <Route exact path="/facilities" element={<Facilities />} />
        <Route exact path="/studentlife" element={<Studentlife />} />
        <Route exact path="/conactus" element={<Conactus />} />
      </Routes>
    </Router>
  );
}

export default App;
