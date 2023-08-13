
import './App.css';
import Login from './components/login/Login';
import { Link, Route, Switch } from "react-router-dom";
import { Portfolio } from './components/portfolio/Portfolio';
import { About } from './components/about/About';
import { Home } from './components/home'


function App() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/portfolio"><Portfolio /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/contact"><Login /></Route>
    </Switch>
  );
}

export default App;
