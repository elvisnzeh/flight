import logo from './logo.svg';
import './App.css';
import { Landingpage } from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import { Professional } from './components/Professional';
// import {LowestFareComp }from "./components/LowestFareComp";
// import { Footer } from './components/Footer';
// import About from './components/About';
// import LowestFareCompp from './components/LowestFareCompp';
// import FlightBookingForm from './components/LowestFareCompp';
// import Book from './components/Book';
// import { Footer } from './components/Footer';
// import LowestFareComp from './components/LowestFareComp';
// import Services from './components/Services';



function App() {
  return (
    <div>
   {/* <>
   <Routes>
   <Route path='/Book'element={<Book/>} />
   <Route path='/About'element={<About/>} />
   </Routes>
   </> */}
  
    <Landingpage />
    </div>
  );
}

export default App;
