import './App.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app_parent_container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
