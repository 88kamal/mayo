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
import Howtoregister from './pages/Howtoregister';
import FeeStructure from './pages/FeeStructure';
import Withdrawalpolicy from './pages/Withdrawalpolicy';
import Shruti from './pages/Alumnae/Shruti';
import Vedita from './pages/Alumnae/Vedita';
import Chhavi from './pages/Alumnae/Chhavi';
import Harshi from './pages/Alumnae/Harshi';

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
        <Route exact path="/howtoregister" element={<Howtoregister />} />
        <Route exact path="/feeStructure" element={<FeeStructure />} />
        <Route exact path="/withdrawalpolicy" element={<Withdrawalpolicy />} />
        {/* Alumni  */}
        <Route exact path="/shruti" element={<Shruti />} />
        <Route exact path="/vedita" element={<Vedita />} />
        <Route exact path="/chhavi" element={<Chhavi />} />
        <Route exact path="/harshi" element={<Harshi />} />


      </Routes>
    </Router>
  );
}

export default App;
