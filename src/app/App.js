import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/ContactMe';
import Socials from '../components/SocialMedia';
import Extra from '../components/Extracurricular';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Socials />
      <AboutMe />
      <Portfolio />
      <Extra />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
