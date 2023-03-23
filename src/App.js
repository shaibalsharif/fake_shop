import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import CategorySlider from './components/CategorySlider';
import NewArrival from './components/NewArrival';
import BestDeal from './components/BestDeal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='fixed z-[10] top-0' style={{ position: 'fixed', 'z-index': 10, top: '0px' }}>
        <Header />
        <Navbar />
      </div>
      <div style={{ 'margin-top': '4.5rem'}}>
        <Slider />
        <CategorySlider />
        <hr className='w-[80%] mx-auto'/>
        <NewArrival />
        <BestDeal />
        <Footer />
      </div>

    </div>
  );
}

export default App;
