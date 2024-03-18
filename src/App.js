import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Destinations from './pages/Destination';
import ContactPage from './pages/Contact';
import PackagesPage from './pages/Packages';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Nav/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Destinations' element={<Destinations/>}/>
          <Route path='/Packages' element={<PackagesPage/>}/>
          <Route path='/Contact' element={<ContactPage/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
