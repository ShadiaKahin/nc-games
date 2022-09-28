import './App.css';
import { Route, Routes } from "react-router-dom";
import Reviews from './pages/Reviews';
import Categories from './pages/Cateogries';
import Category from './pages/Category';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        {/* <Route path="/" element={} /> */}
      <Route path="/reviews" element={<Reviews/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/category/:slug" element={<Category/>} />
      </Routes>
    </div>
  );
}

export default App;
