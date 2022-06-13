import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path={`/Products/:id`} element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
