import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Layout from './components/Layout';
import MoreAbout from './components/MoreAbout';
import AdmissionInfo from './components/AdmissionInfo';
import BeyonAcademy from './components/BeyonAcademy';
import SimilarSchool from './components/SimilarSchool';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

function App() {
  return (
    <div>
      <Layout/>
      <Hero/>
      <MoreAbout/>
      <AdmissionInfo/>
      <BeyonAcademy/>
      <SimilarSchool/>
      <Testimonials/>
      <Faq/>
    </div>
  );
}

export default App;
