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
import Contactus from './pages/Contactus';

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
        <Route exact path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
