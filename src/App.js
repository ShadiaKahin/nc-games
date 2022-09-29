import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Reviews from './pages/Reviews';
import Categories from './pages/Categories';
import Category from './pages/Category';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/reviews" element={ <Reviews /> } />
        <Route path="/categories" element={ <Categories /> } />
        <Route path="/category/:slug" element={ <Category /> } />
      </Routes>
    </div>
  );
}

export default App;
