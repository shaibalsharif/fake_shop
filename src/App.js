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
      <div className='fixed z-[10] top-0'>
        <Header />
        <Navbar />
      </div>
      <div className='mt-[4.5rem]'>
        <Slider />
        <CategorySlider />
        <NewArrival />
        <BestDeal />
        <Footer />
      </div>

    </div>
  );
}

export default App;
