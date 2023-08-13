import './App.css';
import { /* Link, */ Route, /* Switch, */ BrowserRouter, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Home from './components/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
