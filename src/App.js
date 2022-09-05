import './App.css';
import './Responsive.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import ChooseUs from './components/ChooseUs';
import Prices from './components/Prices';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Features/>
        <About/>
        <ChooseUs/>
        <Prices/>
        {/* <Testimonial/>
        <Newsletter/>
        <Footer/> */}
    </div>
  );
}

export default App;