import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import developerData from '../developerData';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Header} />
            <Route path='/about' component={AboutMe} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={ContactMe} />
          </Switch>
        <Header developerData={developerData} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
