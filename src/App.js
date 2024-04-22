
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Restaurant from './Components/Restaurant';
import RestaurantScreen from './Screen/RestaurantScreen';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <RestaurantScreen/>
    <Restaurant/>
    <Footer/>
    
    </div>
  );
}

export default App;
