import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/> 
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
