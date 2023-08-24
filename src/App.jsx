import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Login from './components/login/Login';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/registration/Registration';
import { Data, DataLoader } from './components/data/Data';
import _404 from './components/errors/_404';

const App = () => {
  const Root = () => {
    return (
      <script type="text/javascript">window.addEventListener("onload",function(){window.location.href="/home"})</script>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Routes>
        <>
          <Route path="*" element={<_404 />} />
          <Route path="/" element={<Root />} />
          <Route index path="/home" element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Login />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/data" element={<Data />} loader={ DataLoader }/>
        </>
      // </Routes>
    )
  );

  return (

    <div className='app'>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
