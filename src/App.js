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
      <Header />
      <Navbar />
      <Slider />
      <CategorySlider />
      <NewArrival />
      <BestDeal />
      <Footer />
    </div>
  );
}

export default App;
