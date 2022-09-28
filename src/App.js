import './App.css';
import { Route, Routes } from "react-router-dom";
import Reviews from './pages/Reviews';
import Categories from './pages/cateogries';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
      <Route path="/reviews" element={<Reviews/>} />
      <Route path="/categories" element={<Categories/>} />
      </Routes>
    </div>
  );
}

export default App;
