import './App.css';
import { Route, Routes } from "react-router-dom";
import Reviews from './pages/Reviews'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/reviews" element={<Reviews/>} />

      </Routes>
    </div>
  );
}

export default App;
