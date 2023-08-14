import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from './components/login/Login';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/portfolio"><Portfolio /> </Route>
        <Route path="/about"><About /> </Route>
        <Route path="/contact"><Contact /> </Route>
        <Route path="/home"> <Home /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
