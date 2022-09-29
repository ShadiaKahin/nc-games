import './App.css';
import { Route, Routes } from "react-router-dom";

import {
  Homepage,
  Reviews,
  Review,
  Categories,
} from './pages/index';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/review/:review_id" element={ <Review /> } />
        <Route path="/categories" element={ <Categories /> } />
        <Route path="/reviews/:slug" element={ <Reviews /> } />
      </Routes>
    </div>
  );
}

export default App;
