import './App.css';
import './Responsive.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import ChooseUs from './components/ChooseUs';

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Features/>
        <About/>
        <ChooseUs/>
    </div>
  );
}

export default App;