import React from 'react'
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
