import './App.css';
import './Responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './router/Router';
// import Preloder from './components/Preloder';
// import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Preloder/> */}
      <Router>
        <Header/>
        <Routes/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;