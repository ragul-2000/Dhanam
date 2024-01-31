
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path ="/aboutus" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
