import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Login from './components/login/Login';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/registration/Registration';
import { DogData, DataLoader } from './components/data/DogData';
import JSONPlaceHolder from './components/data/JSONPlaceholder';
import Posts from './components/redux-toolkit/Posts';
// eslint-disable-next-line
import _404 from './components/errors/_404';
import { useState } from 'react';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const Root = () => {
    return (
      <script type="text/javascript">window.addEventListener("onload",function(){window.location.href="/home"})</script>
    );
  }
  
  const router = createBrowserRouter(

      createRoutesFromElements(
        <>
          {// eslint-disable-next-line
          }<Route path="*" element={<_404 />} />
          <Route path="/" element={<Root />} />
          <Route index path="/home" element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Login />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<DogData />}/>
          <Route path="/dogdata" element={<DogData />} loader={ DataLoader }/>
          <Route path="/jsonplaceholder" element={<JSONPlaceHolder />}/>
          <Route path="/posts" element={<Posts />}/>
        </>
    )
  );

  return (

    <div className='app'>
      <Header isLoggedIn={isLoggedIn} />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
