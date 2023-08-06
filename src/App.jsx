
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Red from './components/Red';
import Blue from './components/Blue';
import Footer from './components/Footer';



function App() {
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/blue" element={<Blue />} />
        </Routes>
      </div>
      <Footer /> {/* Add the Footer component at the end */}
    </div>
  );
}

export default App;
